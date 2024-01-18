$.ajax({
        url: "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8",
        beforeSend: function(xhr) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
    })
    .done(function(data) {
        if (console && console.log) {
            console.log("Sample of data:", data.slice(0, 100));
        }
    });