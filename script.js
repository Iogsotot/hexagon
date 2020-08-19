let hexs = document.querySelectorAll(".hex__item");
// let latestKnownScrollY = 0;
let wheelCount = 0;

function sliding(event) {
    // event.preventDefault();
    if (event.deltaY >= 0) {
        wheelCount-= 1;
        if(wheelCount === -1) {
            console.log("колесо крутят ВНИЗ, " + "счетчик колесика: " + wheelCount);
            moveHex("-8.8rem", "4rem", 0, "medium");
            moveHex("-15rem", "4.2rem", 1, "large");
            moveHex("-11.35rem", "10.7rem", 2, "medium");
            moveHex("-7.55rem", "6.35rem", 3, "mini");
            hideHex("-115rem", "19rem", 4);
        }
        if (wheelCount === -2) {
            console.log("колесо крутят ВНИЗ, " + "счетчик колесика: " + wheelCount);
            moveHex("-23.8rem", "8.2rem", 0, "large");
            moveHex("-26.33rem", "14.95rem", 1, "medium");
            moveHex("-18.08rem", "17.07rem", 2, "mini");
            hideHex("-125rem", "115rem", 3);
        }
        if (wheelCount === 1) {
            console.log("колесо крутят ВНИЗ, " + "счетчик колесика: " + wheelCount);
            moveHex("7.47rem", "-6.35rem", 4, "medium");
            moveHex("11.27rem", "-10.75rem", 3, "large");
            moveHex("15rem", "-4.2rem", 2, "medium");
            showHex("8.8rem", "-4rem", 1);
        }
        if (wheelCount === 0) {
            console.log("колесо крутят ВНИЗ, " + "счетчик колесика: " + wheelCount);
            startStatus();
        }
        if (wheelCount <= -3) {
            wheelCount = -2;
            console.log("мы дошли до края, " + "колесо крутят ВНИЗ, " + "счетчик колесика: " + wheelCount);
        }
        else {
            console.log("ERROR: " + "колесо крутят ВНИЗ, " + "счетчик колесика: " + wheelCount);
        }     
    }
    
    else if (event.deltaY < 0) {
        wheelCount+= 1;
        if (wheelCount === 1) {
            console.log("колесо крутят вверх, " + "счетчик колесика: " + wheelCount);
            moveHex("7.47rem", "-6.35rem", 4, "medium");
            moveHex("11.27rem", "-10.75rem", 3, "large");
            moveHex("15rem", "-4.2rem", 2, "medium");
            moveHex("8.8rem", "-4rem", 1, "mini");
            hideHex("117rem", "-110rem", 0);
        }
        if (wheelCount === 2) {
            console.log("колесо крутят вверх, " + "счетчик колесика: " + wheelCount);
            moveHex("18.8rem", "-17.07rem", 4, "large");
            moveHex("26.33rem", "-14.95rem", 3, "medium");
            moveHex("23.8rem", "-8.2rem", 2, "mini");
            hideHex("125rem", "-115rem", 1);
        }
        if  (wheelCount === -1) {
            console.log("колесо крутят вверх, " + "счетчик колесика: " + wheelCount);
            moveHex("-8.8rem", "4rem", 0, "medium");
            moveHex("-15rem", "4.2rem", 1, "large");
            moveHex("-11.35rem", "10.7rem", 2, "medium");
            showHex("-7.55rem", "6.35rem", 3);
        }
        if  (wheelCount === 0) {
            console.log("колесо крутят вверх, " + "счетчик колесика: " + wheelCount);
            startStatus();
        }
        if (wheelCount >= 3) {
            wheelCount = 2;
            console.log("мы дошли до края, " + "колесо крутят вверх, " + "счетчик колесика: " + wheelCount);
        }
        else {
            console.log("ERROR: " + "колесо крутят вверх, " + "счетчик колесика: " + wheelCount);
        }
    }
}

window.onwheel = sliding;


function moveHex(xValues, yValues, i, hexSize) {
    translateHex(xValues, yValues, i);
    stylizeHex(i, hexSize);
    changeHexContent(i);
}

function translateHex(xValues, yValues, i) {
    let transform = "translate(";
    transform += xValues;
    transform += ", "
    transform += yValues;
    transform += ")";
    hexs[i].style.transform = transform;
}

function stylizeHex(i, hexSize) {
    hexs[i].classList.remove("hex__item--mini", "hex__item--medium", "hex__item--large");
    let classAdd = "hex__item--";
    classAdd += hexSize;
    hexs[i].classList.add(classAdd);
}

function hideHex(xValues, yValues, i) {
    translateHex(xValues, yValues, i) 
    hexs[i].style.visibility = "hidden"; 
}

function showHex(xValues, yValues, i) {
    translateHex(xValues, yValues, i) 
    hexs[i].style.visibility = "visible"; 
}

function startStatus() {
    moveHex("0", "0", 0, "mini");
    moveHex("0", "0", 1, "medium");
    moveHex("0", "0", 2, "large");
    moveHex("0", "0", 3, "medium");
    moveHex("0", "0", 4, "mini");
    for (let index = 0; index < hexs.length; index++) {
        hexs[index].style.visibility = "visible"; 
    }
}





function changeHexContent(i) {
    if (hexs[i].classList.contains("hex__item--large")) {
        let allHexContent = hexs[i].querySelectorAll(".hex__location, .hex__date--full, .hex__time, .button--buy, .hex__date--day, .hex__date--month");
        allHexContent.forEach(element => {
            console.log("тоглим")
            element.classList.toggle("hidden");
        });
    }
    else if (!hexs[i].classList.contains("hex__item--large")) {
        let centralHexContent = hexs[i].querySelectorAll(".hex__location, .hex__date--full, .hex__time, .button--buy");
        let notCentralHexContent = hexs[i].querySelectorAll(".hex__date--day, .hex__date--month");

        centralHexContent.forEach(element => {
            element.classList.add("hidden");
        });
        notCentralHexContent.forEach(element => {
            element.classList.remove("hidden");
        });
    }
}


// hexs[1].onclick = function() {
//     moveHex("-8.8rem", "4rem", 0, "medium")
//     moveHex("-15rem", "4.2rem", 1, "large")
//     moveHex("-11.35rem", "10.7rem", 2, "medium")
//     moveHex("-7.55rem", "6.35rem", 3, "mini")
//     hideHex("-15rem", "9rem", 4);
// }


// hexs[0].onclick = function() {
//     moveHex("-180%", "50%", 0, "medium")
//     moveHex("-165%", "28%", 1, "large")
//     moveHex("-200%", "130%", 2, "medium")
//     moveHex("-180%", "120%", 3, "mini")
//     hideHex("-180%", "40%", 4);
// }
