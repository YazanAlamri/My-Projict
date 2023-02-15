const huorEl = document.getElementById("hour");
const miunteEl = document.getElementById("miuntes");
const secondeEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h- 12;
        ampm = "AM";
    }

    huorEl.innerText = h;
    miunteEl.innerText = m;
    secondeEl.innerText = s;
    ampmEl,  (innerText = ampm);
    setTimeout(()=>{
        updateClock()
            
    }, 1000)


}


updateClock()

