var inquirer = require('inquirer');

var Story = function(adjective, noun, verb) {
  this.adjective = adjective,
  this.noun = noun,
  this.verb = verb,
  this.story = "On a " + this.adjective + " day, " + this.noun + " went out in search of something to cure the unbearable boredom being felt. Instead, " + this.noun +  " " + this.verb + " and broke his leg. Now he's confined to the couch while watching reruns of the Maury Povich show. Shame.";
}

var adjectives = [];
var nouns = [];
var verbs = [];

var createStory = function() {

  console.log("New Story!");

  inquirer.prompt([{
      name: "adjective",
      message: "An adjective please: "
    }, {
      name: "noun",
      message: "A noun please: "
    }, {
      name: "verb",
      message: "A verb please: "
    }]).then(function(answers) {

      var story = new Story(answers.adjective, answers.noun, answers.verb);

      console.log(story.story);

    })

}

createStory();
