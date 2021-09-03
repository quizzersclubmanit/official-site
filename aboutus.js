const para2= document.getElementById('para2');
let btn= document.getElementById('btn');

btn.addEventListener("click", ()=>{
    if(para2.style.display!="block"){
        para2.style.display= "block";
    btn.innerHTML="Less...";
    }
    else{
        para2.style.display= "none";
        btn.innerHTML="More...";
    }
});

