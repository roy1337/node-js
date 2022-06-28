const axios = require('axios');

const request = axios.get('https://www.google.com')
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
.then(() => {
    console.log('Done!');
})