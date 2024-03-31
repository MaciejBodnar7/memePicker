import { catsData } from "./data.js";
const emotionRadiosEl = document.getElementById("emotion-radios");

function getEmotionsArray(cats) {
  const emotionArr = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionArr.push(emotion);
    }
  }
  return emotionArr;
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);

  let radioItmes = "";
  for (let emotion of emotions) {
    radioItmes += `<p>${emotion}</p>`;
  }
  emotionRadiosEl.innerHTML = radioItmes;
}

renderEmotionsRadios(catsData);
