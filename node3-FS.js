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

// create  File 

//  FS.writeFile('myFile.txt','hellow World..',(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log('successfully cerated');
//   }
// });

// //  for addded data
//  FS.appendFile('myFile.txt',' How are you.......... ',(err)=>{
//     console.log(err);
//     });
//  FS.appendFile('myFile.txt',' Where are you from........',(err)=>{
//     console.log(err);
//     });

// read data from file
// FS.readFile('myFile.txt',(err,data)=>{

//   if(err){
//     console.log(err);
//   }else{
//     console.log(data.toString());
//   }

// });

// rename file

// FS.rename('myFile.txt','myfile2.txt',(error)=>{
// if (error) {
//     console.log(error);
// }
// })

// Delete file 

// FS.unlink('myFile.txt',(error)=>{
//  if (error) {
//     console.log(error); 
//  }
//  else{
//     console.log('successfully deleted file');
//  }
// })

// exist file.......?
FS.exists('myFile.txt',(result)=>{
    if (result) {
        console.log(result);
    }else{
        console.log('No file');
    }
})