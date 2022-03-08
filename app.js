const pages =[
    {
        page:"Home",
        navigate: homePage
    },
    {
        page:"About",
        navigate: about
    },
    {
        page:"Interact",
        navigate: interact
    }
]



function navButton(pg, pr, nv){
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    })
    pr.appendChild(button);
}

function navigation(){
    let nav= document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="85px";
    nav.style.backgroundColor="LightSeaGreen";
    for(obj of pages){
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function homePage(){
    let home = document.createElement("h1");
    home.innerHTML="Home";
    document.body.querySelector(".wrapper").appendChild(home);
}

function about(){
    let about = document.createElement("h1");
    let name = document.createElement("h3");
    name.innerHTML="Brad";
    about.innerHTML="About";
    document.body.querySelector(".wrapper").appendChild(about);
    document.body.querySelector(".wrapper").appendChild(name);
}
function interact(){
    let interact = document.createElement("h1");
    let button = document.createElement("button");
    let counter = 0;
    button.innerHTML = "Click This: " +counter;
    interact.innerHTML="Interact";

    button.addEventListener("click", function(){
        counter=counter+1;
        button.innerHTML="Click This: "  +counter;
    })
    document.body.querySelector(".wrapper").appendChild(interact);
    document.body.querySelector(".wrapper").appendChild(button);
}

navigation();
homePage();

