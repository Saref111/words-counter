// All explicitly undeclared variables are in global scope from id attribute in HTML

const unitToCountMethodsMap = {
    'words': (text) => text.split(" "),
    'characters': (text) => text.split(""),
    'letters': (text) => text.split("").filter((it) => it.match(/[a-zA-Z]/)),
    'sentences': (text) => text.split("."),
    'paragraphs': (text) => text.split("\n"),
    'whitespaces': (text) => text.split("").filter((it) => it.match(/\s/)),
};

countButton.addEventListener('click', () => {
    const r = unitToCountMethodsMap[unitToCount.value](textArea.value).filter((it) => it).length;
    result.innerText = r + " " + unitToCount.value;
});
