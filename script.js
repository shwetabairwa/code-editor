function run() {
  let htmlCode = document.getElementById("code-html");
  let cssCode = document.getElementById("code-css");
  let jscode = document.getElementById("code-js");
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML =
    htmlCode.value + "<style>" + cssCode.value + "</style>";
  output.contentWindow.eval(jscode.value);
}
