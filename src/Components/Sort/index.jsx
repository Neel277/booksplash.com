import styles from "./styles.module.css";

const Sort = ({ sort, setSort, scrollToCard}) => {
	const onSelectChange = ({ currentTarget: input }) => {
		setSort({ sort: input.value, order: sort.order });
		scrollToCard();
	};

	const onArrowChange = () => {
		if (sort.order === "asc") {
			setSort({ sort: sort.sort, order: "desc" });
			scrollToCard();
		} else {
			setSort({ sort: sort.sort, order: "asc" });
			scrollToCard();
		}
	};

	return (
		<div className={styles.container}>
			<p className={styles.sort_by}>Sort By :</p>
			<select
				onChange={onSelectChange}
				className={styles.select}
				defaultValue={sort.sort}
			>
				<option value="year">Year</option>
				<option value="rating">Rating</option>
			</select>
			<button className={styles.arrow_btn} onClick={onArrowChange}>
				<p className={styles.up_arrow}>&uarr;</p>
				<p className={styles.down_arrow}>&darr;</p>
			</button>
		</div>
	);
};

export default Sort;
