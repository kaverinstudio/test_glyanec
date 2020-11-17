$(document).ready(function () {
    if(YMaps.location){
        $("#city").val(YMaps.location.city)
            let sity = document.reg.city.value;
            let xmlRequest = new XMLHttpRequest();
            xmlRequest.open("GET", "https://search.maps.sputnik.ru/search?q=" + sity);
            xmlRequest.send();
            xmlRequest.onload = function () {
                let i = JSON.parse(xmlRequest.responseText);
                console.log(i)
                console.log(i["result"]["0"]["position"]["lat"]);
                console.log(i["result"]["0"]["position"]["lon"]);
                let Lat = i["result"]["0"]["position"]["lat"];
                let Lon = i["result"]["0"]["position"]["lon"];
                DG.then(function () {
                        map = DG.map('map', {
                        center: [Lat, Lon],
                        zoom: 13,
                    });

                })

            }

        }
})
// function Search() {
//     console.log("click")
//     var map = "";
//     let sity = document.reg.city.value;
//     let xmlRequest = new XMLHttpRequest();
//     xmlRequest.open("GET", "http://search.maps.sputnik.ru/search?q=" + sity);
//     xmlRequest.send();
//     xmlRequest.onload = function () {
//         let i = JSON.parse(xmlRequest.responseText);
//         console.log(i)
//         console.log(i["result"]["0"]["position"]["lat"]);
//         console.log(i["result"]["0"]["position"]["lon"]);
//          let Lat = i["result"]["0"]["position"]["lat"];
//          let Lon = i["result"]["0"]["position"]["lon"];
//         DG.then(function () {
//              map = DG.map('map', {
//                 center: [Lat, Lon],
//                 zoom: 13,
//             });
//
//         })
//
//     }
// }



