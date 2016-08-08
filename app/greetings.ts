class Greeter {

  constructor (public message: string) {}

  greet() {
    return "Hello, " + this.message;
  }
}

var greeters: Greeter[] = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);

for(var greeter of greeters) {
  console.log(greeter.greet());
  // alert(greeter.greet());
}
//
// for(var index in greeters) {
//   console.log(index);
// }
//
// for(var props in greeters[0]) {
//   console.log(props);
// }
