//Load library
const net = require('net');
const host = process.argv[2].split("") //www.google.com
// const path = host + "/" //www.google.com/
// const pathTo = path.split('.')[2] // com/
const uri;

for(var i = 0; i < host.length; i++){
  if(host[i] === "/"){
    let slash = host.indexOf('/')
    let getUri = host.slice(slash, host.length)
    let joinUri = getUri.join("")
    console.log("THIS IS URI", joinUri)
  }
}

//connecting client to server
const client = net.connect({ port: 80, host: process.argv[2]}, () => {

client.write(`GET / HTTP/1.1
Host: ${host}
Connection: keep-alive
Date: ${new Date().toUTCString()}

`)
  //Importing message from server
  client.on('data', (data) => {
      process.stdout.write(data.toString());

  });

});



