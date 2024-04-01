import { catsData } from "./data.js";
const emotionRadiosEl = document.getElementById("emotion-radios");

function getEmotionsArray(cats) {
  const emotionArr = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionArr.includes(emotion)) {
        emotionArr.push(emotion);
      }
    }
  }
  return emotionArr;
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);

  let radioItmes = "";
  for (let emotion of emotions) {
    radioItmes += `
    <div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input type="radio" name="emotions" id="${emotion}" value="${emotion}" />
    </div>
    `;
  }
  emotionRadiosEl.innerHTML = radioItmes;
}

function highlightCheckedOption(e) {
  console.log(e.target.id);

  const radiosArray = document.getElementsByClassName("radio");
  for (let radio of radiosArray) {
    radio.classList.remove("highlight");
  }

  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

emotionRadiosEl.addEventListener("change", highlightCheckedOption);

renderEmotionsRadios(catsData);
