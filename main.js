const links = document.querySelectorAll('nav li a');

icons.addEventListener("click" , () => {
    nav.classList.toggle("active")
});

links.forEach((link) =>{
    link.addEventListener("click",()  =>{
        nav.classList.remove("active")
        window.location.href = link.href;
   });
});
 