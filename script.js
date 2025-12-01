const ctas = document.querySelectorAll(".cta-btn");
const notify = document.getElementById("notifyBox");

// Sound click (opsional)
const clickSound = new Audio("https://cdn.freesound.org/previews/522/522518_11544995-lq.mp3");

ctas.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.play();

    notify.innerText = "🛒 Adding to cart...";
    notify.classList.add("show");

    // Step 2: Validating
    setTimeout(() => {
      notify.innerText = "🔐 Validating order...";
    }, 1600);

    // Step 3: Redirecting
    setTimeout(() => {
      notify.innerText = "➡️ Redirecting to secure checkout...";
    }, 3000);

    // Close popup
    setTimeout(() => {
      notify.classList.remove("show");
    }, 4600);
  });
});
