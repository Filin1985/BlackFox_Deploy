// This function I got from the website aspsnippets, author Mudassar Khan
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

// Filter articles

$(function () {
  $("#categories li a").click(function (e) {
    e.preventDefault();
    const cat = $(this).attr("data-category").toLowerCase();
    $(".article.card").removeClass("hidden");
    $(".article.card").each(function () {
      const t = $(this).find(".data .category").text().toLowerCase();
      if (cat != t) {
        $(this).addClass("hidden");
      }
    });

    $("#categories li a").removeClass("redtext");
    // $('#categories li a[data-category="' + cat + '"]').addClass("redtext");
    $(this).addClass("redtext");
    // $("#categories li a").each(function () {
    //   const t = $(this).attr("data-category").toLowerCase();
    //   if (cat === t) {
    //     $(this).addClass("redtext");
    //   } else {
    //     $(this).removeClass("redtext");
    //   }
    // });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   [...document.querySelectorAll("#categories li a")].forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       const cat = link.getAttribute("data-category").toLowerCase();
//       document.querySelectorAll(".article.card").forEach((card) => {
//         const t = card.querySelector(".data .category").innerText.toLowerCase();
//         if (cat === t) {
//           card.classList.remove("hidden");
//         } else {
//           card.classList.add("hidden");
//         }
//       });

//       document.querySelectorAll("#categories li a").forEach((item) => {
//         const t = item.getAttribute("data-category").toLowerCase();
//         if (cat === t) {
//           item.classList.add("redtext");
//         } else {
//           item.classList.remove("redtext");
//         }
//       });
//     });
//   });
// });
