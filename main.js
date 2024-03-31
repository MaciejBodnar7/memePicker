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

renderEmotionsRadios(catsData);
