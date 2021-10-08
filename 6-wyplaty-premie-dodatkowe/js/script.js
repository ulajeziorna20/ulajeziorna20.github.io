console.log(`działa swietnie`);


let btnOblicz = document.querySelector('#oblicz');
console.log(btnOblicz);

btnOblicz.addEventListener('click', event => {

    // console.log(`klik`);
    let pracownicy = document.querySelectorAll(`[id^="pracownik"]`);
    // console.log(pracownicy);





    for (let pracownik of pracownicy) {
        //    console.log(parseFloat(pracownik.querySelector(`.czas`).value));
        // console.log(parseFloat(pracownik.querySelector(`.stawka`).value));

        let czas = parseFloat(pracownik.querySelector(`.czas`).value);

        let stawka = parseFloat(pracownik.querySelector(`.stawka`).value);

        let wyplata = 0;



        // console.log(wyplata);

        if (czas > 160) {



            // console.log(`nadgodziny`);

            let czasDodatkowy = czas - 160;

            wyplata = (czas * stawka) + (czasDodatkowy * stawka * 2);

        } else {
            wyplata = czas * stawka;


            if (czas < 100) {

                // console.log(`mniej niz 100`);

                pracownik.style.backgroundColor = `red`;
            }

        }



        let spanWyplata = pracownik.querySelector(`span.wyplata`);
        // console.log(spanWyplata);

        spanWyplata.innerText = wyplata;



    }


    let sortedPracownicy = Array.from(pracownicy).sort((a, b) => {
        // console.log(+a.querySelector(`input.czas`).value);
        // console.log(+b.querySelector(`input.czas`).value);

        let aCzas = (+a.querySelector(`input.czas`).value);

        let bCzas = (+b.querySelector(`input.czas`).value);

        return bCzas - aCzas;

    });

    console.log(sortedPracownicy);

    let imieNazwisko1 = sortedPracownicy[0].querySelector(`span.pracownik`).innerText;

    let imieNazwisko2 = sortedPracownicy[1].querySelector(`span.pracownik`).innerText;

    let imieNazwisko3 = sortedPracownicy[2].querySelector(`span.pracownik`).innerText;

    console.log(imieNazwisko2);


    let spanNajlepsiPracownicy = document.getElementById(`najlepsi-pracownicy`);
    console.log(spanNajlepsiPracownicy);

    // spanNajlepsiPracownicy.innerText = `${sortedPracownicy[0].querySelector(`span.pracownik`).innerText}, ${sortedPracownicy[1].querySelector(`span.pracownik`).innerText}, ${sortedPracownicy[2].querySelector(`span.pracownik`).innerText}`; 
    spanNajlepsiPracownicy.innerText = `${imieNazwisko1}, ${imieNazwisko2}, ${imieNazwisko3}`;
    




})






















// let pracownik1 = document.querySelector('#pracownik1');

// let inputsNumber = pracownik1.querySelectorAll(`input[type="number"]`);

// console.log(Math.sqrt(Math.pow(((Math.pow((Math.sqrt(Math.abs(+document.querySelector(`#pracownik1`).querySelectorAll('input[type="number"]')[0].value))), 3)) + Math.E), 4)));



// console.log(pracownik1.querySelectorAll(`input[type="number"]`)[1]);


























// let btnSumUp = document.querySelector('#sumup');
// // console.log(btnSumUp);

// btnSumUp.addEventListener('click', event => {
//     // gdy w selektorze łączę klasy albo id itd to tak jakbym miała klasyczne "i" pomiędzy
//     // let walletsAmounts = document.querySelectorAll('#container .wallet .amount');


//     let walletsAmounts = document.querySelectorAll('#container > .wallet > .amount');

//     // console.log(walletsAmounts);

//     let sumOfOuter = 0;



//     // gdy robię zmienną lokalną pętla za kązdym razem nie zapisuje i zeruje wartość powstałą po dodaniu liczby , gdy robię zmienną globalną wartość jest zapisana w pamięci i do nowej iteracji jest brana nowo powstająca wartość.
//     for (let amount of walletsAmounts) {

//         // let sumOfInner = 0; 

//         // console.log(parseFloat(amount.innerText));

//         sumOfOuter += parseFloat(amount.innerText);
//         // sumOfInner += 108;


//         // console.log(`sumOfInner: ${sumOfInner}`);
//         // console.log(`sumOfOuter: ${sumOfOuter}`);




//     }


//     console.log(`sumOfOuter: ${sumOfOuter}`);


//     let spnSumOfWallets = document.querySelectorAll('.sum');
//     // let spnSumOfWallets = document.getElementsByClassName('sum');
//     // let spnSumOfWallets = document.getElementsByTagName('span');

//     console.log(spnSumOfWallets);


//     // 







let zmienna1 = Math.pow(4, 6);
let imieINazwisko = `Ula Jeziorna`;
let mojWiek = 20;;
let pierwiastek = Math.sqrt(4);
let hobby = `programowanie`;


// console.log(`${imieINazwisko} ma ${mojWiek} lat potęguje i wychodzi ${zmienna1}  pierwiastkuje ${pierwiastek} i lubi ${hobby}`);

// console.log(imieINazwisko + ' ' + 'ma' + ' ' + mojWiek + 'lat potęguje i wychodzi' + ' ' + zmienna1 + ' ' + 'pierwiastkuje' + ' ' + pierwiastek + ' ' + 'i lubi' + ' ' + hobby);

// console.log(imieINazwisko + ' ma ' + mojWiek + ' lat potęguje i wychodzi ' + zmienna1 + ' pierwiastkuje '+ pierwiastek  + ' i lubi ' + hobby);

// console.log(imieINazwisko + " ma " + mojWiek + " lat potęguje i wychodzi " + zmienna1 + " pierwiastkuje "+ pierwiastek  + " i lubi " + hobby);

// console.log(imieINazwisko + " powiedziała: \"lubie programowanie\"");
// console.log(imieINazwisko + ' powiedziała: "lubie programowanie"');
console.log(`${imieINazwisko} powiedziała: "lubie programowanie"`);


// let bigmouth = 'I\'ve got no right to take my place...';
// let bigmouth = "I've got no right to take my place...";
// let bigmouth = `I've got no right to take my place...`;

// bigmouth;
// console.log(bigmouth);


// console.log('I\'ve got an answer ' + 'and we\'are friends');
// console.log("I've got an answer and we'are friends");
// console.log(`I've got an answer and we'are friends`);
// console.log(`I\`ve got an \\ answer \n and we\`are friends`);


let text = `I\`ve got an \\ answer \n and we\`are friends`;

let newText = text.replace("answer", "idea");
let newText2 = newText.replaceAll("`", "");
console.log(newText2);




