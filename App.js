let myId = document.querySelector("#trId");
let myButton = document.querySelector("#button_");
let myResult = document.getElementById("result");



    myButton.addEventListener("click", () => {
    let idOddAdd = 0;
    let idEvenAdd = 0;
    for (let index = 0; index < 9; index += 2) {
        idOddAdd += Number(myId.value[index]);
    }

    for (let index = 1; index < 9; index += 2) {
        idEvenAdd += Number(myId.value[index]);
    }
    let id_10 = (idOddAdd*7 - idEvenAdd) % 10;
    let id_11 = (idOddAdd + idEvenAdd + id_10) % 10;

    if (myId.value[0] != 0 && myId.value.length == 11 && Number(myId.value[9]) == id_10 && Number(myId.value[10]) == id_11 ) {
        myResult.innerHTML = `"${myId.value}" is a valid TR Id NUmber`
    }
    else {myResult.innerHTML = `"${myId.value}" is not a valid TR Id NUmber`}
    })