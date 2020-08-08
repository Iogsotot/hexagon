let hexs = document.querySelectorAll(".hex__item");

function moveHex(xValues, yValues, i, hexSize) {
    translateHex(xValues, yValues, i);
    stylizeHex(i, hexSize);
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


hexs[0].onclick = function() {
        moveHex("-8.8rem", "4rem", 0, "medium")
        moveHex("-15rem", "4.2rem", 1, "large")
        moveHex("-11.35rem", "10.7rem", 2, "medium")
        moveHex("-7.55rem", "6.35rem", 3, "mini")
        hideHex("-15rem", "9rem", 4);
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
