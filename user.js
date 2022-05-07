//API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const localID= localStorage.getItem("localUserID");
console.log(`userID :` + localID);
const postEL = document.querySelector(".post-list");


renderPost();

async function renderPost(id){
    const userPostAPI = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id || localID}`);
    const userPosts = await userPostAPI.json();
    postEL.innerHTML = userPosts.map((post)=> 
                getPostHTML(post)).join(``);    
}

function getPostHTML(post){
    const userpost =`
        <div class="post">
            <div class="post__title">
            ${post.title}
            </div>
            <p class="post__body">
            ${post.body}
            </p>
        </div>
    `;
    return userpost;    
}

async function onSearchChange(e){
    const uID = e.target.value;
    console.log(`userID : ` + uID);
    renderPost(uID);

}


