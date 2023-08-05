const EventEmitter= require('events');

// create emitter
// const emitter= new EventEmitter; no needed

//  the event emittor add in a class

class Worker extends EventEmitter{
    startWork(){
        console.log('workstart in 7aty');

        // raise an event when start work
        // raise an event
           setTimeout(() => {
                this.emit('startWorkBell',{
                    workStart:'in 7tay',
                    worker:'8 jon korbe kaj',
                    endWork:'ses korbe 9tay'
                })
           }, 2000);

     }

}

module.exports=Worker;
