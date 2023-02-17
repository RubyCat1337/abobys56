let matrix = [
    ['P', '0', "0", '1', "1", '1', "1", '1', "1", '1'],
    ['1', '1', "0", '0', "0", '1', "0", '0', "0", '1'],
    ['1', '1', "0", '1', "0", '1', "1", '1', "1", '1'],
    ['1', '1', "0", '1', "0", '0', "0", '0', "1", '1'],
    ['1', '1', "1", '1', "1", '1', "1", '0', "1", '1'],
    ['1', '1', "0", '0', "0", '0', "1", '0', "1", '1'],
    ['1', '1', "0", '0', "0", '0', "1", '0', "1", '1'],
    ['1', '1', "0", '0', "0", '0', "1", '0', "1", '1'],
    ['1', '1', "0", '0', "0", '0', "0", '0', "1", '1'],
    ['1', '0', "0", '1', "1", '0', "1", '1', "1", '1'],
    ['1', '1', "0", '0', "0", '0', "0", '0', "0", '0'],
    ['1', '1', "0", '1', "1", '1', "1", '1', "1", '0'],
    ['1', '1', "0", '1', "1", '1', "0", '1', "1", '0'],
    ['1', '1', "0", '1', "1", '1', "0", '1', "1", '0'],
    ['1', '1', "0", '1', "1", '1', "0", '1', "1", '0'],
    ['1', '1', "0", '1', "1", '1', "0", '1', "1", '0'],
    ['1', '1', "0", '1', "1", '1', "0", '1', "1", '0'],
    ['1', '1', "0", '1', "1", '1', "0", '1', "1", '0'],
    ['1', '1', "0", '1', "1", '1', "0", '1', "1", '0'],
    ['1', '1', "1", '1', '1', '1', '1', '1', "1", 'W'],
]

function moveObiba(event){
    if (event.code == 'KeyW'){
        if (matrix[coordsPlayer["Y"] - 1][coordsPlayer["X"]] != 1){
            matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "0";
            coordsPlayer["Y"] -= 1;
            if (matrix[coordsPlayer["Y"]][coordsPlayer["X"]] != "F") {
                matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "P";}

        }
    }
    else if (event.code == 'KeyS'){
        if (matrix[coordsPlayer["Y"] + 1][coordsPlayer["X"]] != 1){
            matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "0";
            coordsPlayer["Y"] += 1;
            if (matrix[coordsPlayer["Y"]][coordsPlayer["X"]] != "F") {
                matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "P";}

        }
    }
    else if (event.code == 'KeyA'){
        if (matrix[coordsPlayer["Y"]][coordsPlayer["X"] - 1] != 1){
            matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "0";
            coordsPlayer["X"] -= 1;
            if (matrix[coordsPlayer["Y"]][coordsPlayer["X"]] != "F") {
                matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "P";}
        }
    }
    else if (event.code == 'KeyD'){
        if (matrix[coordsPlayer["Y"]][coordsPlayer["X"] + 1] != 1){
            matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "0";
            coordsPlayer["X"] += 1;
            if (matrix[coordsPlayer["Y"]][coordsPlayer["X"]] != "F") {
                matrix[coordsPlayer["Y"]][coordsPlayer["X"]] = "P";}

            }
        }

    
    player.style.top = String(coordsPlayer["Y"] * 25)+"px";
    player.style.left = String(coordsPlayer["X"] * 25)+"px";
}
let coordsPlayer = {
    "X":4,
    "Y":9
}

const pointElem = document.querySelector("h1")
const player = document.querySelector("#player")
player.style.top = String(coordsPlayer["Y"] * 25)+"px";
player.style.left = String(coordsPlayer["X"] * 25)+"px";
const mazeField = document.querySelector(".maze-field")
for (line in matrix){
    for (cell in matrix[line]){
        if (matrix[line][cell] == "1"){
            let elem = document.createElement("div");
            elem.classList.add("maze-block");
            elem.style.top = String(line*25)+"px";
            elem.style.left = String(cell*25)+"px";
            mazeField.append(elem);
        }
        else if (matrix[line][cell] == "F"){
            let elemFinish = document.createElement("div");
            elemFinish.classList.add("finish");
            elemFinish.style.top = String(line*25)+"px";
            elemFinish.style.left = String(cell*25)+"px";
            mazeField.append(elemFinish);
        }
    }
}


document.addEventListener('keydown',moveObiba)