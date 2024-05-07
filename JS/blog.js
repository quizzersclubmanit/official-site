let blogs=[];
fetch('https://quizzersclub.in/', {
  method: 'GET', 
  mode: 'cors', 
  headers:{
    Origin:"https://quizzersclub.in/"
  }
}).then(response =>response.json())
  .then(data=>{
    data.forEach(blog=>{
        blogs.push(blog);
    })
})
console.log(blogs);
