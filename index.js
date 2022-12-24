let btn=document.querySelector(".menu_btn");
let close_btn=document.querySelector(".close_menu_btn");
btn.addEventListener("click",fun=>{
    document.querySelector(".block").style.display="flex";
});

close_btn.addEventListener("click",fun=>{
    document.querySelector(".block").style.display="none";
});

const media=() =>{
    let q=matchMedia("(min-width: 762px)");
    
    if (q.matches) {
        document.querySelector(".block").style.display="flex";
    }
    else{
        document.querySelector(".block").style.display="none";
    }
} 
    onload=media;
    onresize=media;