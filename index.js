const THEMES = {
  light: {
    name: "light",
    value: ` <i class="fas fa-moon"></i>`,
  },
  dark: {
    name: "dark",
    value: `<i class="fas fa-sun"></i>`,
  },
};
const INITIAL_EDITOR_TEXT = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <h2>Hello World !</h2>
  </body>
</html>
`;
const FILE_NAME = "download.txt";
let  theme = "light";
const editor = ace.edit("editor");
const code = document.getElementById("editor");
const runButton = document.getElementById("run");
const output = document.getElementById("output");
const themeButton = document.getElementById("theme");
const downloadCode = document.getElementById("download-code");

// initial setup
editor.setTheme("ace/theme/chrome");
editor.session.setMode("ace/mode/html");
editor.setValue(INITIAL_EDITOR_TEXT);
runButton.addEventListener("click", runCode);
themeButton.addEventListener("click", changeTheme);
downloadCode.addEventListener("click", downloadCodeFile);


function changeTheme() {
   const body = document.body;
  if (theme === THEMES.light.name) {
    theme = THEMES.dark.name;
    themeButton.innerHTML = THEMES.dark.value;
    editor.setTheme("ace/theme/monokai");
    body.classList.replace('light', 'dark');
  } else {
    theme = THEMES.light.name;
    themeButton.innerHTML = THEMES.light.value;
    editor.setTheme("ace/theme/chrome");
    body.classList.replace('dark','light');
  }
  
}


function runCode() {
  const iframe = output.contentWindow.document;
  iframe.open();
  iframe.writeln(editor.getValue());
  iframe.close();
}

function downloadCodeFile() {
  downloadToFile(editor.getValue(), FILE_NAME, "text/html");
}

function downloadToFile(content, filename, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });

  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}
