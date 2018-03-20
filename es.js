/*Il computer sceglie un numero da 1 a 21.
Il compito del giocatore è superarlo, senza “sballare”, cioè andare oltre 21.
Il giocatore deve decidere se chiedere un numero random da 1 a 10 o “fermarsi”
Se il giocatore va oltre 21 ha perso.
Quando si ferma,il programma deve mostrare il punteggio del computer e il punteggio dell’utente e dire chi ha vinto (o se è patta)*/

numCasualeUtente_lista=[]

var numCasuale = Math.floor((Math.random()*21)+1) //computer scegli numero tra 1 e 21;
console.log(numCasuale)

somma=0
do {
  var numCasualeUtente = Math.floor((Math.random()*10)+1)
  numCasualeUtente_lista.push(numCasualeUtente)
  var somma = somma + numCasualeUtente
  console.log(somma)
} while (somma<21);
