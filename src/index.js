function recipeGenerator(event) {
  event.preventDefault();

  new Typewriter("#recipe-content", {
    strings: "Simple Kenyan Recipe",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", recipeGenerator);
