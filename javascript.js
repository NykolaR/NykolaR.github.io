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
      if (location === "about") {
        out += "<a href=\"about.html\" class=\"headerText\" id=\"on\">About</a>";
      } else {
        out += "<a href=\"about.html\" class=\"headerText\">About</a>";
      }
      if (location === "blog") {
        out += "<a href=\"blog/one/body.html\" class=\"headerText\" id=\"on\">Blog</a>";
      } else {
        out += "<a href=\"blog/one/body.html\" class=\"headerText\">Blog</a>";
      }
    out += "</div>";
  out += "<div class=\"headerRight\">";
    out += "<a href=\"https://twitter.com/NykolaR\" title=\"Twitter\" target=\"_blank\">";
      out += "<img src=\"images/TwitterLogo.png\">";
    out += "</a>";

    out += "<a href=\"https://www.youtube.com/channel/UCxnwMhe8REvXajd7F9rqWHA\" title=\"Youtube\" target=\"_blank\">";
      out += "<img src=\"images/YoutubeLogo.png\">";
    out += "</a>";

    out += "<a href=\"https://www.kickstarter.com/projects/1981932141/darkness-reclamation\" title=\"Kickstarter\" target=\"_blank\">";
      out += "<img src=\"images/KickstarterLogo.png\">";
    out += "</a>";

    out += "<a href=\"https://www.twitch.tv/nykolar\" title=\"Twitch\" target=\"_blank\">";
      out += "<img src=\"images/TwitchLogo.png\">";
    out += "</a>";
  out += "</div>";
    document.getElementById("placeHead").innerHTML = out;

}

function blogHeader (location) {
  var out = "";
  out += "<div class=\"header\">";
    out += "<div class=\"headerLeft\">";
      if (location === "home") {
        out += "<a href=\"../../index.html\" class=\"headerText\" id=\"on\">Home</a>";
      } else {
        out += "<a href=\"../../index.html\" class=\"headerText\">Home</a>";
      }
      if (location === "press") {
        out += "<a href=\"../../press.html\" class=\"headerText\" id=\"on\">Press</a>";
      } else {
        out += "<a href=\"../../press.html\" class=\"headerText\">Press</a>";
      }
      if (location === "about") {
        out += "<a href=\"../../about.html\" class=\"headerText\" id=\"on\">About</a>";
      } else {
        out += "<a href=\"../../about.html\" class=\"headerText\">About</a>";
      }
      if (location === "blog") {
        out += "<a href=\"./body.html\" class=\"headerText\" id=\"on\">Blog</a>";
      } else {
        out += "<a href=\"./body.html\" class=\"headerText\">Blog</a>";
      }
    out += "</div>";
  out += "<div class=\"headerRight\">";
    out += "<a href=\"https://twitter.com/NykolaR\" title=\"Twitter\" target=\"_blank\">";
      out += "<img src=\"../../images/TwitterLogo.png\">";
    out += "</a>";

    out += "<a href=\"https://www.youtube.com/channel/UCxnwMhe8REvXajd7F9rqWHA\" title=\"Youtube\" target=\"_blank\">";
      out += "<img src=\"../../images/YoutubeLogo.png\">";
    out += "</a>";

    out += "<a href=\"https://www.kickstarter.com/projects/1981932141/darkness-reclamation\" title=\"Kickstarter\" target=\"_blank\">";
      out += "<img src=\"../../images/KickstarterLogo.png\">";
    out += "</a>";

    out += "<a href=\"https://www.twitch.tv/nykolar\" title=\"Twitch\" target=\"_blank\">";
      out += "<img src=\"../../images/TwitchLogo.png\">";
    out += "</a>";
  out += "</div>";
    document.getElementById("placeHead").innerHTML = out;

}

function mediaPress () {

}

function mediaHome () {

}

function getBlogs () {
  
}
