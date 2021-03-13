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
