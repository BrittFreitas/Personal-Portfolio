
//setting my varibles to be able to target the menu icon and the exit icon
const menuButton = document.querySelector('.menuIcon');
const closeNav = document.querySelector('.exit', ".scroll");
const slideMenu = document.querySelector('.slideOutNav');


//attaching an event listener to my menu so that on click it adds the class of .open
menuButton.addEventListener ("click", () => {
    slideMenu.classList.add('open');
});

//attaching an event listener to my exit icon such that when clicked it removes the class of .open
closeNav.addEventListener ("click", () => {
    slideMenu.classList.remove('open');
});

//attaching event listener to buttons to scroll parts of page into view
const checkOutWork = document.querySelector('.checkOutWork')
checkOutWork.addEventListener("click", () => {
    const myWork = document.querySelector('.myWork')
    myWork.scrollIntoView({behavior: "smooth"})
});

const getInTouch = document.querySelector('.getInTouch')
getInTouch.addEventListener("click", () => {
    const contact = document.querySelector('.contact')
    contact.scrollIntoView({behavior: "smooth"})
});

const watchForScroll = new IntersectionObserver( event => {
    event.forEach(event => {
        if (event.isIntersecting) {
            event.target.classList.add('animation')
        }
      });
})

const projectGallery = document.querySelector('.projectGallery')
watchForScroll.observe(projectGallery);