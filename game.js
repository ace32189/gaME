// คำนวณคะแนน
let score = 0;

// เมื่อปุ่มถูกคลิก
document.getElementById("click-button").addEventListener("click", () => {
    score++;
    document.getElementById("score").textContent = "คะแนน: " + score;

    document.getElementById("click-button").textContent = "คลิกอีกครั้ง";

    const container = document.querySelector('.game-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // สุ่มตำแหน่งใหม่โดยใช้ค่าเปอร์เซ็นต์
    const randomX = Math.random() * (containerWidth - 200);
    const randomY = Math.random() * (containerHeight - 100);

    document.getElementById("click-button").style.left = randomX + "px";
    document.getElementById("click-button").style.top = randomY + "px";
});


