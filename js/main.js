function isNotBusy(element) {
    return !element.classList.contains("busy");
}

function addModalOpenListener(elementId, modalId) {
    document.getElementById(elementId).addEventListener("click", function() {
        var element = document.getElementById(elementId);
        if (isNotBusy(element)) {
            document.getElementById(modalId).classList.add("open");
        }
    });
}

// Добавляем слушатели для элементов июня
for (let i = 1; i <= 24; i++) {
    addModalOpenListener(`june${i}`, "modalTime");
}

// Добавляем слушатели для time_card элементов
for (let i = 1; i <= 6; i++) {
    addModalOpenListener(`time_card${i}`, "modal_reg");
}

// Добавляем слушатели для кнопок закрытия
document.getElementById("close_btn1").addEventListener("click", function() {
    document.getElementById("modalTime").classList.remove("open");
});

document.getElementById("close_btn2").addEventListener("click", function() {
    document.getElementById("modal_reg").classList.remove("open");
});
