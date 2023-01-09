const toggle_options = document.getElementById('toggle_options')
const toggle_menu = document.getElementById('toggle_menu')

toggleBtn()


function toggleBtn() {
  //For Mobile
  const toggle_options = document.getElementById('toggle_options')

  if (window.screen.width > 320 & window.screen.width < 428) {

    if (toggle_options.style.right === "500px") {
      toggle_options.style.right = "0";
    } else {
      toggle_options.style.right = "500px";
    }

  }
// For Desktop
  if (window.screen.width > 769) {

    if (toggle_options.style.right === "2600px") {
      toggle_options.style.right = "0";
    } else {
      toggle_options.style.right = "2600px";
    }

  }

}

