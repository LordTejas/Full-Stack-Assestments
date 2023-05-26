const mainContainer = document.getElementById('main-container');
const uploadBtn = document.getElementById('upload-btn');
const uploadIcon = document.getElementById('upload-icon');
const umbrellaImage = document.getElementById('umbrella-img');
const umbrellaLogo = document.getElementById('umbrella-logo');
const loaderImage = document.getElementById('loader-img');


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

function showLoader() {

    document.getElementById("loader-img").style.display = "block";
    document.getElementById("umbrella-img").style.display = "none";
    const intitalState = document.getElementById("umbrella-logo").style.display;
    document.getElementById("umbrella-logo").style.display = "none"

    setTimeout(() => {
        document.getElementById("loader-img").style.display = "none";
        document.getElementById("umbrella-img").style.display = "block";
        document.getElementById("umbrella-logo").style.display = intitalState;
    }, 3000);
}

function handleColorChange(e) {
    console.log(e.target.className);

    const theme = {
        "dodgerblue": {
            color: "lightskyblue",
            image: "./assets/Blue umbrella.png",
        },
        "salmon": {
            color: "lightpink",
            image: "./assets/Pink umbrella.png",
        },
        "yellow": {
            color: "lightyellow",
            image: "./assets/Yello umbrella.png",
        }
    };
    

    if (e.target.className === "color-element") {
        showLoader();
        mainContainer.style.backgroundColor = theme[e.target.style.backgroundColor].color;
        uploadBtn.style.backgroundColor = e.target.style.backgroundColor;
        umbrellaImage.src = theme[e.target.style.backgroundColor].image;
    }
}


function handleSubmitFile(e) {

    document.getElementById("loader-img").style.display = "block";
    document.getElementById("umbrella-img").style.display = "none";
    document.getElementById("umbrella-logo").style.display = "none"

    setTimeout(() => {

        const file = e.target.files[0];   
        
        try {

            if (!!file) {
                document.getElementById("upload-btn-text").textContent = file.name;
                document.getElementById("upload-cancel-icon").style.display = "block";

                const imgLogo = document.getElementById("umbrella-logo");
                imgLogo.src = file.name;
                
                // Add Logo on our umbrella
                imgLogo.style.display = "block";
                
            }
        } catch(e) {
            console.log(e);
        } finally {
            document.getElementById("loader-img").style.display = "none";
            document.getElementById("umbrella-img").style.display = "block";
        }
        
    }, 3000);
}

function handleRemoveFile(e) {
    e.stopPropagation();
    loaderImage.style.display = "block";
    umbrellaImage.style.display = "none";
    umbrellaLogo.style.display = "none"

    setTimeout(() => {

        try{
            document.getElementById("upload-btn-text").textContent = "UPLOAD LOGO";
        } catch(e) {
            console.log(e);
        } finally {
            loaderImage.style.display = "none";
            umbrellaImage.style.display = "block";
        }
        
    }, 3000);
}

function init() {

    // Add Color Options to change Umbrella theme
    addColorOptions();

    // Add Event Listener to change Umbrella theme
    document.getElementById("color-options-div").addEventListener("click", handleColorChange);

    uploadIcon.addEventListener("click", function() {
        document.getElementById("file-input").click();
    });

    document.getElementById("file-input").addEventListener('change', handleSubmitFile);
    document.getElementById("upload-cancel-icon").addEventListener('click', handleRemoveFile);

    // Simulate First Button Click by default
    document.getElementById("color-options-div").children[0].click();

}

init();
