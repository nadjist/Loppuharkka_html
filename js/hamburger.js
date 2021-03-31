function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "sticky-nav") {
      x.className += " responsive";
    } else {
      x.className = "sticky-nav";
    }
  }