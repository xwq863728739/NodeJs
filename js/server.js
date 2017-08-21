//node.js创建应用
var http=require("http");//使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
var server=http.createServer(function(req,res){
	//使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。
	// 函数通过 request, response 参数来接收和响应数据
	res.writeHead(200,{"content-type":"text/plain"});
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	res.end("hello world");
})
server.listen(8888);
// 终端(命令行工具)打印如下信息
console.log('Server running at http://127.0.0.1:8888/');