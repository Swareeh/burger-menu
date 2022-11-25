const toggle_options = document.getElementById('toggle_options')
const toggle_menu = document.getElementById('toggle_menu')

toggleBtn() 

function toggleBtn() {
  const toggle_options = document.getElementById('toggle_options')

  if (toggle_options.style.right === "500px") {
    toggle_options.style.right = "0";
  } else {
    toggle_options.style.right = "500px";
  }

}

