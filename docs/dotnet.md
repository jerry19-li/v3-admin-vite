# 目录

- [项目依赖包](#项目依赖包)
- [调试](#调试)
  - [命令行](#命令行)
  - [Swagger](#swagger)
    - [Swagger 接口文档增加注释](#swagger接口文档增加注释)
- [数据库](#数据库)
  - [EFCore](#efcore)
  - [Dapper](#dapper)
- [跨域](#跨域)
- [IServiceCollection](#iservicecollection)

## 创建项目

1. dotnet new console -f net6.0 `创建控制台项目`
2. dotnet new sln -n 项目名称 `创建sln项目`
3. dotnet new webapi -f net6.0 `创建webapi项目`
4. dotnet new web -f net6.0 `创建空项目`

## 杂项

dotnet --list-sdks `查看安装的版本`  
dotnet --help

## 运行

dotnet run  
dotnet build

## 发布

dotnet publish -c Release

## 项目依赖包

1. 填加包  
   填加依赖包以及其依赖项
   dotnet add package 包名  
   dotnet add package Humanizer --version 2.7.9  
   下载前详细了解地址：https://www.nuget.org/packages/包名  
   在项目文件 csproj 中可以看见依赖项

```
<ItemGroup>
    <PackageReference Include="Humanizer" Version="2.7.9" />
</ItemGroup>
```

1. 查看项目顶层包  
   dotnet list package  
   dotnet list package --include-transitive `包括各包的依赖包`
2. dotnet remove package 包名 `删除不使用的包名`
3. dotnet list package --outdated `列出所有已过时的包`
4. 常用包
   - Swashbuckle.AspNetCore `Swagger支持包`
   - Microsoft.EntityFrameworkCore.InMemory `EFCore`

# 调试

> ## 命令行
>
> - 安装:dotnet tool install -g Microsoft.dotnet-httprepl
> - httprepl https://localhost:{PORT}
> - (Disconnected)> connect https://localhost:{PORT}
> - dotnet dev-certs https --trust `Unable to find an OpenAPI description使用本指令`
> - ls `查看所有可用的api`
> - cd 目录
> - mkdir 目录
> - get/get 参数 `读取`
> - post -c "{"name":"Hawaii", "isGlutenFree":false}" `创建`
> - put `更新Update`
> - delete 3 `删除`
> - exit `退出httprepl会话`

> ## Swagger
>
> > 自文档化 API，使用`https://localhost:7143/swagger`访问
> >
> > ```C#
> > dotnet add package Swashbuckle.AspNetCore
> > using Microsoft.OpenApi.Models;
> > builder.Services.AddEndpointsApiExplorer();
> > builder.Services.AddSwaggerGen();
> > var app = builder.Build();
> > if (app.Environment.IsDevelopment()){
> >     app.UseSwagger();
> >     app.UseSwaggerUI();
> > }
> > ```

## Swagger 接口文档增加注释

- .csproj 文件增加如下配置以产生 XML 注释调试信息，1591 警告为缺少注释

```C#
 <PropertyGroup>
  <GenerateDocumentationFile>true</GenerateDocumentationFile>
  <NoWarn>$(NoWarn);1591</NoWarn>
 </PropertyGroup>
```

- 代码中加载注释文件

```C#
  services.AddSwaggerGen(c => {
        c.SwaggerDoc("v1", new OpenApiInfo { Version = "v1", Title = "My API", Description = "My Description" });
        // 加载注释文件
        var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
        var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
        c.IncludeXmlComments(xmlPath);
  });
```

- 代码接口写注释信息
  - `<summary>注释信息</summary>`
  - `<remarks>示例文字,元素内容可包含文本，JSON或XML</remarks>`
  - `<response code="201">异常返回</response>`

```C#
/// <summary>
/// 创建一个对象TodoItem
/// </summary>
/// <remarks>
/// Sample request:
///
///     POST /Todo
///     {
///        "id": 1,
///        "name": "Item1",
///        "isComplete": true
///     }
/// 返回值TodoItem
/// </remarks>
/// <param name="item"></param>
/// <returns>返回一个新的TodoItem</returns>
/// <response code="201">返回新创建的项</response>
/// <response code="400">如果该项为空</response>
[HttpPost]
public ActionResult<TodoItem> Create(TodoItem item)
```

## 数据库

### EFCore

- 安装

  - dotnet tool install --global dotnet-ef `EF Core 工具执行设计时开发任务`
  - dotnet ef migrations add InitialCreate `EF Core 将在项目目录中创建一个名为“Migrations”的文件夹`
  - dotnet ef database update `上面运行完后，根据代码创建数据库`

- 依赖包
  - Microsoft.EntityFrameworkCore.Sqlite

```C#
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using MiniValidation;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("TodoDb") ?? "Data Source=todos.db";
builder.Services.AddSqlite<TodoDb>(connectionString)
                .AddDatabaseDeveloperPageExceptionFilter();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

await EnsureDb(app.Services, app.Logger);

if (!app.Environment.IsDevelopment()) {
    app.UseExceptionHandler("/error");
}

app.MapGet("/error", () => Results.Problem("An error occurred.", statusCode: 500))
   .ExcludeFromDescription();

app.MapSwagger();
app.UseSwaggerUI();

app.MapGet("/", () => "Hello World!")
    .WithName("Hello");

app.MapGet("/hello", () => new { Hello = "World" })
    .WithName("HelloObject");

app.MapGet("/todos", async (TodoDb db) =>
    await db.Todos.ToListAsync())
    .WithName("GetAllTodos");

app.MapGet("/todos/complete", async (TodoDb db) =>
    await db.Todos.Where(t => t.IsComplete).ToListAsync())
    .WithName("GetCompleteTodos");

app.MapGet("/todos/incomplete", async (TodoDb db) =>
    await db.Todos.Where(t => !t.IsComplete).ToListAsync())
    .WithName("GetIncompleteTodos");

app.MapGet("/todos/{id}", async (int id, TodoDb db) =>
    await db.Todos.FindAsync(id)
        is Todo todo
            ? Results.Ok(todo)
            : Results.NotFound())
    .WithName("GetTodoById")
    .Produces<Todo>(StatusCodes.Status200OK)
    .Produces(StatusCodes.Status404NotFound);

app.MapPost("/todos", async (TodoDb db, Todo todo) => {
        if (!MiniValidator.TryValidate(todo, out var errors))
            return Results.ValidationProblem(errors);

        db.Todos.Add(todo);
        await db.SaveChangesAsync();

        return Results.Created($"/todos/{todo.Id}", todo);
    })
    .WithName("CreateTodo")
    .ProducesValidationProblem()
    .Produces<Todo>(StatusCodes.Status201Created);

app.MapPut("/todos/{id}", async (int id, Todo inputTodo, TodoDb db) => {
        if (!MiniValidator.TryValidate(inputTodo, out var errors))
            return Results.ValidationProblem(errors);

        var todo = await db.Todos.FindAsync(id);

        if (todo is null) return Results.NotFound();

        todo.Title = inputTodo.Title;
        todo.IsComplete = inputTodo.IsComplete;

        await db.SaveChangesAsync();

        return Results.NoContent();
    })
    .WithName("UpdateTodo")
    .ProducesValidationProblem()
    .Produces(StatusCodes.Status404NotFound)
    .Produces(StatusCodes.Status204NoContent);

app.MapPut("/todos/{id}/mark-complete", async (int id, TodoDb db) => {
        var todo = await db.Todos.FindAsync(id);

        if (todo is null) return Results.NotFound();

        todo.IsComplete = true;

        await db.SaveChangesAsync();

        return Results.NoContent();
    })
    .WithName("MarkComplete")
    .Produces(StatusCodes.Status404NotFound)
    .Produces(StatusCodes.Status204NoContent);

app.MapPut("/todos/{id}/mark-incomplete", async (int id, TodoDb db) => {
        var todo = await db.Todos.FindAsync(id);

        if (todo is null) return Results.NotFound();

        todo.IsComplete = false;

        await db.SaveChangesAsync();

        return Results.NoContent();
    })
    .WithName("MarkIncomplete")
    .Produces(StatusCodes.Status404NotFound)
    .Produces(StatusCodes.Status204NoContent);

app.MapDelete("/todos/{id}", async (int id, TodoDb db) => {
        var todo = await db.Todos.FindAsync(id);

        if (todo is null) return Results.NotFound();

        db.Todos.Remove(todo);

        await db.SaveChangesAsync();

        return Results.NoContent();
    })
    .WithName("DeleteTodo")
    .Produces(StatusCodes.Status404NotFound)
    .Produces(StatusCodes.Status204NoContent);

app.MapDelete("/todos/delete-all", async (TodoDb db) =>
    Results.Ok(await db.Database.ExecuteSqlRawAsync("DELETE FROM Todos")))
    .WithName("DeleteAll")
    .Produces<int>(StatusCodes.Status200OK);

app.Run();

async Task EnsureDb(IServiceProvider services, ILogger logger) {
    logger.LogInformation("Ensuring database exists and is up to date at connection string '{connectionString}'", connectionString);

    using var db = services.CreateScope().ServiceProvider.GetRequiredService<TodoDb>();
    await db.Database.MigrateAsync();
}

class Todo {
    public int Id { get; set; }
    [Required]
    public string? Title { get; set; }
    public bool IsComplete { get; set; }
}

class TodoDb : DbContext {
    public TodoDb(DbContextOptions<TodoDb> options)
        : base(options) { }

    public DbSet<Todo> Todos => Set<Todo>();
}

```

### Dapper

- 依赖包
  - Microsoft.Data.Sqlite
  - Dapper

```C#
using System.ComponentModel.DataAnnotations;
using Microsoft.Data.Sqlite;
using Dapper;
using MiniValidation;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("TodoDb") ?? "Data Source=todos.db;Cache=Shared";
builder.Services.AddScoped(_ => new SqliteConnection(connectionString));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

await EnsureDb(app.Services, app.Logger);

if (!app.Environment.IsDevelopment()) {
    app.UseExceptionHandler("/error");
}

app.MapGet("/error", () => Results.Problem("An error occurred.", statusCode: 500))
   .ExcludeFromDescription();

app.MapSwagger();
app.UseSwaggerUI();

app.MapGet("/", () => "Hello World!")
   .WithName("Hello");

app.MapGet("/hello", () => new { Hello = "World" })
   .WithName("HelloObject");

app.MapGet("/todos", async (SqliteConnection db) =>
    await db.QueryAsync<Todo>("SELECT * FROM Todos"))
   .WithName("GetAllTodos");

app.MapGet("/todos/complete", async (SqliteConnection db) =>
    await db.QueryAsync<Todo>("SELECT * FROM Todos WHERE IsComplete = true"))
   .WithName("GetCompleteTodos");

app.MapGet("/todos/incomplete", async (SqliteConnection db) =>
    await db.QueryAsync<Todo>("SELECT * FROM Todos WHERE IsComplete = false"))
   .WithName("GetIncompleteTodos");

app.MapGet("/todos/{id}", async (int id, SqliteConnection db) =>
    await db.QuerySingleOrDefaultAsync<Todo>("SELECT * FROM Todos WHERE Id = @id", new { id })
        is Todo todo
            ? Results.Ok(todo)
            : Results.NotFound())
    .WithName("GetTodoById")
    .Produces<Todo>(StatusCodes.Status200OK)
    .Produces(StatusCodes.Status404NotFound);

app.MapPost("/todos", async (Todo todo, SqliteConnection db) => {
        if (!MiniValidator.TryValidate(todo, out var errors))
            return Results.ValidationProblem(errors);

        var newTodo = await db.QuerySingleAsync<Todo>(
            "INSERT INTO Todos(Title, IsComplete) Values(@Title, @IsComplete) RETURNING * ", todo);

        return Results.Created($"/todos/{newTodo.Id}", newTodo);
    })
    .WithName("CreateTodo")
    .ProducesValidationProblem()
    .Produces<Todo>(StatusCodes.Status201Created);

app.MapPut("/todos/{id}", async (int id, Todo todo, SqliteConnection db) => {
        todo.Id = id;
        if (!MiniValidator.TryValidate(todo, out var errors))
            return Results.ValidationProblem(errors);

        return await db.ExecuteAsync("UPDATE Todos SET Title = @Title, IsComplete = @IsComplete WHERE Id = @Id", todo) == 1
            ? Results.NoContent()
            : Results.NotFound();
    })
    .WithName("UpdateTodo")
    .ProducesValidationProblem()
    .Produces(StatusCodes.Status204NoContent)
    .Produces(StatusCodes.Status404NotFound);

app.MapPut("/todos/{id}/mark-complete", async (int id, SqliteConnection db) =>
    await db.ExecuteAsync("UPDATE Todos SET IsComplete = true WHERE Id = @Id", new { id }) == 1
        ? Results.NoContent()
        : Results.NotFound())
    .WithName("MarkComplete")
    .Produces(StatusCodes.Status204NoContent)
    .Produces(StatusCodes.Status404NotFound);

app.MapPut("/todos/{id}/mark-incomplete", async (int id, SqliteConnection db) =>
    await db.ExecuteAsync("UPDATE Todos SET IsComplete = false WHERE Id = @Id", new { id }) == 1
        ? Results.NoContent()
        : Results.NotFound())
    .WithName("MarkIncomplete")
    .Produces(StatusCodes.Status204NoContent)
    .Produces(StatusCodes.Status404NotFound);

app.MapDelete("/todos/{id}", async (int id, SqliteConnection db) =>
    await db.ExecuteAsync("DELETE FROM Todos WHERE Id = @id", new { id }) == 1
        ? Results.NoContent()
        : Results.NotFound())
    .WithName("DeleteTodo")
    .Produces(StatusCodes.Status204NoContent)
    .Produces(StatusCodes.Status404NotFound);

app.MapDelete("/todos/delete-all", async (SqliteConnection db) => Results.Ok(await db.ExecuteAsync("DELETE FROM Todos")))
    .WithName("DeleteAll")
    .Produces<int>(StatusCodes.Status200OK);

app.Run();

async Task EnsureDb(IServiceProvider services, ILogger logger) {
    logger.LogInformation("Ensuring database exists at connection string '{connectionString}'", connectionString);

    using var db = services.CreateScope().ServiceProvider.GetRequiredService<SqliteConnection>();
    var sql = $@"CREATE TABLE IF NOT EXISTS Todos (
                  {nameof(Todo.Id)} INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                  {nameof(Todo.Title)} TEXT NOT NULL,
                  {nameof(Todo.IsComplete)} INTEGER DEFAULT 0 NOT NULL CHECK({nameof(Todo.IsComplete)} IN (0, 1))
                 );";
    await db.ExecuteAsync(sql);
}

public class Todo {
    public int Id { get; set; }
    [Required]
    public string? Title { get; set; }
    public bool IsComplete { get; set; }
}

public partial class Program { }
```

## 跨域

```C#
Program .cs
// 1) define a unique string
readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// 2) define allowed domains, in this case "http://example.com" and "*" = all domains, for testing purposes only
builder.Services.AddCors(options => {
    options.AddPolicy(name: MyAllowSpecificOrigins,
      builder => {
          builder.WithOrigins("http://example.com", "*");
      });
});
// 3) use the capability
app.UseCors(“MyAllowSpecificOrigins”);
```

简单跨全域

```C#
builder.Services.AddCors();
app.UseCors(
        options => options.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin()
    );
```

## IServiceCollection

- 注册
  - services.AddTransient<ITestServiceA, TestServiceA>(); - 瞬时生命周期
  - AddScoped - 作用域生命周期
  - AddSingleton - 单例生命周期
- 创建
  - 构造函数自动创建参数，如：TestServiceA(ITest1, ITest2);
  - 手动创建：IServiceProvider.GetService<ITestServiceA>();可将此参数在构造函数中作为参数 TestServiceA(IServiceProvider)
