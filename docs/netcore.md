## 数据保护组件

- IDataProtector（数据保护器）

```C#
Startup.cs
services.AddDataProtection();

Controller.cs
using Microsoft.AspNetCore.DataProtection;

private readonly IDataProtector _dataProtector;
public TokenController(IDataProtectionProvider dataProtectionProvider) {
    _dataProtector = dataProtectionProvider.CreateProtector("Token Protector");
}

// 加密数据获得Token
[HttpGet]
[Route("Generate")]
public string Generate(string name) {
    return _dataProtector.Protect(name);
}

// 解密token
[HttpGet]
[Route("Check")]
public string Check(string token) {
    return _dataProtector.Unprotect(token);
}
```

- ITimeLimitedDataProtector（带过期时间的数据保护器,超时将发生异常）

```C#
private readonly ITimeLimitedDataProtector _dataProtector;
public TokenController(IDataProtectionProvider dataProtectionProvider) {
    _dataProtector = dataProtectionProvider.CreateProtector("Token Protector").ToTimeLimitedDataProtector();
}

_dataProtector.Protect(name, TimeSpan.FromSeconds(5));

```
