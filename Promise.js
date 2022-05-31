//Promise is great for API calls (like setTimeOut), getting 
//data from a DB or any async operations
//to use so that the task 
//happens in the background.

const promise = new Promise((resolve,reject) => {
    if (true) { //Will always "Resolve"
    resolve('Stuff Worked');
    } else {
    reject('Error');
    }
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 100, 'Hi')
})

const promise3 = new Promise((resolve,reject) =>{
    setTimeout(resolve,1000,'Haha')
})

const promise4 = new Promise((resolve,reject) => {
    setTimeout(resolve,3000,'Last Promise!')
})

Promise.all([promise,promise2,promise3,promise4])
    .then(values=> {
        console.log(values);
    })

//
promise
.then(result => result + '!')
.then(result2 => result2 + '?')
.catch(() => console.log('Error!'))
.then(result3 => { 
   console.log(result3 + '!');
})