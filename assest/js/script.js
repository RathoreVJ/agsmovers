let valuesDisplays = document.querySelectorAll(".num");
let interval = 5;

valuesDisplays.forEach((valuesDisplays)=>{
    let startValue = 48;
    let endValue = parseInt(valuesDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valuesDisplays.textContent = startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    },duration);
})