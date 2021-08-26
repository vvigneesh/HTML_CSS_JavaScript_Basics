const timer = document.getElementById('clock');
var min=0;
var sec=0;
var stoptime=true;
//var preDefined=document.getElementById('time-default').value
//document.getElementById('clock').innerHTML=preDefined
function startTimer(){
    if (stoptime==true){
        stoptime=false;
        timerCycle();
    }
}

function timerCycle(){
    if (stoptime==false){
        sec=parseInt(sec);
        min=parseInt(min);
        preDefined=parseInt(document.getElementById('time-default').value)
        sec=sec+1;
        //preDefined=parseInt(a);
        //console.log(preDefined)

        if (sec==60)
        {
            min=min+1;
            sec=0;
        }
        if(sec<10 || sec==0){
            sec='0'+sec;
        }
        if (min<10 || min==0){
            min='0'+min;
        }
        if (min>=preDefined){
            document.getElementById('clock').style.backgroundColor="red";
        }
        timer.innerHTML = min+":"+sec;
        setTimeout("timerCycle()",1000);
    }
}
