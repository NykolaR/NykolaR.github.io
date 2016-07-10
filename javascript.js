function header (location) {
  var out = "";
  out += "<div class=\"header\">";
    out += "<div class=\"headerLeft\">";
      if (location === "home") {
        out += "<a href=\"index.html\" class=\"headerText\" id=\"on\">Home</a>";
      } else {
        out += "<a href=\"index.html\" class=\"headerText\">Home</a>";
      }
      if (location === "press") {
        out += "<a href=\"press.html\" class=\"headerText\" id=\"on\">Press</a>";
      } else {
        out += "<a href=\"press.html\" class=\"headerText\">Press</a>";
      }
    out += "</div>";
  out += "<div class=\"headerRight\">";
    out += "<a href=\"https://twitter.com/NykolaR\" title=\"Twitter\">";
      out += "<img src=\"images/TwitterLogo.png\">";
    out += "</a>";
  out += "</div>";
    document.getElementById("placeHead").innerHTML = out;

}
