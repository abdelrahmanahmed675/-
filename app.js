``
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/*
  Global Variables
  
*/
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');

/*
  End Global Variables
  Start Helper Functions
  
*/
function createNav(id, name){
    const item = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    return item;
}
function inViewport (port) {
    const boundery = port.getBoundingClientRect();
    const bounding=( boundery.top === 0 &&boundery.left=== 0 );
    return bounding
};
/*
  End Helper Functions
  Begin Main Functions
 
*/

// build the nav
function buildNav(){
    for (let i=0; i < sections.length; i++){
        const newItem = document.createElement('li');
        const sectionName = sections[i].getAttribute('data-nav')
        const sectionId = sections[i].getAttribute('id')
        newItem.innerHTML = createNav(sectionId, sectionName)
         fragment.appendChild(newItem);
    }
    const navBarList = document.getElementById('navbar__list')
    navBarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function addActiveClass(){
    for (let i=0; i< sections.length;i++){
        if (inViewport(sections[i])){
            sections[i].classList.add("your-active-class");
        }else{
            sections[i].classList.remove("your-active-class");
        }
    }
}
// Scroll to anchor ID using scrollTO event
function scrollToElement(evt){
    if(evt.target.nodeName === 'A'){
        const sectionId = evt.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
}



/*
End Main Functions
Begin Events
 
*/
document.addEventListener('scroll', function(){
    addActiveClass();
});
const navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(evt){
    scrollToElement(evt)
})

//end events
// Build menu 
buildNav()

// Set sections as active
