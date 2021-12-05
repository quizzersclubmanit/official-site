let blogs=[];
fetch('https://qcmblogapi.herokuapp.com/', {
  method: 'GET', 
  mode: 'cors', 
  headers:{
    Origin:"https://qcmblogapi.herokuapp.com/"
  }
}).then(response =>response.json())
  .then(data=>{
    data.forEach(blog=>{
        blogs.push(blog);
    })
})
console.log(blogs);