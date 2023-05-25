function createColorElement(color) {
    let colorElement = document.createElement("div");
    colorElement.className = "color-element";
    colorElement.style.backgroundColor = color;
    return colorElement;
}

function addColorOptions() {
    let options = ["dodgerblue", "salmon", "yellow"];

    const colorOptionsDiv = document.getElementById("color-options-div");

    options.forEach((color) => {
        const colorElement = createColorElement(color);

        colorOptionsDiv.appendChild(colorElement);
    });

}

function handleColorChange(e) {
    console.log(e.target.className);

    const backgroundColors = {
        "dodgerblue": "lightskyblue",
        "salmon": "lightpink",
        "yellow": "lightyellow"
    }

    if (e.target.className === "color-element") {
        document.getElementById("main-container").style.backgroundColor = backgroundColors[e.target.style.backgroundColor];
        document.getElementById("upload-btn").style.backgroundColor = e.target.style.backgroundColor;
    }
}

function handleUploadFile() {

    document.getElementById("upload-btn").addEventListener("click", function() {
        document.getElementById("file-input").click();
    });
    

    const imgLogo = document.getElementById("img");
    
    // imgLogo.src = URL.document;

    // Add Logo on our umbrella
    // document.getElementById("img-show").appendChild(imgLogo);
}

function handleRemoveFile() {

}

function init() {

    // Add Color Options to change Umbrella theme
    addColorOptions();

    // Add Event Listener to change Umbrella theme
    document.getElementById("color-options-div").addEventListener("click", handleColorChange);

    document.getElementById("upload-btn").addEventListener('click', handleUploadFile);

    // Simulate First Button Click by default
    document.getElementById("color-options-div").children[0].click();

}

init();