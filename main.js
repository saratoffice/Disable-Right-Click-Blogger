const toastNotification = document.querySelector(".toast-notification");

const showNotification = () => {
  toastNotification.classList.add("active");

  setTimeout(() => {
    toastNotification.classList.remove("active");
  }, 2000);
};

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  showNotification();
});
