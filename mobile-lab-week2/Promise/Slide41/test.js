// function
function httpGetAsync(Url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200)
    callback(xmlHttp);
 };
    xmlHttp.open('GET', Url, true);
    xmlHttp.send(null);
 }
// callback hell
httpGetAsync('https://picsum.photos/200/300', (data) => {
    console.log('1', data);
    document.getElementById('img_1').setAttribute('src', data.responseURL);

    httpGetAsync('https://picsum.photos/200/300', (data) => {
        console.log('2', data);
        document.getElementById('img_2').setAttribute('src', data.responseURL);

        httpGetAsync('https://picsum.photos/200/300', (data) => {
            console.log('3', data);
            document.getElementById('img_3').setAttribute('src', data.responseURL);
        });
    });
});
// make promise
const myPromise1 = new Promise(function(relsolve, reject){
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});
//  const myPromise2 = new Promise(function(relsolve, reject){
//    httpGetAsync('https://picsum.photos/200/300', relsolve);
//  });
// const myPromise3 = new Promise(function(relsolve, reject){
//   httpGetAsync('https://picsum.photos/200/300', relsolve);
//  });
 // run promise
 myPromise1
            .then((data)=>{
                document.getElementById('img_1').setAttribute('src', data.responseURL);
                return myPromise2;})
            .then((data)=>{
                document.getElementById('img_2').setAttribute('src', data.responseURL);
                return myPromise3;})
            .then(
                (data)=>{
                document.getElementById('img_3').setAttribute('src', data.responseURL);
                })

  
//async await
const curentPromise = new Promise(function(relsolve, reject){
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});
const myPromise2 = new Promise(function(relsolve, reject){
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});
const myPromise3 = new Promise(function(relsolve, reject){
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});

