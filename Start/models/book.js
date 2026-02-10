var mongoose = require('mongoose');

console.log('Initializing books schema');

var bookSchema = new mongoose.Schema({
    /*
    TODO: 2 - Schema books vullen
    - Title: Verplicht, String
    - PublishDate: Verplicht, Date, voor vandaag
    - Category: Verplicht, String
    - Chapters: Array van JSNON { title, numberOfPages }
    */
   title: {type: String, required: true },
   publishDate: { type: Date, required: true, validate: {
        validator: function(value) {
            return value < new Date();
        },
        message: 'Publish date must be in the past'
    }},
    category: { type: String, required: true },
    chapters: [{
        title: { type: String, required: true },
        numberOfPages: { type: Number, required: true, min: 1 }
    }]
});

/*
TODO: 5 - Virtual property totalNumberOfPages, opgebouwd uit numberOfPages van chapters)
- De benodigde extra validation
- De benodigde query methods
- De benodigde instance methods
*/
 var totalNumberOfPages = bookSchema.virtual('totalNumberOfPages');
 totalNumberOfPages.get(function() {
     return this.chapters.reduce((total, chapter) => total + chapter.numberOfPages, 0);
 });

mongoose.model('Book', bookSchema);




