//an Emitter and Observers
// using Observers design pattern and EventEmitter
//event's name is 'race win', waiting to be emitted (last row)
//while emitted - both Observers ("on") callback functions are executed.

const EventEmitter = require('events')

const celebrity = new EventEmitter();

//Subscribe to celebrity for observer 1, who is a supporter.

celebrity.on('race',(result)=> {
    if (result === 'win'){
    console.log('First Listener - Congratulations! you are the best!')
    }
});

//Subscribe to celebrity for observer 2, who is a rival.

celebrity.on('race',(result)=> {
    if (result === 'win') {
    console.log('Second Listener - Boo, I coulde have done better than that! ')
    }
});

//Process Object is an instance of EventEmitter so it's functions
//can be used. In this case "on"
//"0" code will be printed while succeed.

process.on('exit', (code) => {
    console.log(`Third Listener, exit - About to exit with code: ${code}`);
});

//Emit calls each Listener registered for the event named 'race'
//passing the supplied arguments ('win' and 'lost' in this case)
//to 'code' in each.

console.log(celebrity.listeners('race'));
celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');