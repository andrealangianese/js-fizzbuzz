// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"s

// debug

console.log("ciao");

const mialista = document.getElementById("lista-numeri");
console.log(mialista);
// programma che stampa tutti i numeri da 1 a 100
// ciclo
for (let i = 1; i < 101; i++) {
    // if per i multipli sia di 3 che di 5 (15,30,45) (da usare and credo) deve stampare "fizzbuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("ciao bella questo è un multiplo sia di 3 che di 5");
        mialista.innerHTML += `<li> ${i} questi sono i più fighi</li>`
    }
    // al posto dei multipli di 3 (3,6,9,12...) deve stampare "fizz" al posto dei numeri
    else if (i % 3 === 0) {
        console.log("fizz");
        mialista.innerHTML += `<li>${i} quest'altri li chiamiamo ${"fizz"} e sarebbero i multipli di 3</li>`
    } // al posto dei multipli di 5 (5,10,15,20) deve stampare "buzz" al posto dei numeri
    else if (i % 5 === 0) {
        console.log("buzz");
        mialista.innerHTML += `<li>${i} questi sono i numeri ${"buzz"}, ossia i multipli di 5 </li>`
    } //per stampare gli altri numeri 
    else {
        console.log(i);
        mialista.innerHTML = mialista.innerHTML + `<li>${i} Questi sono i numeri non divisibili per 3 nè per 5</li>`


        
    }

}



