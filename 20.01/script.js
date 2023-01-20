


function updateTime() {
    document.querySelector(".hours").innerHTML = new Date().getHours();;

    document.querySelector(".minutes").innerHTML = new Date().getMinutes();

    document.querySelector(".seconds").innerHTML =  new Date().getSeconds();

    const clock = new Date();
    
    new Date().getHours();
    new Date().getMinutes();
    new Date().getSeconds();
    
}
setInterval(updateTime, 1000);

