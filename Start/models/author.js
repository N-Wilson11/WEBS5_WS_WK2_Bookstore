var mongoose = require('mongoose');

console.log('Initializing author schema');

var authorSchema = new mongoose.Schema({
    
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    birthdate: {type: Date, require: true, default: Date.now},
    country: {type: String, default: 'NL'},
    ranking: {type: Number, min: 1},
    books: [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}]
    
});

/*
    TODO: 7 - Projecting:
    - fullname is een property die opgehaald wordt
    - age is een property die opgehaald wordt
    - numberOfBooks is een property die opgehaald wordt
*/

mongoose.model('Author', authorSchema);