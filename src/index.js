function displayRecipe(response) {
  console.log("generating recipe");
  new Typewriter("#recipe-content", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function recipeGenerator(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "1bf42foc33aa256d79167at7004c6dac";
  let prompt = `Generate a Kenyan recipe on ${userInput.value} with ingredients  and instructions.`;
  let context =
    "Generate detailed Kenyan cuisine recipes including ingredients and step-by-step instructions in basic HTML without including an opening paragraph of what you are generating. The instructions should be detailed and easy to follow, without unnecessary information. Do not include the word 'html' in your response and send the full recipe without lags or breaking while generating the instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeContentElement = document.querySelector("#recipe-content");
  recipeContentElement.classList.remove("hidden");
  recipeContentElement.innerHTML = "Generating your recipe...";

  axios.get(apiUrl).then(displayRecipe);
  console.log("API request sent");
  console.log(prompt);
  console.log(context);
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", recipeGenerator);
