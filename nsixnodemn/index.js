// This is NODEMON pakages 


const Http= require('http');
const FS=require('fs');

const port=100;
// const hostnam='127.0.0.1';

const  server=Http.createServer((req,res)=>{

  const handleReadServer= (fileLocation,StatusCode)=>{
    FS.readFile(fileLocation,(err,data)=>{
        res.writeHead(StatusCode,{'Content-Type':'text/html'});
        res.write(data);
        // res.write(err);
        res.end();
        
    });
  };

    if (req.url==='/') {
        handleReadServer('home.HTMl',201);
    }
    if (req.url==='/about') {
        handleReadServer('about.HTMl',203);
    }
    if (req.url==='/contact') {
        handleReadServer('contact.HTMl',202);
    }
    else{
        handleReadServer('err.HTMl',404);
    }
});

server.listen(port,()=>{
    console.log(`Run the program on `);
});







