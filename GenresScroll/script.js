// Save third-page and fourth-page buttons as variables
let thirdButton = document.getElementById('third-page');
let fourthButton = document.getElementById('fourth-page');
let fifthButton = document.getElementById('fifth-page');
let sixthButton = document.getElementById('sixth-page');
let seventhButton = document.getElementById('seventh-page');

// Add click event to both elements and set scrollPage function as callback function
thirdButton.addEventListener('click', scrollPage);
fourthButton.addEventListener('click', scrollPage);
fifthButton.addEventListener('click', scrollPage);
sixthButton.addEventListener('click', scrollPage);
seventhButton.addEventListener('click', scrollPage);


function scrollPage(){
	// this keyword returns the HTML element that triggered the event (in this case, click event)
	// Check id of this HTML element
	// If id name is 'third-page'
	if(this.id === 'third-page'){
		window.scrollTo({
			// Scroll twice the height of window height
  			top: window.innerHeight * 2,
  			left: 0,
  			// Setting behavior to 'smooth' will animate the scroll
  			behavior: 'smooth'
		});
	}

	// If id name is 'fourth-page'
	if(this.id === 'fourth-page'){
		window.scrollTo({
			// Scroll three times the height of window height
  			top: window.innerHeight * 3,
  			left: 0,
  			behavior: 'smooth'
		});
	}
	if(this.id === 'fourth-page'){
		window.scrollTo({
			// Scroll four times the height of window height
  			top: window.innerHeight * 4,
  			left: 0,
  			// Setting behavior to 'smooth' will animate the scroll
  			behavior: 'smooth'
		});
	}

	// If id name is 'sixth-page'
	if(this.id === 'sixth-page'){
		window.scrollTo({
			// Scroll five times the height of window height
  			top: window.innerHeight * 5,
  			left: 0,
  			behavior: 'smooth'
		});
	}
	// If id name is 'seventh-page'
	if(this.id === 'seventh-page'){
		window.scrollTo({
			// Scroll six times the height of window height
  			top: window.innerHeight * 6,
  			left: 0,
  			behavior: 'smooth'
		});
	}
}

