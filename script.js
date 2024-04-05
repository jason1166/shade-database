//Opening PopUp Windows for Summons etc.
function basicPopup(url) {
  popupWindow = window.open(
    url,
    "popUpWindow",
    "height=1000,width=1200,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
  );
}

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