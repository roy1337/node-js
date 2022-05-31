const EventEmitter = require('events')

const celebrity = new EventEmitter();


//subscribe to celebrity for observer1

celebrity.on('race win',()=> {
    console.log('Congratulations! you are the best!')
});

//subscribe to celebrity for observer2

celebrity.on('race win',()=> {
    console.log('Boo, I coulde have done better than that! ')
});

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

celebrity.emit('race win');