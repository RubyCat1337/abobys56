
const startText = document.querySelector("p").innerText;
const text = document.querySelector("p");
const blueText = document.querySelector(".blue");
const redText = document.querySelector(".red");





document.addEventListener("keydown",(event) => {

    if (redText.innerHTML != ""){

        if (event.key == "Backspace"){
            redText.innerHTML = redText.innerHTML.slice(0,(redText.innerHTML).length-1)
            text.innerHTML = startText.slice((blueText.innerHTML).length+(redText.innerHTML).length);
            text.prepend(blueText,redText) 
            }
        }


if (event.key == startText[(blueText.innerHTML).length]){

    if (redText.innerHTML == "") {
        blueText.innerHTML = startText.slice(0,((blueText.innerHTML).length + 1));
        text.innerHTML = startText.slice((blueText.innerHTML).length);
        text.prepend(blueText,redText)
        }
    }
})

