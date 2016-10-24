var paper = 4.99;
var pencil = 11.49;

var sum = function(a, b) {
  return a + b;
}

var markup = function(x) {
  return x * 1.10;
}

var items = sum(paper, pencil);

console.log(markup(items));
