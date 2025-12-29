let count=0;
let step=1;

const value1=document.getElementById("value1");
value1.innerHTML=`${count}`;

const button1=document.getElementById("increment");
button1.addEventListener("click",() =>increment());


const button2=document.getElementById("reset");
button2.addEventListener("click",() =>reset());

const button3=document.getElementById("decrement");
button3.addEventListener("click",() =>decrement());

document.getElementById("one").addEventListener("click",() =>setStep(1));
document.getElementById("five").addEventListener("click",() =>setStep(5));
document.getElementById("ten").addEventListener("click",() =>setStep(10));

const setStep = (value) =>{
    step=value;
};

const reset = () =>{
    count=0;
    updateDisplay();
    document.getElementById("value1").innerHTML=count;
};

const increment = () =>{
    
    if(count>=0){
        count+=step;
        updateDisplay();
    }
   document.getElementById("value1").innerHTML=count;
};

const decrement = () =>{

    if(count>0){
        count-=step;
        updateDisplay();
    }
    document.getElementById("value1").innerHTML=count;
};

const updateDisplay = () =>{
    const value=document.getElementById("value1");

    value.innerHTML=`${count}`;

    if(count>0){
        value.style.color="green";
    }else if(count===0){
        value.style.color="black";
    }else{
        // The red color doesnot apply because the there is no negative values.
        value.style.color="red";
    }
};


