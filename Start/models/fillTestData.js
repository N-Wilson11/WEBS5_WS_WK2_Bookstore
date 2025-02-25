let mongoose = require('mongoose');
Book = mongoose.model('Book');
Author = mongoose.model('Author');

let author_seed = [
	// TODO: 3 - Testdata voor authors maken.
    {
        firstName: 'J.R.R.',
        lastName: 'Tolkien',
        birthdate: new Date('1892-01-03'),
        country: 'UK',
        ranking: 1,
        books: [] // We vullen dit later in
    },
    {
        firstName: 'George',
        lastName: 'Orwell',
        birthdate: new Date('1903-06-25'),
        country: 'IN',
        ranking: 2,
        books: [] // We vullen dit later in
    },
    {
        firstName: 'Jane',
        lastName: 'Austen',
        birthdate: new Date('1775-12-16'),
        country: 'UK',
        ranking: 3,
        books: [] // We vullen dit later in
    }
];

let book_seed = [
	// TODO: 4 - Testdata voor boeken maken.

	{
        title: 'The Hobbit',
        publishDate: new Date('1937-09-21'),
        category: 'Fantasy',
        chapters: [
            { title: 'An Unexpected Party', numberOfPages: 20 },
            { title: 'Roast Mutton', numberOfPages: 18 },
            { title: 'A Short Rest', numberOfPages: 22 }
        ]
    },
    {
        title: '1984',
        publishDate: new Date('1949-06-08'),
        category: 'Dystopian',
        chapters: [
            { title: 'Chapter 1', numberOfPages: 15 },
            { title: 'Chapter 2', numberOfPages: 18 },
            { title: 'Chapter 3', numberOfPages: 20 }
        ]
    },
    {
        title: 'Pride and Prejudice',
        publishDate: new Date('1813-01-28'),
        category: 'Romance',
        chapters: [
            { title: 'Chapter 1', numberOfPages: 12 },
            { title: 'Chapter 2', numberOfPages: 15 },
            { title: 'Chapter 3', numberOfPages: 18 }
        ]
    }
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