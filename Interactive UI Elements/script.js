const notificationsContainer = document.getElementById("notifications");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const type = button.dataset.type;
        showNotification(type);
    });
});

function showNotification(type) {
    const notification = document.createElement("div");
    notification.classList.add("notification", type);

    let title = "";
    let message = "";

    if (type === "success") {
        title = "Success";
        message = "Операцію успішно виконано.";
    } else if (type === "error") {
        title = "Error";
        message = "Сталася помилка під час виконання дії.";
    } else if (type === "warning") {
        title = "Warning";
        message = "Увага! Перевірте введені дані.";
    } else if (type === "info") {
        title = "Info";
        message = "Інформаційне повідомлення для користувача.";
    }

    notification.innerHTML = `
        <button class="close-btn">&times;</button>
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
        <div class="progress">
            <div class="progress-bar"></div>
        </div>
    `;

    notificationsContainer.appendChild(notification);

    const closeBtn = notification.querySelector(".close-btn");
    closeBtn.addEventListener("click", function () {
        notification.remove();
    });

    setTimeout(function () {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 4000);
}