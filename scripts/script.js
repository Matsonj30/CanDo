function burgerMenu(){
    var checkbox = document.getElementById("hamburgerCheckbox");
    var menu = document.getElementById("menu");
    var burgerMenu = document.getElementsByClassName("hamburgerMenu");

    if(checkbox.checked == true){
        menu.style.transform = "none";
        burgerMenu[0].style.position = "fixed";
    }
    else{
        menu.style.transform = "translate(100%)";
        burgerMenu[0].style.position = "absolute";
    }
}

function scrollToDiv(location){
    document.getElementById(location).scrollIntoView({behavior: "smooth"});

}


function changeTestimonial(direction){
    var testimonials = document.getElementsByClassName("testimonial")
    var currentSpot = -1;
    for(var i = 0; i < testimonials.length; i+=1){
        if(window.getComputedStyle(testimonials[i]).display != 'none'){
            testimonials[i].style.display = 'none'; 
            currentSpot = i;
        }
    }
    if((currentSpot + direction + 1) > testimonials.length){
        testimonials[0].style.display = 'block';
    }
    else if((currentSpot + direction) < 0){
        testimonials[1].style.display = 'block';
    }
    else{
        testimonials[currentSpot + direction].style.display = 'block';
    }
}

function handleResize() {
    // Check the new window width
    var currentWidth = window.innerWidth;
    var testimonials = document.getElementsByClassName("testimonial")
    // Perform actions based on the window width
    if (currentWidth < 1300) {
        for(var i = 0; i < testimonials.length; i+=1){
            testimonials[i].style = 'block';
        }
    } 
}

// Attach the event listener to the window's resize event
window.addEventListener('resize', handleResize);

// Initial call to handleResize to handle the initial screen width
handleResize();