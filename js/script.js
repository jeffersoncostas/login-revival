// always conected

let aConected = document.querySelector("#a-conected")
let checkboxAlways = document.querySelector("#checkbox-always")
aConected.addEventListener("click", marcarBox)

function marcarBox() {

    if (checkboxAlways.checked) {
        checkboxAlways.checked = false


    } else {
        checkboxAlways.checked = true

    }
}
