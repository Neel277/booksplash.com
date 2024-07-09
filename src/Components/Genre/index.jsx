import styles from "./styles.module.css";
import Card from "../Rows";

const Genre = ({ genres, filterGenre, setFilterGenre,scrollToCard }) => {
	const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterGenre, input.value];
			setFilterGenre(state);
			scrollToCard();

		} else {
			const state = filterGenre.filter((val) => val !== input.value);
			setFilterGenre(state);
			scrollToCard();
		}
	};

	return (
		<div className={styles.container}>
			<h1 class="w3-bar-item w3-button" style={{fontSize:"18px"}}>Filter By Genre</h1>
			<div className={styles.genre_container}>
				{genres.map((genre) => (
					<div className={styles.genre} key={genre}>
						<input
							className={styles.genre_input}
							type="checkbox"
							value={genre}
							onChange={onChange}
						/>
						<p className={styles.genre_label}>{genre}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Genre;
