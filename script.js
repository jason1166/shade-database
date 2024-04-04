//Opening PopUp Windows for Summons etc.
function basicPopup(url) {
  popupWindow = window.open(
    url,
    "popUpWindow",
    "height=1000,width=1200,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
  );
}

//Opening and closing Modal Images
// const modal = document.getElementById("myModal");

// const img = document.getElementById("shade-image");

// const modalImg = document.getElementById("img01");
// const captionText = document.getElementById("caption");
// img.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// const span = document.getElementsByClassName("close")[0];

// span.onclick = () => {
//   modal.style.display = "none";
// };

// modal.onclick = () => {
//   modal.style.display = "none";
// };

/*Siderbar experiment*/
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  $("#mySidebar").css("width", "250px");
  $("#sidebar-btn").css("display", "none");
  $("#main").css("margin-left", "250px");
}

function closeNav() {
  $("#mySidebar").css("width", "0");
  $("#sidebar-btn").css("display", "block");
  $("#main").css("margin-left", "0");
}

function openList1() {
  let team1DropDown = document.getElementById("team1List");

  if (team1DropDown.style.display == "block") {
    team1DropDown.style.display = "none";
  } else {
    team1DropDown.style.display = "block";
  }
}

function openList2() {
  let team2DropDown = document.getElementById("team2List");

  if (team2DropDown.style.display == "block") {
    team2DropDown.style.display = "none";
  } else {
    team2DropDown.style.display = "block";
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementById("content");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
