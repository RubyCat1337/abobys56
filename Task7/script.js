let matrix = [
    "1111111111111111111".split(""),
    "1000000000010100001".split(""),
    "1111101111010101001".split(""),
    "1000001000010100001".split(""),
    "1011111011110000001".split(""),
    "1010000010110110001".split(""),
    "1010111110110100111".split(""),
    "1010000000000100001".split(""),
    "1P11111111111110101".split(""),
    "1010001010001000101".split(""),
    "1010001000001000111".split(""),
    "1011100000100000001".split(""),
    "1000110111111111001".split(""),
    "1010010000000001101".split(""),
    "1011011111111101111".split(""),
    "1010000000000101101".split(""),
    "1011111111100100001".split(""),
    "10100010001001111F1".split(""),
    "1000100010110010001".split(""),
    "1111111111111111111".split("")
]


const coordsPlayer = document.querySelector("#player")

function ObamaVinovat(event) {
    // const coordsPlayer = document.querySelector("#player")
    if (event.code == "KeyW") {
        if (coordsPlayer.style.top != '0px') {
            console.log(coordsPlayer.style.top);
            coordsPlayer.style.top = (parseInt(coordsPlayer.style.top || getComputedStyle(coordsPlayer)['left'], 10) - 25) + 'px';
        }
    } else if (event.code == 'KeyD') {
        if (coordsPlayer.style.left != '475px') {
            console.log(coordsPlayer.style.left);
            coordsPlayer.style.left = (parseInt(coordsPlayer.style.left || getComputedStyle(coordsPlayer)['left'], 10) + 25) + 'px';
        }
    } else if (event.code == 'KeyA') {
        if (coordsPlayer.style.left != '0px') {
            console.log(coordsPlayer.style.left);
            coordsPlayer.style.left = (parseInt(coordsPlayer.style.left || getComputedStyle(coordsPlayer)['left'], 10) - 25) + 'px';
        }
    } else if (event.code == 'KeyS') {
        if (coordsPlayer.style.top != '475px') {
            console.log(coordsPlayer.style.top);
            coordsPlayer.style.top = (parseInt(coordsPlayer.style.top || getComputedStyle(coordsPlayer)['left'], 10) + 25) + 'px';
        }
    }
}
const kukuruzaPisos = (maze) => {
    let divElQ = document.querySelector(".maze-field");
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            let divEl = document.createElement("div");
            divEl.style.width = '25px';
            divEl.style.height = '25px';
            divEl.style.backgroundColor = 'black';
            let mazeW = matrix.values()
            divElQ.append(divEl);
            // field.append(field);
            
        }
    }
}
kukuruzaPisos(matrix);
document.addEventListener('keydown', ObamaVinovat);