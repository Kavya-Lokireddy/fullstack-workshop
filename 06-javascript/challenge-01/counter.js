let count=0;
let step=1;


document.getElementById("value1").innerHTML=count;

let button1=document.getElementById("increment");
button1.addEventListener("click",increment);


let button2=document.getElementById("reset");
button2.addEventListener("click",reset);

let button3=document.getElementById("decrement");
button3.addEventListener("click",decrement);

document.getElementById("one").addEventListener("click",step_selector1);
document.getElementById("five").addEventListener("click",step_selector5);
document.getElementById("ten").addEventListener("click",step_selector10);

function step_selector1(){
    step=1;
}
function step_selector5(){
    step=5;
}
function step_selector10(){
    step=10;
}

function reset(){
    count=0;
    updateDisplay();
    document.getElementById("value1").innerHTML=count;
}

function increment(){
    
    if(count>=0){
        count+=step;
        updateDisplay();
    }
   document.getElementById("value1").innerHTML=count;
}

function decrement(){

    if(count>0){
        count-=step;
        updateDisplay();
    }
    document.getElementById("value1").innerHTML=count;
}

function updateDisplay(){
    const value=document.getElementById("value1");

    value.innerHTML=count;

    if(count>0){
        value.style.color="green";
    }else if(count===0){
        value.style.color="black";
    }else{
        // The red color doesnot apply because the there is no negative values.
        value.style.color="red";
    }
}


