

function init() {
    const x = document.getElementById("number1");
    const y = document.getElementById("number2");
    const addBtn = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");
    const multiplyBtn = document.getElementById("multiplyBtn");
    const divideBtn = document.getElementById("divideBtn");
    addBtn.onclick = addBtnClicked;
    subtractBtn.onclick = subtractBtnClicked;
    multiplyBtn.onclick = multiplyBtnClicked;
    divideBtn.onclick = divideBtnClicked;
    const answer = document.getElementById("answer");

    function addBtnClicked() {

        let result = Number(x.value) + Number(y.value);
        answer.value = result;

    }
    function subtractBtnClicked() {

        let result = Number(x.value) - Number(y.value);
        answer.value = result;

    }
    function multiplyBtnClicked() {

        let result = Number(x.value) * Number(y.value);
        answer.value = result;

    }
    function divideBtnClicked() {

        let result = Number(x.value) / Number(y.value);
        answer.value = result;

    }

}
window.onload = init;

