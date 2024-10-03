document.getElementById("yesBtn").addEventListener("click", function() {
    this.classList.add("move");

    // Появление "сердечек"
    let heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    document.body.appendChild(heart);

    // Удаление сердечек после анимации
    setTimeout(() => {
        heart.remove();
    }, 1000);

    // Переход на новую страницу через 1 секунду
    setTimeout(() => {
        window.location.href = "date-selection.html"; // Переход на страницу с выбором даты и времени
    }, 1000);
});

document.getElementById("noBtn").addEventListener("click", function() {
    alert("Aww, maybe next time!");
});