//nvm
$("input:checkbox").click(function () {
    var group = "input:checkbox[name='" + $(this).prop("name") + "']";
    $(group).prop("checked", false);
    $(this).prop("checked", true);
});

const butt = document.getElementById("submit-button");
butt.addEventListener('click', submit);
const yTextField = document.getElementsByClassName("y-text-input")[0];
const error = document.getElementById('value-validate-text');

yTextField.addEventListener("input", function (event) {
    const yStr = this.value.replace(",", ".");
    if (!isNaN(yStr)) {
        if (numberIsInInterval(yStr, -5, 5)) {
            error.innerText = "OK"
            error.style.color = "green"
        } else {
            error.innerText = "Not correct value: must be in [-5;5]"
            error.style.color = "red";
        }
    } else {
        error.innerText = "Please enter number only"
        error.style.color = "red";
    }
})

function numberIsInInterval(num, min, max) {
    return min <= num && num <= max;
}

const submit = function (e) {
    e.preventDefault();
    const formData = new FormData(document.querySelector('#coordinates-form'));
    var response =  fetch("php/get_data.php", {
        method: 'GET',
        body: formData
    })
    document.querySelector('#result-table').innerHTML =  response.text();
};
