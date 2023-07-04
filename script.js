
let logo = document.getElementById("logoo");
let theme = document.getElementById("theme");
let h1=document.getElementById("h1");
let li=document.querySelectorAll(".li");
let btn=document.getElementById("click");
let result = window.matchMedia("(prefers-color-scheme:dark)");
let write=document.querySelector(".content");
let value=result.matches;
theme.addEventListener("click", () => {
    
    if (!value) {
        logo.style.color="white";
        h1.style.color="white";
        li.forEach(e => {
            e.style.color="white";
            
        });
        document.body.style.background = "linear-gradient(to bottom right,blue,rgb(108, 108, 202),rgb(139, 139, 174))";
        click.style.background="blue";
        localStorage.setItem('theme', "light");
        value=true;
        theme.style.color="white";
        write.style.color="white";
        
        

    }
    else
    {
        logo.style.color="#766365";
        h1.style.color="#766365";
        li.forEach(e => {
            e.style.color="#766365";
            
        });
        document.body.style.background = "linear-gradient(to bottom right,#f892c4,#f9a7b7,#fac6a4)";
        localStorage.setItem('theme', "dark");
        console.log(result.matches);
        click.style.background="#f9a7b7";
        value=false;
        theme.style.color="#766365";
        write.style.color="#766365";
        
        
        

    }
    console.log(result.matches);

})
const img=document.querySelector(".pic1");
const img2=document.querySelector(".pic2");
const img7=document.querySelector(".pic7");
const img6=document.querySelector(".pic6");
const img4=document.querySelector(".pic4");
const img5=document.querySelector(".pic5");
window.addEventListener("scroll",()=>

{
    let y=window.scrollY;
    //console.log(y);
    img.style.left=`${100-y}px`;
    img2.style.right=`${100-y}px`;
    img7.style.left=`${100-y}px`;
    img6.style.top=`${100-y}px`;
    img4.style.left=`${y-400}px`;
    img5.style.right=`${y-400}px`;
})
