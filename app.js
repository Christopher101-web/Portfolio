const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
//const topLink = document.querySelector('.top-link');


function pageTransitions(){
	//Button click active class
	for(let i = 0; i < sectBtn.length; i++){
		sectBtn[i].addEventListener('click', function(){
			let currentBtn = document.querySelectorAll('.active-btn');
			currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
			this.className += ' active-btn';
		});
	};
	/* Sections active class */
	allSections.addEventListener('click', (e) =>{
		const id = e.target.dataset.id;
		if(id){
			//Remove active from the other buttons
			sectBtns.forEach((btn) =>{
				btn.classList.remove('active');	
			});
			e.target.classList.add('active');
			//Hide other sections
			sections.forEach((section) =>{
				section.classList.remove('active');
			});
			const element = document.getElementById(id);
			element.classList.add('active');
		};
	});
	//Toggle theme
	const themeBtn = document.querySelector('.theme-btn');
	themeBtn.addEventListener('click', () =>{
		let element = document.body;
		element.classList.toggle('light-mode');
	});
};
	//back to top
	const myButton = document.getElementById("myBtn");
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {  if (document.body.scrollTop > 20  || document.documentElement.scrollTop > 20) {
 	myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	};
};
	function topFunction() {
		//document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE     and Opera
};
//Show more or less text function(blogs) Jquery
$(document).ready(function(){
	$(".read").click(function(){
		$(this).prev().toggle();
		$(this).siblings('.dots').toggle();
		if($(this).text()=='Read Less'){
			$(this).text('Read More');
		} else {
			$(this).text('Read Less');
		}
	});
});
pageTransitions();