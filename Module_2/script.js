function upDate(previewPic) {
  let imageDiv = document.querySelector("#image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerText = previewPic.alt;
}

function unDo() {
  let imageDiv = document.querySelector("#image");
  imageDiv.style.backgroundImage = "";
  imageDiv.innerText = "Hover over an image below to display here.";
}
