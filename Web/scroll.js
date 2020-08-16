document.getElementById("headerForm").addEventListener("scroll", myFunction);

function myFunction() {
  let headerDiv = document.getElementById("headerDiv");
  let scrollMoveY = document.getElementById("headerForm").scrollTop;

  if (scrollMoveY > 80) {
    headerDiv.className = "headerClass";
  } else {
    headerDiv.className = "";
  }
}
