const FS=require('fs');

//// THE WAY TO SYNCRONAS type
// create and save File 
 
// FS.writeFileSync('myFile.txt','hellow wolrd');
// for append
// FS.appendFileSync('myFile.txt',' How are you ');

// FS.appendFileSync('myFile.txt',' Where are you from');

// read data from file
// const readFileSync=FS.readFileSync('myFile.txt').toString();
// console.log(readFile);




//// THE WAY TO ASYNCRONAS type

// create and save File 

//  FS.writeFile('myFile.txt','hellow World..',(err)=>{
// console.log(err);
// });
// //  for append
//  FS.appendFile('myFile.txt',' How are you.......... ',(err)=>{
//     console.log(err);
//     });
//  FS.appendFile('myFile.txt',' Where are you from........',(err)=>{
//     console.log(err);
//     });

// read data from file
FS.readFile('myFile.txt',(err,data)=>{
console.log(data.toString());
console.log(err);
});







