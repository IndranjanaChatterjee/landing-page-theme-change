
let logo = document.getElementById("logo");
let theme = document.getElementById("theme");
let h1=document.getElementById("h1");
let li=document.querySelectorAll(".li");
let btn=document.getElementById("click");
let result = window.matchMedia("(prefers-color-scheme:dark)");
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
        
        
        
        

    }
    console.log(result.matches);

})
