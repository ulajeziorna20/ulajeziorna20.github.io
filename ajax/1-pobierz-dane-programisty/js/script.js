let btn = document.getElementById(`download-data`);
console.log(btn);


const getData = () => {


    fetch(`https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php`, {
    
        mode: 'cors',
        method: 'GET', 

    })


        .then(res => res.json())
        .then(data => {
            console.log(data);

            let div = document.createElement(`div`);
            div.id = `programmer-data`;
            console.log(div);

            div.innerText = `Imię: ${data.imie}
            Nazwisko: ${data.nazwisko}
            Zawód: ${data.zawod}
            Firma: ${data.firma}`;

            document.body.appendChild(div);
        
        });


}



btn.addEventListener(`click`, getData);