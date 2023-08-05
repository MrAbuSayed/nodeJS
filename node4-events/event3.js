
const Worker = require("./event2.js");

// create a class for Worker
 
const worker = new Worker();
worker.on('startWorkBell',({workStart,worker,endWork})=>{
   console.log(`start the work ${workStart} ${worker} ${endWork}`);
});

worker.startWork();




// NOTE ::: যে object দিয়ে event কে তৈরি করা হবে সেই object দিয়েই event কে  lishten করতে হবে
