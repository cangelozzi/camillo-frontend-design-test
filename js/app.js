;(() => {
  console.log("Welcome to Camillo's Frontend Challenge!")
  var rellax = new Rellax('.rellax')

  //! VARIABLES
  // let popup = document.querySelector("#popup");
  // let close_btn = document.querySelector("#close_btn");
  // let popupShow = false;
  // let wasPopoupShowed = null;
  // let emailEntered = document.querySelector("#email").value;

  //! FUNCTIONS
  // // check if popup was ever shown
  // const isPopupShown = () => {
  //   wasPopoupShowed = localStorage.getItem("popupShow");

  //   if (wasPopoupShowed) {
  //     popup.style.display = "none";
  //   } else {
  //     // 1. Popup will appear after 3 seconds
  //     // 2. Site will record on localstorage
  //     setTimeout(() => {
  //       popup.style.display = "block";
  //       localStorage.setItem("popupShow", true);
  //     }, 3000);
  //   }
  // };

  //! EVENTS
  // // on load check if popup was showed before.  Localstorage holds the secret!
  // window.addEventListener("load", isPopupShown());

  // // close popup with ESC key press
  // window.onkeydown = function(event) {
  //   if (event.keyCode == 27) {
  //     console.log("escape pressed, popup closed");
  //     popup.style.display = "none";
  //   }
  // };

  // // close popup btn
  // close_btn.addEventListener("click", () => {
  //   popup.style.display = "none";
  // });
})()
