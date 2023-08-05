const HTTP = require('http');

// console.log(HTTP);
//  create a server
 
const server= HTTP.createServer((req,res)=>{

 if(req.url==='/'){
     res.write( `
      [
         {
          id:1,
          name:'ABu sayed',
          class:11,
          email:'abu.sayed121@yahoo.com',
          facebook:'facebook.com/Developer.sayed.1',
          relationship_Status:'single'
        },
        {
          id:2,
          name:'Fardin Akib',
          class:'eleven',
          email:'fardin.akib@yahoo.com',
          facebook:'facebook.com/fardinAkib',
          relationship_Status:'12vatari'
        },
        {
         id:3,
         name:'Jahid Hasan',
         class:'eleven',
         email:'jahid1@gmail.com',
         facebook:'facebook.com/jahid1',
         relationship_Status:'19vatari'
        },
        {
         id:4,
         name:'tarequl Rifat',
         class:'Inter First year',
         email:'tarequl@outlook.com',
         facebook:'facebook.com/tarequl',
         relationship_Status:'Mingle'
        }
        {
          id:5,
          name:'Jemima',
          class:'ten',
          email:'Jemima@gmail.com',
          facebook:'facebook.com/Jemima',
          relationship_Status:'single'
        }
     ]
        
        `);
        res.end();
       
    } 
    else if(req.url==='/1'){
         res.write(`
         {
          id:1,
          name:'ABu sayed',
          class:11,
          email:'abu.sayed121@yahoo.com',
          facebook:'facebook.com/Developer.sayed.1',
          relationship_Status:'single'
       }
       `);
       res.end();
    }
    else if(req.url==='/2'){
        res.write(`
          {
            id:2,
            name:'Fardin Akib',
            class:'eleven',
            email:'fardin.akib@yahoo.com',
            facebook:'facebook.com/fardinAkib',
            relationship_Status:'12vatari'
        }
      `);
      res.end();
   }
    else if(req.url==='/3'){
        res.write(`
          {
            id:3,
            name:'Jahid Hasan',
            class:'eleven',
            email:'jahid1@gmail.com',
            facebook:'facebook.com/jahid1',
            relationship_Status:'19vatari'
        }
    `);
    res.end();
    }  
    
    else if(req.url==='/4'){
        res.write(`
          {
            id:4,
            name:'tarequl Rifat',
            class:'Inter First year',
            email:'tarequl@outlook.com',
            facebook:'facebook.com/tarequl',
            relationship_Status:'Mingle'
       }
      `);
      res.end();
   }

    else if(req.url==='/5'){
        res.write( `
         {
            id:5,
            name:'Jemima',
            class:'ten',
            email:'Jemima@gmail.com',
            facebook:'facebook.com/Jemima',
            relationship_Status:'single'
       }
       `)
        res.end();
    }

    else{
        res.write(`
                   {
                    id:NaN,
                    type: Not found,
                    status:404 ,
                    message: zah khankir pola kichoi nai ene
                   }
        ` );
        res.end();
    }
});

server.listen(3000);

console.log('server run on localhost100 port');
