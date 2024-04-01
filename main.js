import { catsData } from "./data.js";
const emotionRadiosEl = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const getGifCheckbox = document.getElementById("gifs-only-option");
const memeModal = document.getElementById("meme-modal");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");
getImageBtn.disabled = true;

//listen for change in radios container on radios
emotionRadiosEl.addEventListener("change", highlightCheckedOption);

//close btn
memeModalCloseBtn.addEventListener("click", closeBtn);

//eventlistener taht call getMatchingCatsArray when get image is clicked
getImageBtn.addEventListener("click", renderCat);

//remove class from elements and add new
function highlightCheckedOption(e) {
  console.log(e.target.id + " on click"); //console log selected radio element value
  getImageBtn.disabled = false;

  const radiosArray = document.getElementsByClassName("radio");
  for (let radio of radiosArray) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function closeBtn() {
  memeModal.style.display = "none";
}

// Object { emotionTags: (1) […], isGif: true, image: "happy.gif", alt: "A cat looking happy" }
// alt: "A cat looking happy"
// emotionTags: Array [ "happy" ]
// image: "happy.gif"
// isGif: true

function renderCat() {
  const catObject = getSingleCatObject();
  memeModal.style.display = "flex";
  memeModalInner.innerHTML = `<img 
                  class="cat-img" 
                  src="./images/${catObject.image}"
                  alt="${catObject.alt.toUpperCase}"
  >`;
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    const randomNumb = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumb];
  }
}

//function that logs out chekced radio element
function getMatchingCatsArray() {
  if (document.querySelector("input[type='radio']:checked")) {
    const checkedRadioInput = document.querySelector("input[type='radio']:checked").value;
    console.log(checkedRadioInput + " from button"); //console log selected radio button

    const isGif = getGifCheckbox.checked;
    console.log(isGif + " isGif?"); //isGif Checkbox

    //filtering checked radio emorionTag with animated checkbox
    const matchingCatsArray = catsData.filter(function (n) {
      if (isGif) {
        return n.emotionTags.includes(checkedRadioInput) && n.isGif;
      } else {
        return n.emotionTags.includes(checkedRadioInput);
      }

      //if emotionTag Array in object catsData includes selected radio input
    });
    // console.log(matchingCatsArray); //console arrays
    return matchingCatsArray;
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
