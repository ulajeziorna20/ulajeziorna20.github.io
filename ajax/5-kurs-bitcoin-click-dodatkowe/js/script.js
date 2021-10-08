// zadanie.1. time interwal pobieraj kursy co 5 s. to samo zadanie co z przyciskiem ta sama funkcja.  
// zadanie.2. 30 min na przeszukanie ofert pracy dla juniorów , staże, programiści FrontEndowi.(Warszwa, Kraków)



let btnExchangeBitcoin = $(`#get-exchange-bitcoin`);
// console.log(btnExchangeBitcoin);

let spanLastTradePrice = $(`#span_LastTradePrice`);
console.log(spanLastTradePrice);

// console.log($(spanLastTradePrice).text().length);


let lastPrice = -1;
console.log(lastPrice);






// const saveAndClear = () => {

//     if ($(spanLastTradePrice).text().length === 0) {

//         lastPrice = $(spanLastTradePrice).text();
//         console.log(lastPrice);

//         $(spanLastTradePrice) = "";

//     } else {
//         return;
//     }

//     }


// 1. ustawiasz zmienną gloalną last trade o war 0
// 1. jesli span jest pusty pobierasz do spana last trade i zniczym go nie porównuje 
// 2. drugie klik jesli w span jest tekst przypisz jego wartosc do atrybutu , pobierz nowe last trade i porównaj  



// const long = () => {
//     console.log($(spanLastTradePrice).text().length);
//     console.log($(spanLastTradePrice).text());
// }







// Rozwiązanie zadania jest odkomentowane :)
// ==============================================

$(btnExchangeBitcoin).click(function () {



$.getJSON('https://api.blockchain.com/v3/exchange/tickers', {

    mode: 'cors',
    method: 'GET',

})
    .done(function (data) {
        // console.log(data);
        // console.log(data[96]);
        // console.log(data[96].last_trade_price);


        // console.log(lastPrice);


        if (lastPrice === -1) {

            // console.log(`pierwsze pobranie`);

            lastPrice = data[96].last_trade_price;
            // console.log(lastPrice);

            $(spanLastTradePrice).append(data[96].last_trade_price);
            // console.log(spanLastTradePrice);

        } else {

            if (lastPrice < data[96].last_trade_price) {
                // console.log(`kurs jest większy strzałka do góry na zielono`);

                $(`#arrowUp`).addClass(`display-block`);


            } else if (lastPrice === data[96].last_trade_price) {

                // console.log(`kurs się nie zmienił strzałka pozioma na niebiesko`);

                $(`#arrowSame`).addClass(`display-block`);


            } else {
                // console.log(`kurs jest mniejszy strzałka do do dołu na czerwono`);

                $(`#arrowDown`).addClass(`display-block`);

            }
        }


        lastPrice = data[96].last_trade_price;


    });


})









// To wersja ta sama tylko z timerem.

// =========================================



// if($('span').text().length == 0){
//     console.log('No Text');
//   }
//   else{
//     console.log('Has Text');
// //   }


// let lastTradePrice = data[96].last_trade_price;
// // console.log(lastTradePrice);

// $(spanLastTradePrice).append(lastTradePrice);
// // $(spanPrice24).append(price24); 







// setInterval(() => {

//     $.getJSON('https://api.blockchain.com/v3/exchange/tickers', {

//         mode: 'cors',
//         method: 'GET',

//     })
//         .done(function (data) {
//             console.log(data);
//             // console.log(data[96]);
//             console.log(data[96].last_trade_price);


//             console.log(lastPrice);


//             if (lastPrice === -1) {

//                 console.log(`pierwsze pobranie`);

//                 lastPrice = data[96].last_trade_price;
//                 console.log(lastPrice);

//                 $(spanLastTradePrice).append(data[96].last_trade_price);
//                 console.log(spanLastTradePrice);

//             } else {

//                 if (lastPrice < data[96].last_trade_price) {
//                     console.log(`kurs jest większy strzałka do góry na zielono`);

//                     $(`#arrowUp`).addClass(`display-block`);


//                 } else if (lastPrice === data[96].last_trade_price) {

//                     console.log(`kurs się nie zmienił strzałka pozioma na niebiesko`);

//                     $(`#arrowSame`).addClass(`display-block`);


//                 } else {
//                     console.log(`kurs jest mniejszy strzałka do do dołu na czerwono`);

//                     $(`#arrowDown`).addClass(`display-block`);

//                 }
//             }


//             lastPrice = data[96].last_trade_price;


//         });



// }, 10000);