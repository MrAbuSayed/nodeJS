const EventEmitter= require('events');

// create emitter
const emitter= new EventEmitter;

//  register a new lishtner for startWorkBell event
emitter.on('startWorkBell',()=>{
    console.log('start the work')
    ;
})
// perameter accepted
// emitter.on('startWorkBell',({workStart,worker,endWork})=>{
//    console.log(`start the work ${workStart} ${worker} ${endWork}`);
// })

// raise an event

emitter.emit('startWorkBell');

// 1 parameter sned;
// emitter.emit('startWorkBell',' The work endend 7tay');

// multiple parameter send
// emitter.emit('startWorkBell',{
//     workStart:'in 7tay',
//     worker:'8 jon korbe kaj',
//     endWork:'ses korbe 9tay'
// });

//  add a setTimeout
// setTimeout(() => {
//     emitter.emit('startWorkBell',{
//     workStart:'in 7tay',
//     worker:'8 jon korbe kaj',
//     endWork:'ses korbe 9tay'
// });

// }, 2000);

console.log('ygfuyguyfujjffffjh7');


// যদি  event raise  না করা হয় তাহলে যতই lishtner register তৈর করুক না কেন কাজ করবে না


