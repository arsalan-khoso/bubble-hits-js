var defaultTime = 60;
var score = 0;
var hitsRn = 0;


//creating bubble 
function makeBubble() {
    
    var clutter = "";
    for (var i=1; i<=180; i++){
        var rm = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rm}</div>`;
    } 
    document.querySelector("#panel-bottom").innerHTML = clutter;

}

// setting timer 
function runTime() {
    var timer = setInterval(function(){
        if (defaultTime>0)
        {
            defaultTime--;
            document.querySelector("#timerval").textContent = defaultTime;
        }
        else{

            document.querySelector("#panel-bottom").innerHTML = `<h1>Your Score is ${score}</h1>`;
            clearInterval(timer);
            
        }
    }, 1000)
}

//setting up hits 
function setHits() {
    hitsRn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitsRn; 
}

//stting up score
function setScore() {
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#panel-bottom").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitsRn){   
        setScore();
        setHits();
        makeBubble();
    }
    else{

    }
})

setHits();
runTime();
makeBubble();