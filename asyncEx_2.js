
const urls = [
    'https://jsonplaceholer.typicode.com/users/',
    'https://jsonplaceholder.typicode.com/posts/',
    'https://jsonplaceholder.typicode.com/albums/'
]

// Promise.all(urls.map(url => {
//     fetch(url).then(resp => resp.json())
// })).then(result => {
//     console.log(result[0])
//     console.log(result[1])
//     console.log(result[2])
// }).catch(() => console.log('Oops'))

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)

    } catch (err) {
        console.log('Oops', err)
    }
}

getData();

