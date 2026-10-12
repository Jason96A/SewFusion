document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("[data-copy-target]");
  if (!button) return;

  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      const original = button.innerHTML;
      button.textContent = "Copied";
      button.classList.add("is-copied");
      window.setTimeout(() => {
        button.innerHTML = original;
        button.classList.remove("is-copied");
      }, 1800);
    } catch {
      button.textContent = "Select and copy";
    }
  });
});
