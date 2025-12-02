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

// programma che stampa tutti i numeri da 1 a 100
// ciclo
for (let i = 1; i < 100; i++){
    
    if (i % 3 === 0) {
        console.log("fizz");
    } else if(i % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(i);
    }
    
}
// al posto dei multipli di 3 (3,6,9,12...) deve stampare "fizz" al posto dei numeri

// al posto dei multipli di 5 (5,10,15,20) deve stampare "buzz" al posto dei numeri

// if per i multipli sia di 3 che di 5 (15,30,45) (da usare and credo) deve stampare "fizzbuzz"