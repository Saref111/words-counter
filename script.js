// All explicitly undeclared variables are in global scope from id attribute in HTML

const unitToCountMethodsMap = {
    "words": (text) => text.split(/\s/),
    "characters": (text) => text.replace(/\s/g, "").split(""),
    "letters": (text) => text.split("").filter((it) => it.match(/[a-zA-Z]/)),
    "sentences": (text) => text.replace(/[!?]/g, ".").split(".").filter((it) => it),
    "paragraphs": (text) => text.split("\n"),
    "whitespaces": (text) => text.split("").filter((it) => it.match(/\s/)),
    "all": (text) => text.split("")
};

countButton.addEventListener("click", () => {
    const r = unitToCountMethodsMap[unitToCount.value](textArea.value).filter((it) => it).length;
    result.innerText = r + " " + unitToCount.value;
});


clearButton.addEventListener("click", () => {
    textArea.value = "";
    result.innerText = "-";
});
