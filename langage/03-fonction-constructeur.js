// function Contact(prenom) {
//   this.prenom = prenom;
//   this.hello = this.hello.bind(this);
// }

// Contact.prototype.hello = function() {
//   console.log('Hello ' + this.prenom)
// };

class Contact {
  constructor(prenom) {
    // if (prenom && prenom.length > 3) {
      this.prenom = prenom;
    // }
    this.hello = this.hello.bind(this);
  }
  hello() {
    console.log('Hello ' + this.prenom);
  }
  helloAsync() {
    setTimeout(this.hello, 1000);
  }
}

const romain = new Contact('Romain');
const jean = new Contact('Jean');
// delete romain.prenom
romain.helloAsync(); // Hello Romain
