(function pomodoroClock(){

    function $(selector){
        return document.querySelector(selector);
    }

    let min = "25:00", sec = "59", resetTime = "25:00", pomodoro;
    min = min.split(":");


function times(minF, secF, resetTimeF){
    clearInterval(pomodoro);
    min = minF, sec = secF, resetTime = resetTimeF;
    $(".time").innerHTML = min;
    min = min.split(":");
}
document.addEventListener("click", function(event){
    if(event.target.classList.contains("one")){
        times("25:00", "59", "25:00");
    }
    else if(event.target.classList.contains("two")){
        times("05:00", "59", "05:00");
    }
    else if (event.target.classList.contains("three")){
        times("10:00", "59", "10:00");
    }
})

function resetClock(){
        min = resetTime;
        $(".time").innerHTML = `${resetTime}`;
        min = min.split(":");
        clearInterval(pomodoro);
        clickCount = 0;
}

$(".start").addEventListener("click", pomodoroClock);

function pomodoroClock(){
clearInterval(pomodoro);
pomodoro = setInterval(function(){
        if (min[0] != "00"){
            if (min[1] == "00"){
                min[1] = "59";
                min[0]--;
            }
            else{
                min[1]--;
            }
            if (min[0] < 10){
                if (min[1] < 10){
                    $(".time").innerHTML = `0${min[0]}:0${min[1]}`;
                    $(".titleName").innerHTML = `(0${min[0]}:0${min[1]}) Tomato timer`;
                }
                else{
                $(".time").innerHTML = `0${min[0]}:${min[1]}`;
                $(".titleName").innerHTML = `(0${min[0]}:${min[1]}) Tomato timer`;
                }
            }
            else{
                $(".time").innerHTML = `${min[0]}:${min[1]}`;
                $(".titleName").innerHTML = `(${min[0]}:${min[1]}) Tomato timer`;
            }
    }
    else {
        if (sec < "10" && sec >= 0){
            $(".time").innerHTML = `00:0${sec--}`;
            $(".titleName").innerHTML = `(00:0${sec--}) Tomato timer`;
        }
        else if (sec === -1){
            $(".time").innerHTML = `00:00`;
            $(".titleName").innerHTML = `(00:00) Tomato timer`;
            let notification = new Audio("notification.mp3");
            notification.play();
            clearInterval(pomodoro);
            clickCount = 0;

        }
        else{
            $(".time").innerHTML = `00:${sec--}`;
        }
    }
    
    $(".stop").addEventListener("click", function(){
        clearInterval(pomodoro);
        clickCount = 0;
    });

    $(".reset").addEventListener("click", resetClock);
    }, 1000);

}

})();