document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const completed = JSON.parse(localStorage.getItem("completedLessons") || "[]");
  if (!completed.includes(path)) {
    completed.push(path);
    localStorage.setItem("completedLessons", JSON.stringify(completed));
    console.log(`Marked complete: ${path}`);
  }
});
