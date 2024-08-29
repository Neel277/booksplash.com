const Book = require("./prints");
const router = require("express").Router();
// const Book = require("../models/Book"); 
// const books = require("../config_data/mo.json");

router.get("/books", (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 6;
        const search = req.query.search || "";
        let sort = req.query.sort || "rating";
        let genre = req.query.genre || "All";
        let minYear = parseInt(req.query.minYear) || 0;
        let maxYear = parseInt(req.query.maxYear) || new Date().getFullYear();
        let minRating = parseFloat(req.query.minRating) || 0;
        let maxRating = parseFloat(req.query.maxRating) || 10;

        const genreOptions = [
            "Action", "Romance", "Fantasy", "Drama", "Crime", 
            "Adventure", "Thriller", "Sci-fi", "Music", "Family", "Horror"
        ];

        genre = genre === "All" ? genreOptions : req.query.genre.split(",");

        // Filter by search, genre, year, and rating
        let filteredBooks = Book.filter(book => {
            const bookGenres = book.genre || [];
            const genreMatch = genre.some(g => bookGenres.includes(g));
            const searchMatch = book.name.toLowerCase().includes(search.toLowerCase());
            const yearMatch = parseInt(book.year) >= minYear && parseInt(book.year) <= maxYear;
            const ratingMatch = parseFloat(book.rating) >= minRating && parseFloat(book.rating) <= maxRating;

            return genreMatch && searchMatch && yearMatch && ratingMatch;
        });

        // Sort the books
        sort = sort.split(",");
        const sortKey = sort[0];
        // const sortOrder = sort[1] === "asc" ? -1 : 1;

        filteredBooks = filteredBooks.sort((a, b) => {
            if (sortKey === "rating") {
                return (parseFloat(b.rating) - parseFloat(a.rating)) ;
            } else if (sortKey === "year") {
                return (parseInt(a.year) - parseInt(b.year));
            } else {
                return a.name.localeCompare(b.name);
            }
        });

        // Pagination
        const paginatedBooks = filteredBooks.slice(page * limit, (page + 1) * limit);

        // Response
        const response = {
            error: false,
            total: filteredBooks.length,
            page: page + 1,
            limit,
            genres: genreOptions,
            books: paginatedBooks,
        };

        res.status(200).json(response);
    } catch (err) {
        console.error("Error processing the request:", err);
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

// router.get("/movies/:id", async (req,res) => {
// 	try {
//           const book = Movie.find((movie) => movie._id === req.params.id);
// 	}
     
// 	catch(e) {
// 		res.json({ error: true, message: "Couldn't Load Books ! Try again." });
// 	}
	
// });


// const insertBooks = async () => {
//     try {
//         const docs = await Book.insertMany(books);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertBooks()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))

module.exports = router;
