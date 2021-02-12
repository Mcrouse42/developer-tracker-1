var elements = document.getElementsByClassName("dropdown-item");

Array.from(elements).forEach((element) => {
  element.addEventListener("click", (event) => {
    alert(`Clicked ${event.target.innerText}!`);
  });
});




