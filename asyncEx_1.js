
// fetch('https://jsonplaceholder.typicode.com/users/')
// .then(resp => resp.json())
// .then(console.log)

//we can write above code by using async await

async function fetchUser() {
    const resp = await fetch ('https://jsonplaceholder.typicode.com/users/')
    const data = await resp.json();
    console.log(data);
}
fetchUser() 