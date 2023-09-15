import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";

const Modal = ({ show, item, onClose }) => {
	if (!show) {
		return null;
	}
	let imgSorse =
		item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
	return (
		<>
			<div className='overley'>
				<div className='overley-inner'>
					<button className='close' onClick={onClose}>
						<BsFillXCircleFill />
					</button>
					<div className='inner-box'>
						<img src={imgSorse} alt='' />
						<div className='info'>
							<h1>{item.volumeInfo.title}</h1>
							<h3>{item.volumeInfo.authors}</h3>
							<h4>
								{item.volumeInfo.publisher}
								<span>{item.volumeInfo.publishedDate}</span>
							</h4>
							<br />
							<a href={item.volumeInfo.previewLink}>
								<button>Больше</button>
							</a>
						</div>
					</div>
					<h4 className='overley-inner_discription'>
						{item.volumeInfo.description}
					</h4>
				</div>
			</div>
		</>
	);
};
export default Modal;
