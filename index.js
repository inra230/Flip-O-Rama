count = 3

function changeImage() {
  var pic;
  count++
  if ((count % 2) == 1) {
    pic = "/images/no smack.png"
  } else {
    pic = "/images/smack.png"
  }
  document.getElementById('myImage').src = pic;
}