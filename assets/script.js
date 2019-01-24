var numbers = 255;
var colors = randomclrs(numbers);
var s2 = document.querySelectorAll(".box");
var h1 = document.querySelector("h1");
var takecolor = tkingcolor();
var textword = document.querySelector("#m");
var newcolor = document.querySelector("#new");

color3.addEventListener("click", function(){
    
    numbers = 3;
    colors = randomclrs(numbers);
    takecolor = tkingcolor();

    for(var i = 0; i < s2.length; i++) {
        if(colors[i]) {
            s2[i].style.backgroundColor = colors[i];
            s2[i].innerHTML=colors[i];
        } else {
            s2[i].style.display = "none";
        }
    }

})
color6.addEventListener("click", function(){
       numbers = 6;
    colors = randomclrs(numbers);
    takecolor = tkingcolor();


    for(var i = 0; i < s2.length; i++) {
        if(colors[i]) {
            s2[i].style.backgroundColor = colors[i];
        } else {
            s2[i].style.display = "none";
        }
    }

})
color9.addEventListener("click", function(){
   
    numbers = 9;
    colors = randomclrs(numbers);
    takecolor = tkingcolor();


    for(var i = 0; i < s2.length; i++) {
        if(colors[i]) {
            s2[i].style.backgroundColor = colors[i];
        } else {
            s2[i].style.display = "none";
        }
    }

})

color255.addEventListener("click", function(){

    numbers = 255;
    takecolor = tkingcolor();
    for(var i = 0; i < s2.length; i++) {
        s2[i].style.backgroundColor = colors[i];
        s2[i].style.display = "block";
    }
});





newcolor.addEventListener("click", function(){

    colors = randomclrs(numbers);

    takecolor = tkingcolor();

    dis.textContent = takecolor;
    textword.textContent = "";

    for(var i = 0; i < s2.length; i++) {
        s2[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#ffffff";
});



for(var i = 0; i < s2.length; i++) {

    s2[i].style.backgroundColor = colors[i];


    s2[i].addEventListener("click", function(){

        var clickedColor = this.style.backgroundColor;

        if(clickedColor === takecolor){
            textword.textContent = "Correct!";
            newcolor.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "#ffffff";
            textword.textContent = "Try Again";
        }
    });
}

function changeColors(color) {

    for(var i = 0; i < s2.length; i++) {

        s2[i].style.backgroundColor = color;
    }
}

function tkingcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomclrs(num) {

    var arr = [];

    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;

}

function randomColor() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";


    // var colors = "0123456789abcdef";
    // var total = "#";
    // for(i=0; i < 6; i++)
    // {
    //     var color1 = colors [Math.floor(Math.random()*colors.length)];
    //     total=total+color1;         
    // }

    // console.log(total);  
}
