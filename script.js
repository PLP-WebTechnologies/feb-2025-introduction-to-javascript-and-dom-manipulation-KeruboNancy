document.addEventListener('DOMContentLoaded', () => {
    const tips = [
        "Be kind and a little mysterious ✨",
        "Keep your standards high 💎",
        "Know your worth 💖",
        "Learn to cook at least one amazing meal 🍝",
        "Be confident, not desperate 😌"
    ];

    const gradients = [
        "linear-gradient(to right, #ff7eb9, #ff65a3, #ffc2e2)", // pink
        "linear-gradient(to right, #a1c4fd, #c2e9fb)",          // blue
        "linear-gradient(to right, #fddb92, #d1fdff)",          // peachy
        "linear-gradient(to right, #c2e59c, #64b3f4)",          // green-blue
        "linear-gradient(to right, #fbc2eb, #a6c1ee)"           // purple-pink
    ];

    const tipElement = document.getElementById('tip');
    const changeTipBtn = document.getElementById('change-tip');

    changeTipBtn.addEventListener('click', () => {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

        tipElement.textContent = `${randomTip}`;
        tipElement.style.background = randomGradient;
        tipElement.classList.remove('hidden');
    });
});
