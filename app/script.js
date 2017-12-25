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




// float-label complementar
let inputsNew = document.querySelectorAll(".inputNew")

for (let i = 0; i < inputsNew.length; i++) {

    let label = null

    if (inputsNew[i].type == "email") {
        label = document.querySelector("." + inputsNew[i].classList[1] + "~" + "label")


        inputsNew[i].addEventListener("keyup", function () {
            subirLabel(label, inputsNew[i])
        })


    } else if (inputsNew[i].type == "password") {
        label = document.querySelector("." + inputsNew[i].classList[1] + "~" + "label")


        inputsNew[i].addEventListener("keyup", function () {
            subirLabel(label, inputsNew[i])
        })


    }



}

function subirLabel(label, input) {


    if (input.value != null && input.value != undefined && input.value != "") {

        label.classList.add("labelUp")


    } else if (input.value == "") {
        label.classList.remove("labelUp")

    }

}



// form -

angular.module('myApp', [])
    .controller('formulario', ['$scope', function ($scope) {
        $scope.master = {};



        $scope.update = function (user) {
            if (!$scope.form1.$valid) {
                return
            }


            $scope.master = angular.copy(user);

            console.log($scope.master)
        };

        $scope.reset = function () {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
    }]);
