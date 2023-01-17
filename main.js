const showToast = ({
  title = "",
  message = "",
  type = "",
  duration = 5000,
}) => {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    // auto remove toast
    const autoRmoveId = setTimeout(() => {
      main.removeChild(toast);
      // + 1000 thoi gian fadeOut
    }, duration + 1000);
    // remove toast when clicked
    toast.onclick = (e) => {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRmoveId);
      }
    };
    const delay = (duration / 1000).toFixed(2);
    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];
    toast.classList.add("toast", `toast--${type}`);
    toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close"><i class="fas fa-times"></i></div>
    `;
    main.appendChild(toast);
  }
};
