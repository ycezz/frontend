document.addEventListener("DOMContentLoaded", function () {
  let heading = document.querySelector("h1");
  let container = document.querySelector(".container");

  document.addEventListener("mouseover", function (e) {
    if (e.target === heading) {
      heading.style.color = "hsl(47, 88%, 63%)";
      heading.style.cursor = "pointer";
      container.style.boxShadow = "10px 10px";
    } else {
      heading.style.color = "";
      container.style.boxShadow = "";
    }
  });
});
