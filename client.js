// const net = require('net');
// //connecting client to server
// const client = net.connect({ port: 8080 }, () => {

// });
// //Importing message from server
// client.on('data', (data) => {
//   console.log("connected client")
//   process.stdout.write(data);

//   // client.write('Host: www.devleague.com\n User-Agent: 0.0.0.0\n Date: Wed, 8 Jul 2015 11:12:31 GMT')

// });

// //sending message to server
// process.stdin.on('readable', () => {
//   let chuck = process.stdin.read()
//   if(chuck !== null){
//     client.write(chuck)
//   }
// });
