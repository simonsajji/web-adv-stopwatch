let hour=0;
let min=0;
let seconds=0;
let seconds_int_id;
let millis=0;
let millis_int_id;
let hour_int_id;
let minutes_int_id;
let lap_counter=0;


// Buttons elements

const start=document.getElementById("start");
const stop=document.getElementById("stop");
const lap=document.getElementById("lap");

// hour ,min, seconds, millis HTML elements

let h=document.getElementById("h");
let m=document.getElementById("m");
let s=document.getElementById("s");
let mil=document.getElementById("mil");




function display(hour,min,seconds,millis){

    if(hour<10 || min <10 || seconds< 10){

        if(hour <10){

            h.innerText=`0${hour}`;
            m.innerText=min;
            s.innerText=seconds;
            mil.innerText=millis;
            
    
        }
        if(min <10){
           
            h.innerText=hour;
            m.innerText=`0${min}`;
            s.innerText=seconds;
            mil.innerText=millis;
            
    
        }
        if(seconds <10){
            
            h.innerText=hour;
            m.innerText=min;
            s.innerText=`0${seconds}`;
            mil.innerText=millis;
        }

    }

    
    else{

        h.innerText=hour;
        m.innerText=min;
        s.innerText=seconds;
        mil.innerText=millis;

    }

   







}

lap.addEventListener("click",function(){
    console.log("button clicked")

    console.log(h.innerHTML);
    console.log(m.innerHTML);
    console.log(s.innerHTML);
    console.log(mil.innerHTML);

});

function hour_function(minutes_int_id,seconds_int_id,millis_int_id){
    clearInterval(minutes_int_id);
    clearInterval(seconds_int_id);
    clearInterval(millis_int_id);
    hour_int_id=setInterval(function(){
        hour++;
        // console.log("hour="+hour);
        min_function(hour_int_id,millis_int_id);

        min=0;
        seconds=0;
        millis=0;





    },100)



}

function min_function(int_id,millis_int_id){
    clearInterval(int_id);
    clearInterval(seconds_int_id);
    clearInterval(minutes_int_id);
    clearInterval(millis_int_id);
    minutes_int_id=setInterval(function(){
        min++;
        // console.log("hour="+hour+"minutes="+ min);
        sec_function(minutes_int_id);

        if(min>=59){
            hour_function(minutes_int_id,seconds_int_id,millis_int_id);
            min=0;
            seconds=0;
            millis=0;
        }




    },10)
}

function sec_function(minutes_int_id){
    clearInterval(minutes_int_id);
    clearInterval(seconds_int_id);
    seconds_int_id=setInterval(function(){


        millis_function(seconds_int_id);
        

        // console.log("hour="+hour+"minutes="+min+"seconds="+seconds);
    
        if(seconds>=59){
            clearInterval(millis_int_id);
            clearInterval(seconds_int_id);
            min_function(seconds_int_id,millis_int_id);
            seconds=0;
            millis=0;
        }

        seconds++;
    
        
    
    
    
    
    
    },10)
    
}





function millis_function(seconds_int_id){
    clearInterval(seconds_int_id);
    clearInterval(millis_int_id);
    millis_int_id=setInterval(function(){
        

        // console.log("hour="+hour+"minutes="+min+"seconds="+seconds+"millis= "+millis);
        display(hour,min,seconds,millis);
    
        if(millis>=400){
            sec_function(millis_int_id);
            millis=0;
        }
    
        millis++;
    
    
    
    
    
    },0.3)
    
}




lap.addEventListener("click",function(){
    lap_counter++;
    h_text=document.getElementById("h").textContent;
    m_text=document.getElementById("m").textContent;
    s_text=document.getElementById("s").textContent;
    mil_text=document.getElementById("mil").textContent;

    let l=document.createElement("div");
    let span=document.createElement("span");
    span.textContent=`LAP ${lap_counter}`;
    l.textContent=`${h_text}h : ${m_text}m : ${s_text}s : ${mil_text}ms`;
    let lap_container=document.getElementsByClassName("lap_container")[0];
    l.appendChild(span);
    lap_container.appendChild(l);


});



stop.addEventListener("click",function(){

    // window.location.reload();


    clearInterval(millis_int_id);
    clearInterval(seconds_int_id);
    clearInterval(minutes_int_id);
    clearInterval(hour_int_id);




});


start.addEventListener("click",function(){
    millis_function(15);
});


