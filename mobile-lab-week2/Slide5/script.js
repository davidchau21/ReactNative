const urlBacon = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
(function() {
    $.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            alert("no good");
        });
})()