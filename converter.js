let request = new XMLHttpRequest();
function ajax(){
let value = document.querySelector('input[name="extract"]').value;
let from = document.querySelector('#from select').value;
let to = document.querySelector("#to select").value;
request.open('POST', "converter.php", true);
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send('value='+ value+'&from='+from+'&to='+to);
request.onload = function(){
    if(request.readyState != 4 || request.status != 200) {
        alert("No data");
    }
    document.querySelector(".converted").innerHTML = request.responseText ;
}}
setInterval(ajax, 100);