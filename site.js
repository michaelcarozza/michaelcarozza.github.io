(function () {
  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Email address is assembled here so it is not sitting in the page as plain text
  var spots = document.querySelectorAll("[data-email]");
  for (var i = 0; i < spots.length; i++) {
    var el = spots[i];
    var address = el.getAttribute("data-user") + "@" + el.getAttribute("data-domain");
    var link = document.createElement("a");
    link.href = "mailto:" + address;
    link.textContent = address;
    el.textContent = "";
    el.appendChild(link);
  }
})();
