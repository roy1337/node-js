//res is a readstream of incoming data from the response
//an EventEmitter object, with number of events to listen to
//with on() we register a listener to a particular event
//res.on('data', ...) is how we register a listener for the data event
//with the data event is how we receive data from incoming streams
//the listener will be called one or more times with chunks of arriving data.

const https = require('https')

const request = http.request('https://www.google.com', (res)=>{
    res.on('data', (chunk) => {
        console.log(`Data chunk ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});

request.end();



//we can use destructuring and removing the https.

const {request} = require('https')

const request = request('https://google.com', (res) => {
    res.on('data',(chunk) => {
        console.log(chunk)
    })
})


//we can use destructuring and GET instead of REQUEST so we dont need
// to use END. notice - only works with GET request.

const {get} = require('https')

const request = get('https://google.com',(res) => {
    res.on('data' , (chunk) => {
        console.log(chunk)
    })
})


//instead of providing a URL, we can provide an object with details
 
const {get} = require('https')

const options = {
    hostname: 'google.com',
    port: '443',
    path: '/',
    method: 'GET'
};

const request = get(option, (res) => {
    res.on('data', (chunk) => {
        console.log(chunk)
    })

}) 