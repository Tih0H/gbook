import React, { useState } from "react";
import Modal from "./modal";

const Cards = ({ book }) => {
	// console.log("book: ", book);
	const [show, setShow] = useState(false);
	const [bookItem, setItem] = useState();
	return (
		<>
			{book.map(item => {
				let imgSorse =
					item.volumeInfo.imageLinks &&
					item.volumeInfo.imageLinks.smallThumbnail;
				let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
				if (imgSorse !== undefined && price !== undefined) {
					return (
						<>
							<div
								className='cards'
								onClick={() => {
									setShow(true);
									setItem(item);
								}}>
								<img src={imgSorse} alt=''></img>
								<div className='bottom'>
									<h3 className='title'>{item.volumeInfo.title}</h3>
									<p className='price'>{price} p</p>
								</div>
							</div>
							<Modal
								show={show}
								item={bookItem}
								onClose={() => setShow(false)}
							/>
						</>
					);
				}
			})}
		</>
	);
};
export default Cards;
