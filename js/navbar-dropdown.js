!function(){var e;["scroll","resize"].forEach((function(o){document.addEventListener(o,(function(o){clearTimeout(e),e=setTimeout((function(){!function(e){"resize"===e.type&&(document.body.classList.remove("navbar-dropdown-open"),document.querySelector(".navbar-dropdown").querySelector(".navbar-collapse").classList.remove("show"),document.querySelector(".navbar-dropdown").classList.remove("opened"),Array.from(document.querySelector(".navbar-dropdown").querySelectorAll('.navbar-toggler[aria-expanded="true"]')).forEach((function(e){var o=e.querySelector(e.getAttribute("data-target"));o&&(o.classList.remove("in"),o.setAttribute("aria-expanded","false"),e.setAttribute("aria-expanded","false"))})));var o=document.documentElement.scrollTop;Array.from(document.querySelectorAll(".navbar-dropdown")).forEach((function(e){e.matches(".navbar-fixed-top")&&(e.matches(".transparent")&&!e.classList.contains("opened")&&(0<o?e.classList.remove("bg-color"):e.classList.add("bg-color")),0<o?e.classList.add("navbar-short"):e.classList.remove("navbar-short"))}))}(o)}),10)}))})),["show.bs.collapse","hide.bs.collapse"].forEach((function(e){document.addEventListener(e,(function(){var o=document.querySelector(".navbar-dropdown");o&&("show.bs.collapse"==e?(document.body.classList.add("navbar-dropdown-open"),o.classList.add("opened")):(document.body.classList.remove("navbar-dropdown-open"),o.classList.remove("opened"),window.dispatchEvent(new CustomEvent("scroll.bs.navbar-dropdown.data-api")),o.dispatchEvent(new CustomEvent("collapse.bs.navbar-dropdown"))))}))})),document.addEventListener("collapse.bs.nav-dropdown",(function(e){(e=e.relatedTarget.closest(".navbar-dropdown"))&&(e=e.querySelector('.navbar-toggler[aria-expanded="true"]'))&&e.dispatchEvent(new CustomEvent("click"))}))}();