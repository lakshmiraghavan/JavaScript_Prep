document.getElementById("start").addEventListener("click", function(e){
    createFood();
    createSnake();
    var start = document.getElementById("start");
    disableNextButton(start);
    changeFood();
});



var intervalID;
function changeFood(){

    intervalID = setInterval(changeFoodPostion, 5000);

}


function createFood(){

    var div = document.querySelector("div.container");
    var div1 = document.createElement("div");
    div1.className = "food";

    div.appendChild(div1);

}

function changeFoodPostion(){
    var div1 = document.querySelector("div.food");
    var posx = Math.floor(Math.random() * 500)-40 + "px";
    var posy = Math.floor(Math.random() * 500)-40 + "px";
    div1.style.left = posx;
    div1.style.top = posy;
}

function disableNextButton(start) {
    //console.log("in disable");

    document.getElementById("start").disabled = 'true';
}

function randomSnakePosition(element) {
    var div1 = document.querySelector("div.container");
    console.log(div1.offsetHeight);
    console.log(element.offsetHeight);
    var x = div1.offsetHeight-element.clientHeight;
    var y = div1.offsetWidth-element.clientWidth;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

function createSnake(){
    var snake = document.querySelector('div.snake');
    snake.setAttribute("style", "position:absolute;");
    var xy = randomSnakePosition(snake);
    snake.style.top = xy[0] + 'px';
    snake.style.left = xy[1] + 'px';

    var snake1 = document.createElement("div");
    snake1.className = "snake1";
    var snake2 = document.createElement("div");
    snake2.className = "snake2";
    var snake3 = document.createElement("div");
    snake3.className = "snake3";

    snake.appendChild(snake1);
    snake1.appendChild(snake2);
    snake2.appendChild(snake3);
}
