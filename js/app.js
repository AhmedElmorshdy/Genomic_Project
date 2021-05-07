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
const sections=document.querySelectorAll("section");
const frag = document.createDocumentFragment();
const mybutton=document.querySelector('button');
/**
 * End Global Variables
 * 
*/
/**
 * Begin Main Functions
 * 
*/
// build the nav
sections.forEach(section => {
	//create list item 
	let list= document.createElement("li");
	// create link to refer to section
	let link=document.createElement("a");
	//create variable( navText) to set data-nav value in
	let navText=section.getAttribute("data-nav");
	//put variable( navText) in text node
	 let linkText=document.createTextNode(navText);
	//set href attribute to link refering to section id 
	 link.setAttribute("href", "#"+section.getAttribute("id"));
	//append textNode to link content
	link.appendChild(linkText);
	//append link to list item
	list.appendChild(link);
	//append list item to the frag
	frag.appendChild(list);
});
//append frag include item to the list
document.querySelector("#navbar__list").appendChild(frag);
// create variable (links)for links
let links=document.querySelectorAll('a');
// Add class 'active' to section when near top of viewport
window.onscroll = function(){	
	//make button to go to top
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
		mybutton.style.display = "block";
		} else {
		mybutton.style.display = "none";
		};
	//loop on sections
	sections.forEach(section=>{
	//use getBoundingClientRect to define sction location
	let getrect=section.getBoundingClientRect();
	//if comdition to realize if section in window or not
	if (getrect.top>=0 &&getrect.top<=300 ){	
			sections.forEach(section=>{
				//removing "your-active-class" from class list
				section.classList.remove("your-active-class");
			});
			//adding "your-active-class" to active section 
			section.classList.add("your-active-class");
			// create variable to set section(data-nav)in
			let activeDataNav=section.getAttribute('data-nav');
			//looping on links to add active to active link
			links.forEach(link=>{
				if (link.textContent==activeDataNav){
					links.forEach(link=>{
						//remove active link from all links
						link.classList.remove("activeLink");
					});
					//add active for active link	
					link.classList.add("activeLink");
				};
			});
	}

	});
};
function goToTop(){
 window.scrollTo(0, 0);
 links.forEach(link=>{
 	if (link.className=="activeLink") {
 		link.classList.remove("activeLink");
 	};		
 }
 );
};
/**
 * End Main Functions
 * 
*/





