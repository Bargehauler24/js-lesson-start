const card = '2342834593458353';
console.log(card.slice(-4).padStart(16, '*'));

let str = 'How are you?';
str = str.padStart(15, '*');
console.log(str);