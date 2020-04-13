// Your code goes here


//1. mouseover
let mouseOver = document.querySelector("img");
mouseOver.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.2)"
} )

//2. mouseleave
let mouseLeave = document.querySelector("img");
mouseLeave.addEventListener("mouseleave", (event) => {
    event.target.style.transform = "scale(1.0)"
})

//3. click
let button = document.querySelectorAll('.btn');
for (let b = 0; b < button.length; b++) {
    let btn = button[b];
    btn.addEventListener('click', function() {
     alert("Thank you for signing up");
     event.stopPropagation();
    })
};

// 4. keydown -- down button
document.addEventListener('keydown', (event) => {
    if(event.keyCode == 40) //down button
    document.body.style.background = "#E9DBB5";
    event.stopPropagation();
});

// 5.  keyup -- up button
document.addEventListener('keyup', (event) => {
    if(event.keyCode == 38) // up button
    document.body.style.background = "#d9d9d9";
    event.stopPropagation();

});


//6. click - stop load
let stopLoad = document.querySelector('nav a');
stopLoad.addEventListener('click', (event) => {
    console.log("Action was terminated");
    event.preventDefault();
});


//7. load
window.addEventListener('load', () => {
    console.log('Loading was successful');
});


//8. resize
function reportWindowSize() {
    console.log(`height: ${window.innerHeight}px, width: ${window.innerWidth}px`)
}
window.addEventListener('resize', reportWindowSize);


//9. wheel
let wheel = document.querySelector('body');
wheel.addEventListener('wheel', () => {
    wheel.style.backgroundColor = "lightblue"
    console.log("Wheel on mouse has been used");
})


//10. contextmenu
let context = document.querySelector("body");
context.addEventListener("contextmenu", e => {
    console.log("Right click disabled")
    e.preventDefault()
})