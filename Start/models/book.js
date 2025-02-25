var mongoose = require('mongoose');

console.log('Initializing books schema');

var bookSchema = new mongoose.Schema({
    
    title: {type: String, require: true},
    publishDate: {type: Date, require: true, default: Date.now},
    category: {type: String, require: true},
    chapters: [{title: String, numberOfPages: Number}]
});


bookSchema.virtual('totalNumberOfPages').get(function() {
    return this.chapters.reduce((total, chapter) => total + chapter.numberOfPages, 0);
});

mongoose.model('Book', bookSchema);






