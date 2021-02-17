const Alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

class VigenereCipheringMachine {
  constructor (direction = true) {
    this.direction = direction;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Need more parameters!'); 
    message = message.toUpperCase();
    key = key.toUpperCase();

    let counter = 0;
    let result = '';   

    for (let i = 0; i < message.length; i++) {
          if (message.codePointAt(i) >= 65 && message.codePointAt(i) <= 90) {
              let index = (message.codePointAt(i) - 65 + key.codePointAt(counter) - 65) % 26;  
              result += Alphabet[index];
              (counter === key.length - 1) ? counter = 0 : counter++; 
          } 
          else result += message[i];
      }
      return this.direction? result : result.split('').reverse().join();    
  }    
  decrypt(message, key) {
    if (!message || !key) throw new Error('Need more parameters!'); 
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    let counter = 0;
    let result = '';   

    for (let i = 0; i < message.length; i++) {
          if (message.codePointAt(i) >= 65 && message.codePointAt(i) <= 90) {
              let index = (message.codePointAt(i) + 26 - key.codePointAt(counter)) % 26;  
              result += Alphabet[index];
              (counter === key.length - 1) ? counter = 0 : counter++; 
          } 
          else result += message[i];
      }
      return this.direction ? result : result.split('').reverse().join('');   
  }
}

module.exports = VigenereCipheringMachine;
