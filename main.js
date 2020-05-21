const toggler = document.querySelector('.toggler');
const showMenu = document.querySelector('.showmenu');
const links = document.querySelector('.showlink');
const showLinks = document.querySelectorAll('.showlinks > li');
const cards = document.querySelectorAll('.card'); 


// Open Show Menu with Hamburger Menu
toggler.addEventListener('click', function(){
    console.log('clicked');
    showMenu.classList.toggle('open')
});

// Projects card fade in when scrolled 
function scrolled () {
    console.log(cards);
    for (var i = 0; i < cards.length; i++) {
    const position = cards[i].getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
        if (position < screenPosition) {
                    cards[i].classList.add('card-appear');
                }
    }
}

window.addEventListener('scroll', scrolled);