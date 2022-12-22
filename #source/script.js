const headerBurger = document.querySelector('.menu__burger');
if (headerBurger){
    const headerMenu = document.querySelector('.menu__body');
    headerBurger.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    }) 
}