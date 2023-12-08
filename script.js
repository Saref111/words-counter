// All explicitly undeclared variables are in global scope from id attribute in HTML

const unitToCountMethodsMap = {
    'words': (text) => text.split(" ").filter((it) => it),
    'characters': (text) => text.split("").filter((it) => it),
    'letters': (text) => text.split("").filter((it) => it).filter((it) => it.match(/[a-zA-Z]/)),
    'sentences': (text) => text.split(".").filter((it) => it),
    'paragraphs': (text) => text.split("\n").filter((it) => it),
};

countButton.addEventListener('click', () => {
    console.log(unitToCount.value);
    const r = unitToCountMethodsMap[unitToCount.value](textArea.value).length;
      result.innerText = r + " " + unitToCount.value;
});
