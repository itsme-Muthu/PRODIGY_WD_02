const stopwatch = document.getElementById("stopwatch");
const start = document.getElementById("start");
const lap = document.getElementById("lap");
const stopping = document.getElementById("stop");
const reset = document.getElementById("reset");
const laps = document.getElementById("laps");

let hours = 0,mins = 0,sec = 0,ms = 0,timeInterval;

start.onclick=()=>{
    timeInterval = setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms = 0;
        }
        if(sec==60){
            mins++;
            sec = 0;
        }
        if(mins==60){
            hours++;
            mins=0;
        }
        
        stopwatch.innerHTML = `${zeroPad(hours)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    },10);
    
    start.setAttribute("style","display:none");
    stopping.setAttribute("style","display:block");
    lap.setAttribute("style","display:block");
    reset.setAttribute("style","display:none");
    lap.removeAttribute("disabled");
};

const zeroPad = (num)=>{
    return String(num).padStart(2,"0");
};

let count = 0;

lap.onclick=()=>{
    count++;
    let li = document.createElement("li");
    li.innerHTML = `${"Lap-" + count} - ${zeroPad(hours)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    laps.appendChild(li);
    laps.scroll({top:laps.scrollHeight, behavior:"smooth"});
};

stopping.onclick=()=>{
    clearInterval(timeInterval);

    lap.setAttribute("style","display:none");
    reset.setAttribute("style","display:block");
    start.setAttribute("style","display:block");
    start.innerHTML = "Resume";
    stopping.setAttribute("style","display:none");
};

reset.onclick=()=>{
    laps.innerHTML = "";
    hours = mins = sec = ms = count = 0;
    clearInterval(timeInterval);
    stopwatch.innerHTML = "00:00:00:00";

    start.innerHTML = "Start";
    lap.setAttribute("style","display:block");
    lap.setAttribute("disabled",true);
    reset.setAttribute("style","display:none");
    start.setAttribute("style","display:block");
    stop.setAttribute("style","display:none");
};
