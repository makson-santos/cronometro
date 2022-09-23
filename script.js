
let sec = 00;
let min = 00;
let hor = 00;
let id;

function start() {    
   id = setInterval(timer, 1000)
}

function stop(){
    clearInterval(id);
    
}

function reset(){
    clearInterval(id);
    document.getElementById('time').innerHTML = "00:00:00"
    sec = 00;
    min = 00;
    hor = 00;
}


function timer(){    
    ++sec
    if(sec > 60){
        ++min;
        sec = 00;
    }else if(min > 60){
        ++hor;
        min = 00;
    }
    valid()    
}

function valid(){
    if(sec < 10){
        document.getElementById('time').innerHTML = "0" + hor + ":0" + min + ":0" + sec ;
    }else if(min < 10){
        document.getElementById('time').innerHTML = "0" + hor + ":0" + min + ":" + sec ;
    }else if(hor < 10){
        document.getElementById('time').innerHTML = "0" + hor + ":" + min + ":" + sec ;
    }else {
    var hourAll = `${hor}:${min}:${sec}`;
    document.getElementById('time').innerHTML = hourAll;
    }
}