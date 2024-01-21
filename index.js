// BoardMember constructor
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
}

// Add methods to BoardMember's prototype
BoardMember.prototype.veto = function() {
    return "No, I must disagree";
}

BoardMember.prototype.approve = function() {
    return "You can do that!";
}

BoardMember.prototype.doCharity = function() {
    return "I like to help people.";
}

BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
}

BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
}

// Creating a new instance
let myBoardMember = new BoardMember('Brian Kipkirui', 'Nairobi', 'Developer');

// Using the methods
console.log(myBoardMember.sayHi()); 
