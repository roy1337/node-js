const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//FETCH THEN 1

fetch('http//example.com/movies.json');
.then(res=>res.json());
.then(console.log);

// ASYNC AWAIT 1

fetchUsers()

  async function fetchUsers() {
   const res = await fetch('http://example.com/movies.json');
   const data = await res.json();
   console.log(data);
  } 



// FETCH THEN 2

  Promise.all(urls.map(url=>
    fetch(url).then(res => res.json());
    )) .then(array=> {
        console.log('users',array[0]);
        console.log('posts',array[1]);
        console.log('albums',array[2]);
    }).catch('error');

//ASYNC AWAIT 2

const getData = async function() {
    try{
    const [users, posts, albums] = await Promise.all(urls.map(url=>
        fetch(url).then(res=>res.json());
        ))
        console.log('users',users);
        console.log('posts',posts);
        console.log('albums',albums);;
    } catch(err) {
    console.log('error',err);
}}



//ASYNC AWAIT 3

const getData2 = await function() {
 const arrayOfPromises = urls.map(url => fetch(url);
 for await (let response of arrayOfPromises) {
  const data = response.json();
   console.log(data);
 }
}

