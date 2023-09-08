let divs = ["project1", "project2", "project3", "project4"];
let visibileDivId = null;
function toggleVisibility(divId) {
    if (visibileDivId === divId) {
        visibileDivId = null;
    } else {
        visibileDivId = divId
    }
    hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
    let i, divId, div;
    for (i=0; i < divs.length; i++){
        divId = divs[i];
        div = document.getElementById(divId);
        if (visibileDivId === divId) {
            div.style.display ="block"
            
        } else {
            div.style.display = "none"
        }
    }
}