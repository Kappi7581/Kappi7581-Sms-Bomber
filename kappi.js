const rl = require('readline-sync');
const colors = require('colors');
const title = require('./kappi/kappi1.js');
const fastBomber = require('./kappi/kappi2.js');

title('Kappi7581 Sms Bombere Hosgeldiniz');

let telefon = rl.question('Telefon Numarasi Giriniz +90: ' .green);
if (telefon.length != 10) {
    console.log('Telefon Numarasi 10 Haneli Olmalidir. Ex: 5401234521'.red);
    process.exit(1);
}
title('Numara: ' + telefon);

let miktar = rl.question("Kac Adet SMS Gondermek Istiyorsunuz: ".green);
if(isNaN(miktar)) return console.log('Lutfen Bir Rakam Giriniz'.red) && process.exit(1);
if (miktar.length == 0) {
    console.log('Miktar Giriniz'.red);
    process.exit(1);
}
title(`Telefon: ${telefon} - Miktar: ${miktar}`);

console.log('SMS Gonderiliyor... By Kappi7581'.rainbow);

fastBomber(telefon, miktar);
