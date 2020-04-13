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