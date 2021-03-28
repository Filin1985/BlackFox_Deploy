// This function I got from the website aspsnippets, author Mudassar Khan. It allows me to download the pdf file for each erticle
function DownloadFile(fileName) {
  // Set the file URL
  const url = "files/" + fileName;

  // Create XMLHTTP request
  let req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
    //Convert the byte Data to blob object
    let blob = new Blob([req.response], { type: "application/octetstream" });

    // Check the browser type and download File
    let isIE = false || !!document.documentMode;
    if (isIE) {
      window.navigator.msSaveBlob(blob, fileName);
    } else {
      let url = window.URL || window.webkitURL;
      link = url.createObjectURL(blob);
      let a = document.createElement("a");
      a.setAttribute("download", fileName);
      a.setAttribute("href", link);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  req.send();
}

// Here is the code that allows me to filter srticles by their main theme
document.addEventListener("DOMContentLoaded", () => {
  [...document.querySelectorAll("#categories li a")].forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      //  Getting all of the links with data-category attribute
      const cat = link.getAttribute("data-category").toLowerCase();
      document.querySelectorAll(".article.card").forEach((card) => {
        // Getting the inner text of the category
        const t = card.querySelector(".data .category").innerText.toLowerCase();
        // Comparing two query
        if (cat === t) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
      // Majing red text of choosing category
      document.querySelectorAll("#categories li a").forEach((item) => {
        const t = item.getAttribute("data-category").toLowerCase();
        if (cat === t) {
          item.classList.add("redtext");
        } else {
          item.classList.remove("redtext");
        }
      });
    });
  });
});
