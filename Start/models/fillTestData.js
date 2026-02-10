let mongoose = require('mongoose');
Book = mongoose.model('Book');
Author = mongoose.model('Author');

let author_seed = [
	// TODO: 3 - Testdata voor authors maken.

	// Vul hier je testdata voor authors in 
	// In je /models/book.js staat welke velden je nodig hebt.
	// {}, {}, {}
    {"firstname": "John", "lastname": "Doe", "birthdate": new Date('1990-01-01'), "country": "US", "ranking": 5, "books": []},
    {"firstname": "Jane", "lastname": "Smith", "birthdate": new Date('1985-05-15'), "country": "UK", "ranking": 4, "books": []},
    {"firstname": "Alice", "lastname": "Johnson", "birthdate": new Date('1978-09-30'), "country": "CA", "ranking": 3, "books": []}
];

let book_seed = [
	// TODO: 4 - Testdata voor boeken maken.

	// Vul hier je testdata voor boeken in
	// In je /models/book.js staat welke velden je nodig hebt.
	// {}, {}, {}
    {"title": "Book One", "publishDate": new Date('2020-01-01'), "category": "Fiction", "chapters": [{"title": "Chapter 1", "numberOfPages": 10}, {"title": "Chapter 2", "numberOfPages": 15}]},
    {"title": "Book Two", "publishDate": new Date('2019-05-15'), "category": "Non-Fiction", "chapters": [{"title": "Chapter 1", "numberOfPages": 20}, {"title": "Chapter 2", "numberOfPages": 25}]},
    {"title": "Book Three", "publishDate": new Date('2018-09-30'), "category": "Science Fiction", "chapters": [{"title": "Chapter 1", "numberOfPages": 30}, {"title": "Chapter 2", "numberOfPages": 35}]}
];

module.exports = function(){
    let Book = mongoose.model('Book');
    Book.find({}).then(books => {
        if(!books.length){
            console.log('\tNo books found, filling testdata');
            Book.insertMany(book_seed)
                .then(() => console.log('\tFilling book testdata succesfull'))
                .catch(err => console.log('\tFilling book testdata failed', err));
        }
    });

    let Author = mongoose.model('Author');
    Author.find({}).then(authors => {
        if(!authors.length){
            console.log('\tNo authors found, filling testdata');
            Author.insertMany(author_seed)
                .then(() => console.log('\tFilling author testdata succesfull'))
                .catch(err => console.log('\tFilling author testdata failed', err));
        }
    });
}