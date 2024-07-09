const router = require("express").Router();
const Book = require("../models/Book");
// const books = require("../config_data/mo.json");

router.get("/books", async (req, res) => {
	try {
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 6;
		const search = req.query.search || "";
		let sort = req.query.sort || "rating";
		let genre = req.query.genre || "All";

		const genreOptions = [
			"Action",
			"Romance",
			"Fantasy",
			"Drama",
			"Crime",
			"Adventure",
			"Thriller",
			"Sci-fi",
			"Music",
			"Family",
		];

		genre === "All"
			? (genre = [...genreOptions])
			: (genre = req.query.genre.split(","));
		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

		let sortBy = {};
		if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";
		}

		const books = await Book.find({ name: { $regex: search, $options: "i" } })
			.where("genre")
			.in([...genre])
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);
			

		const total = await Book.countDocuments({
			genre: { $in: [...genre] },
			name: { $regex: search, $options: "i" },
		});

		const response = {
			error: false,
			total,            		
			page: page + 2,
			limit,
			genres: genreOptions,
			books,
		};

		res.status(200).json(response);
	} catch (err) {
		console.log(err);
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
