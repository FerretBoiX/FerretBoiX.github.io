var referrer = document.referrer;

if(referrer !== "") {
  document.getElementById("refea").innerHTML = "באת לכאן מ- " + "<a href="+ referrer + ">" + referrer + "<\a>";
};
