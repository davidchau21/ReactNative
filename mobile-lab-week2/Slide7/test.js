//Get all users
var url = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
//var url = 'https://jsonplaceholder.typicode.com/todos';
var xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);