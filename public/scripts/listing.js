const output = document.querySelector(".output");
const fileInput = document.querySelector("#inputFiles");

fileInput.addEventListener("change", () => {
    for (const file of fileInput.files) {
        output.innerText += `\n${file.name}`;
    }
});
