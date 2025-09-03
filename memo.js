function cutRibbon() {
  document.getElementById("ribbonLeft").classList.add("cut");
  document.getElementById("ribbonRight").classList.add("cut");

  setTimeout(() => {
    document.getElementById("ribbonScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "flex";
  }, 1500);
}

function showSection(sectionId) {
  let sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
}
