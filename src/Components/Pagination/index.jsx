import React from 'react';
import styles from "./styles.module.css";

const Pagination = ({ page, total, limit, setPage }) => {
	const totalPages = Math.ceil(total / limit);
  
	const onClick = (newPage) => {
	  setPage(newPage + 1);
	};
  
	const renderPageButtons = () => {
	  if (totalPages <= 1) {
		return null;
	  }
  
	  const buttons = [];
  
	  // Display a maximum of, for example, 5 pages around the current page
	  const maxButtons = 5;
	  let startPage = Math.max(1, page - Math.floor(maxButtons / 2));
  
	  // Adjust startPage if it's too close to the end
	  if (startPage + maxButtons - 1 > totalPages) {
		startPage = Math.max(1, totalPages - maxButtons + 1);
	  }
  
	  // Render pagination buttons
	  for (let i = startPage; i < startPage + maxButtons && i <= totalPages; i++) {
		buttons.push(
		  <button
			onClick={() => onClick(i - 1)}
			className={
			  page === i ? `${styles.page_btn} ${styles.active}` : styles.page_btn
			}
			key={i}
		  >
			{i}
		  </button>
		);
	  }
  
	  return buttons;
	};
  
	return (
	  <div className={styles.container}>
		{renderPageButtons()}
	  </div>
	);
  };
  
  export default Pagination;
