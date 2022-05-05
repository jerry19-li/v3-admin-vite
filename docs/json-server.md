## json-server

使用 json-server 库  
`npx json-server --watch db.json --port 8888`端口默认为:3000  
db.json 文件内为 json 文本，例如：

```json
{
  "array": [
    { "id": 1, "name": "Cheese Pizza" },
    { "id": 2, "name": "Al Tono" }
  ],
  "single": {
      "name": "one row"
  }
}
对上述json支持如下请求：
get /array
get /array?id=1(name=Al Tono,仅get支持其它属性查询)
post /array     body中写入json文本,添加到数组中
post /single    替换原始json
put /array/1    根据id全部替换
patch /array/1  根据id修改，可只修改部分
delete /array/1   根据id删除
```

### 参数

- \_page 来设置页码：`_page=2&_limit=2`
- \_limit 来控制每页显示条数，默认：10 条
- \_sort 来指定要排序的字段:`_sort=id&_order=desc`
- \_order 来指定排序是正排序还是逆排序（asc | desc ，默认是 asc）
- 取局部数据,\_start 来指定开始位置,\_end 来指定结束位置:`_start=2&_end=4`
- 取符合某个范围(\_gte,\_lte):`id_gte=4&id_lte=6`
- 不包含某个值(\_ne):`id_ne=1`
