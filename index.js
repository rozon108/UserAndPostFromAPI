// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const user_listEL = document.querySelector(".user-list");


main();

async function main(){
    const  userDataFromAPI= await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await userDataFromAPI.json(); 
    user_listEL.innerHTML = userData.map((user)=> userDataHTML(user)).join("");
}

function userDataHTML(user){ 
    return `
    <div class="user">
         <div class="user-card" onclick="showUserPost(${user.id})">
             <div class="user-card__container">
                <h3>${user.name}</h3>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Website:</b> 
                <a href="https://${user.website}" target="_blank">
                ${user.website}</a></p>
            </div>
        </div>
    </div>
    `;
}

function showUserPost(id){
    localStorage.setItem("localUserID", id);
    
    const originLocalURL = window.location.origin;
    window.location.href = `${originLocalURL}/user-posts-starter/user.html` ;

}





