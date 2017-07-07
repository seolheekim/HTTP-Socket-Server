const net = require('net');
const fs = require('fs')


const server = net.createServer( (socket) => {

    socket.on('data', (data) => {
      let url = data.toString().split('\n')[0].split(" ")[1];
      let path = "." + "/public" + url

      if(url.includes(path)) {
        let errorMessage = fs.readFile('404.html', (err, data) => {
          socket.write('HTTP/1.1 200 OK\n Server: nginx/1.4.6 (Ubuntu)\n Date: Wed, 08 Jul 2015 22:31:15 GMT\n Content-Type: text/html; charset=utf-8\n Content-Length: 40489\n Connection: keep-alive' + '\n\n' + data.toString());
           socket.destroy()
        });//ending error Message function
      }//path if statment
      else {
        let body = fs.readFile( path , (err, data) => {
          if(err) throw err;
          socket.write('HTTP/1.1 200 OK\n Server: nginx/1.4.6 (Ubuntu)\n Date: Wed, 08 Jul 2015 22:31:15 GMT\n Content-Type: text/html; charset=utf-8\n Content-Length: 40489\n Connection: keep-alive' + '\n\n' + data.toString());
          socket.destroy()
        }); //ending body Message function
      }//ending else statment

      socket.on('end' () =>)

  });//ending incoming data
}); //ending server connection
server.listen({port: 8080})
