// following code adapted from https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp
window.onscroll = function() {scrollFunction()};
const headerElements = document.getElementsByClassName('icon');
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = "#e5f1f2";
    document.querySelector(".h2").style.color = "#303030";
    
    for (let i = 0; i < headerElements.length; i++) {
      const icon = headerElements[i];
      icon.style.color = "#303030";
    }
  } else {
    document.getElementById("header").style.background = "";
    document.querySelector(".h2").style.color = "#fff";
    for (let i = 0; i < headerElements.length; i++) {
      const icon = headerElements[i];
      icon.style.color = "#fff";
    }
  }
}