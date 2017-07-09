const net = require('net');
const fs = require('fs')

let htmlPages = ["./public/index.html", "./public/hydrogen.html", "./public/404.html", "./public/helium.html", "./public/css/styles.css"]

const server = net.createServer( (socket) => {

    socket.on('data', (data) => {
      let url = data.toString().split('\n')[0].split(" ")[1];
      let path = "." + "/public" + url

      if(htmlPages.includes(path)) {
        let body = fs.readFile(path, (err,data) => {
          if (err) throw err;
          socket.write(`HTTP/1.1 200 OK\n Server: nginx/1.4.6 (Ubuntu)\n ${new Date().toUTCString()}\n Content-Type: text/html; charset=utf-8\n Content-Length: 40489\n Connection: keep-alive' + '\n\n' + ${data.toString()}`)
          socket.destroy();
        });
      }else {
        let errorMessage = fs.readFile('./public/404.html', (err, data) => {
          socket.write(`HTTP/1.1 200 OK\n Server: nginx/1.4.6 (Ubuntu)\n  ${new Date().toUTCString()}\n Content-Type: text/html; charset=utf-8\n Content-Length: 40489\n Connection: keep-alive' + '\n\n' + ${data.toString()}`);
          socket.destroy();
        });
      }

  });//ending incoming data
}); //ending server connection
server.listen({port: 8080})

//timestamp function
// function timestamp(){
//     var currentDate = new Date();
//     var day = currentDate.getDate();
//     var month = currentDate.getMonth() + 1;
//     var year = currentDate.getFullYear();
//     var hour = currentDate.getHours();
//     var min = currentDate.getMinutes();
//     var sec = currentDate.getSeconds();
//     return day + '/' + month+ '/' + year + ' - ' + hour + ':' + min + ':' + sec;
// }
// console.log(new Date().toUTCString())

