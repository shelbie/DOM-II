// Your code goes here


//mouseover
let mouseOver = document.querySelector("img");
mouseOver.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.2)"
} )

//mouseleave
let mouseLeave = document.querySelector("img");
mouseLeave.addEventListener("mouseleave", (event) => {
    event.target.style.transform = "scale(1.0)"
})

//click
let button = document.querySelectorAll('.btn');
for (let b = 0; b < button.length; b++) {
    let btn = button[b];
    btn.addEventListener('click', function() {
     alert("Thank you for signing up");
     event.stopPropagation();
    })
};