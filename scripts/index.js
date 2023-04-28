

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

    function addBtnClicked() {
        const answer = document.getElementById("answer");

        let result = Number(x.value) + Number(y.value);
        answer.value = result;

    }
    function subtractBtnClicked() {
        const answer = document.getElementById("answer");

        let result = Number(x.value) - Number(y.value);
        answer.value = result;

    }
    function multiplyBtnClicked() {
        const answer = document.getElementById("answer");

        let result = Number(x.value) * Number(y.value);
        answer.value = result;

    }
    function divideBtnClicked() {
        const answer = document.getElementById("answer");

        let result = Number(x.value) / Number(y.value);
        answer.value = result;

    }

}
window.onload = init;

