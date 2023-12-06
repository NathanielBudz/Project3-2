document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("resize", function () {
    applyResponsiveStyles();
  });

  applyResponsiveStyles();
});

function applyResponsiveStyles() {
  if (window.innerWidth <= 600) {
    document.body.style.fontSize = "14px";
    document.body.style.lineHeight = "1.6";
    document.querySelector("h1").style.fontSize = "24px";
    document.querySelector("nav ul").style.textAlign = "left";
    document.querySelector("nav ul").style.paddingLeft = "10px";
  } else if (window.innerWidth <= 1024) {
    document.body.style.fontSize = "16px";
    document.body.style.lineHeight = "1.8";
    document.querySelector("h1").style.fontSize = "28px";
    document.querySelector("nav ul").style.textAlign = "center";
    document.querySelector("nav ul").style.paddingLeft = "0";
  } else {
    document.body.style.fontSize = "18px";
    document.body.style.lineHeight = "2";
    document.querySelector("h1").style.fontSize = "32px";
    document.querySelector("nav ul").style.textAlign = "center";
    document.querySelector("nav ul").style.paddingLeft = "0";
  }
}
