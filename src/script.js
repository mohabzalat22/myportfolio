const burger_icon = document.getElementById('burger-icon');

burger_icon.addEventListener('click', (event)=>{
    const responsive_nav = document.getElementById('responsive-nav');
    responsive_nav.classList.toggle('hidden');
});