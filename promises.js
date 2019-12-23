const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" }
];

function getPosts() {
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
                output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPosts(post) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            }
            else
                reject("Error: Something went wrong");
        }, 2000);
    })
}

// createPosts({ title: "Post Three", body: "This is post three"})
//     .then(getPosts)
//     .catch(error=>console.log(error));


// Async / Await
// async function init() {
//     await createPosts({ title: 'Post Three', body: 'This is post three' });

//     getPosts();
// }

// init();


// Async / Await / Fetch
async function fetchUsers(){
    const res = await fetch('http://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();


// Promise.all
// const promise1 = Promise.resolve('Ayo shawty');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Lemme getcho number"));
// const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res=>res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values=>console.log(values));