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




    }])


    .controller('footerList', function footerList($scope) {

        $scope.footers = [{

                title: 'Lorem ipsum',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec cursus nisi. Quisque aliquam convallis justo quis suscipit. Cras feugiat velit et urna interdum vulputate. Proin hendrerit, enim sed pellentesque sodales, est ipsum pretium metus, ac congue lacus arcu faucibus odio. Donec mi mauris, vulputate ut eros sed, volutpat facilisis orci. Sed mollis, mauris a pulvinar euismod, risus neque volutpat metus, id vestibulum ipsum dolor ut nunc. Etiam porttitor accumsan elit, ac imperdiet sem tincidunt ac. Proin rhoncus nisl non urna ornare venenatis. Nulla vel quam risus. Vestibulum semper justo vitae dui hendrerit, non fringilla lacus congue. Cras nec urna eu urna scelerisque imperdiet. Suspendisse non pharetra odio. Maecenas rhoncus sagittis ultrices. Nulla id ligula at ipsum placerat tincidunt eu et turpis.'
},
            {
                title: 'Lorem ipsum',
                content: 'Maecenas laoreet diam semper risus finibus consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eros diam, ultrices pellentesque felis ut, vestibulum maximus sapien. Nullam nec quam a ex condimentum ultricies non eget metus. Sed dignissim enim sit amet dolor ullamcorper, eu hendrerit odio tempor. Mauris non sem tincidunt, dapibus velit a, tempor nisl. Mauris nec quam ac libero tincidunt imperdiet nec sit amet massa. Ut fringilla eros nec tristique rhoncus. Nam tincidunt neque non gravida gravida.'
},
            {
                title: 'Lorem ipsum',
                content: 'Curabitur elementum non justo non sagittis. Etiam semper nulla vitae volutpat vehicula. Quisque ultricies ipsum et arcu efficitur, mattis ullamcorper tortor venenatis. Aenean in nibh turpis. Suspendisse vestibulum luctus vehicula. Nunc in luctus lorem. Nam ullamcorper fringilla aliquet. Ut quis rhoncus magna, quis fringilla quam. Sed tincidunt enim erat, vel lacinia ligula commodo et. Sed nec lectus non metus pretium aliquam. Praesent lobortis, odio in posuere consectetur, tortor ex ultricies urna, ut vulputate urna dui eget magna. Sed laoreet purus at ante rhoncus, sed aliquam lacus maximus. Cras id ipsum eleifend, convallis ligula sit amet, vehicula sapien. Donec purus velit, vulputate in ullamcorper non, ornare et nisi. Etiam fermentum in ligula sit amet auctor.'
}]




    });
