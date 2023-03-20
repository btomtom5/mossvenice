// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//

// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"
// Establish Phoenix Socket and LiveView configuration.
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import topbar from "../vendor/topbar"

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {params: {_csrf_token: csrfToken}})

// Show progress bar on live navigation and form submits
topbar.config({barColors: {0: "#29d"}, shadowColor: "rgba(0, 0, 0, .3)"})
window.addEventListener("phx:page-loading-start", _info => topbar.show(300))
window.addEventListener("phx:page-loading-stop", _info => topbar.hide())

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
window.liveSocket = liveSocket

const buttons = document.querySelectorAll('.category-button');
const lists = document.querySelectorAll('.category-list');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;

    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    lists.forEach((list) => {
      list.classList.add('hidden');
    });

    button.classList.add('active');
    document.querySelector(`.category-list.${target}`).classList.remove('hidden');
  });
});



const items = document.querySelectorAll(".accordion-item");

function toggleAccordion() {
  const arrow = this.querySelector(".icon svg");

  this.classList.toggle("active");
  this.querySelector(".accordion-content").classList.toggle("active");

  // Check if the accordion is active
  if (this.classList.contains("active")) {
    // Rotate the arrow to the expanded state
    arrow.style.transform = "rotate(180deg)";
  } else {
    // Rotate the arrow back to the collapsed state
    arrow.style.transform = "rotate(0deg)";
  }
}

items.forEach(item => item.addEventListener("click", toggleAccordion));
