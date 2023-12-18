//Opening PopUp Windows for Summons etc.
function basicPopup(url) {
  popupWindow = window.open(
    url,
    "popUpWindow",
    "height=1000,width=1000,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
  );
}

//Opening and closing Modal Images
const modal = document.getElementById("myModal");

const img = document.getElementById("shade-image");

const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

const span = document.getElementsByClassName("close")[0];

span.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = () => {
  modal.style.display = "none";
};

//bad practice bandaid fix for dreams situation (mend in future)
const img2 = document.getElementById("shade-image-2");

img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

const img3 = document.getElementById("shade-image-3");

img3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

const img4 = document.getElementById("shade-image-4");

img4.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
