// active nav-links
let show=document.querySelector(".nav_links");
const navLinks = document.querySelectorAll('.nav-link');
for (let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click',()=>{
        let active = document.getElementsByClassName('active');
        if(active.length > 0){
           for(let j = 0; j < active.length; j++){
            active[j].classList.remove('active');
           }
        }
        navLinks[i].classList.add('active');
    })
}

const openNav=(e)=>{
    e.classList.toggle("change");
    show.classList.toggle("show")
}
