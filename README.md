# UserAndPostFromAPI

Simple project to learn API, fetch this project we pull the data from API's :
     
     API 1: "https://jsonplaceholder.typicode.com/users"
     API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

Things we did in rough notes:
     
     fetched the data from link, convert it into JSON /w await(to use await we need async function)
     Presented the data into our website. 
     Used .map, html code then join the map [data.map((x)=>userHTML(x)).join("");]
     Stored the user ID in localStorage. Pass the value to new tab.
     Same fetching process with user post.
     In the user post page we can search user post using their ID
     

          
     
     
