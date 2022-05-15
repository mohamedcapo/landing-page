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

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll("section");

const TheUl = document.getElementById("navbar__list");


// end the global var





// start loop on sections  
allSections.forEach( function (section, items ) {

// call the Data nav value
let  secData = section.getAttribute("data-nav");
// build tr navigation bar
// start create  links
let theLi = document.createElement("li");
let anc = document.createElement("a");

// add the link into HTML
anc.textContent=secData; 

// append the anchor tag to the link ..
theLi.appendChild(anc);
// add the menu link class to navbar
theLi.classList.add('menu__link');


//append these new links to navigation menu ul 
  // li content gonna be son of ul "navbar list "
  TheUl.appendChild(theLi);


// add style by js DOM style
 /*TheUl.style.cssText = "padding:10px;font-size:20px;color:black;"*/
  theLi.style.display= "inline-block " ;


//Listening to click event on the links that have sections and make the scroll on section smoothie .

theLi.addEventListener("click",function(sec){
section.scrollIntoView({behavior: "smooth"}) ;


}) ;

});


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Listening to scroll event  on  sections to the window object
window.addEventListener("scroll",function () {


    // find all links  in the navigation bar 
     let menuLinks = document.querySelectorAll(".menu__link");
     
     /*  allSection.forEach(function (section) {
    var secView = section.getAttribute("data-nav");
    var sectionTop = section.getBoundingClientRect().top;
    alert(sectionTop)
     })
    */
    
     // loop on sections  to 
    document.querySelectorAll("section").forEach(function (section) {
     // get section details
     let secDataNav = section.getAttribute("data-nav");
     // declare  the section possion 
    const secView = section.getBoundingClientRect().top;
    
    
    // check if the section in top view 
    if(secView >= 0 && secView <= 300){
      section.classList.add("your-active-class");
      // looping on all menu Links
      menuLinks.forEach(function (link){
        if(link.textContent === secDataNav){
          link.classList.add("active-link");
        }else{
           link.classList.remove("active-link");
        }
      })
    }else {
      section.classList.remove("your-active-class");
    }
  })
  })
  
  

