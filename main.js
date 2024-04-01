import { catsData } from "./data.js";
const emotionRadiosEl = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const getGifCheckbox = document.getElementById("gifs-only-option");
getImageBtn.disabled = true;

//listen for change in radios container on radios
emotionRadiosEl.addEventListener("change", highlightCheckedOption);

//eventlistener taht call getMatchingCatsArray when get image is clicked
getImageBtn.addEventListener("click", getMatchingCatsArray);

//remove class from elements and add new
function highlightCheckedOption(e) {
  console.log(e.target.id); //console log selected radio element value
  getImageBtn.disabled = false;

  const radiosArray = document.getElementsByClassName("radio");
  for (let radio of radiosArray) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

//function that logs out chekced radio element
function getMatchingCatsArray() {
  const isGif = getGifCheckbox.checked;
  console.log(isGif);
  if (document.querySelector("input[type='radio']:checked")) {
    const checkedRadioInput = document.querySelector("input[type='radio']:checked").value;
    console.log(checkedRadioInput); //console log selected radio button
  }
}

//get everything from array that is not duplicate and return
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

//render everyting from getEmotionsArray() function
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

//Call function to render things on stie
renderEmotionsRadios(catsData);
