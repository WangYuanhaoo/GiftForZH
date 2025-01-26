const correctName = "周好";
const nameInput = document.getElementById('user-name');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function () {
    const inputName = nameInput.value;
    if (inputName === correctName) {
        window.location.href = "page1.html";
    } else {
        alert("好像名字不太对哦，但没关系，不管你是谁，在这个新年夜，都能感受到满满的爱意。我爱你！");
    }
});