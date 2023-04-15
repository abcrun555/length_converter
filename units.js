let units = [
    'cm',
    'ft',
    'in',
    'km',
    'm',
    'mi',
    'mm',
    'yd'
];

let options = '<select class="form-select">';

units.forEach(function (unit) {

    options = options + '<option>' + unit + '</option>';
});
options = options + '</select>';

document.querySelector("#from").innerHTML = options;
document.querySelector("#to").innerHTML = options;
