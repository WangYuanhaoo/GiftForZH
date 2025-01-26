const correctName = "周好";
let currentStep = 0;

const storyTextElement = document.getElementById('story-text');
const userInputElement = document.getElementById('user-input');
const submitButtonElement = document.getElementById('submit-button');

submitButtonElement.addEventListener('click', function () {
    const inputValue = userInputElement.value;
    if (currentStep === 0) {
        if (inputValue === correctName) {
            storyTextElement.textContent = "哇，是你呀，我一直在等你！你就像新年夜最璀璨的星光，照亮了我的世界。现在，你发现面前有两条路，一条是散发着温暖光芒的金色小路，另一条是闪烁着神秘蓝光的银色小路。输入 1 选金色小路，输入 2 选银色小路";
            userInputElement.value = '';
            userInputElement.placeholder = "请输入你的选择";
            currentStep = 1;
        } else {
            storyTextElement.textContent = "好像名字不太对哦，但没关系，不管你是谁，在这个新年夜，都能感受到满满的爱意。我爱你！";
            userInputElement.disabled = true;
            submitButtonElement.disabled = true;
        }
    } else if (currentStep === 1) {
        if (inputValue === '1') {
            storyTextElement.textContent = "你踏上了金色小路，脚下的光芒仿佛在为你欢呼。走着走着，你看到前方有一个精美的礼盒。你打开礼盒，里面是一条漂亮的项链，喜欢吗？（输入 1 表示喜欢，输入 2 表示不喜欢）";
            userInputElement.value = '';
            userInputElement.placeholder = "请输入你的选择";
            currentStep = 2;
        } else if (inputValue === '2') {
            storyTextElement.textContent = "你选择了银色小路，神秘的蓝光围绕着你。突然，一只可爱的小精灵出现了。小精灵说：我可以满足你一个新年小愿望，你有什么愿望呢？（输入 1 想要健康，输入 2 想要快乐）";
            userInputElement.value = '';
            userInputElement.placeholder = "请输入你的选择";
            currentStep = 3;
        }
    }
    // 可以继续添加更多步骤的逻辑
});