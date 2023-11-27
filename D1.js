/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* 1) Stringa: Una stringa comprende una successione di caratteri limitati da apostrofi, virgole singole, virgolette ecc.. Esempio:
let StringaDiProva = 'Marco'
La stringa sarà 'Marco' e contiene genericamente caratteri testuali.
2) Numero: Un datatype numero è per l'appunto un valore numerico, non racchiuso tra virgolette. Esempio:
let NumeroDiProva = 7 
3) Valore Booleano: Un valore Booleano indica una scelta, si traduce nel modo più banale con un vero/falso e certifica la veridicità di una tra due possibilità. Esempio:
console.log(num1 < num2) = false
4) Null: è un datatype indefinito, quindi un datatype al quale non è stato ancora assegnato alcun valore.
console.log(nothing) */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Roberta'
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 5
let num2 = 10
let num3 = num1 + num2
console.log(num3)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Stira'
console.log (myName)
const secondoNome = 'Andrea'

/*secondoNome = 'Giulia'
console.log (secondoNome)
Il server si blocca per l'errore prodotto.*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4 - x
console.log(y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'

if (name1 !== name2)
console.log('vero');
else
  console.log('falso');

if (name1 === name2.toLowerCase()) {
  alert('vero')
} else {
  alert('falso')
}