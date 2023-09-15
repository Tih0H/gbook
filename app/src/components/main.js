import axios from "axios";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Cards from "./cards.js";
import "./style.css";

const Main = () => {
	const [search, setSearch] = useState("");
	const [bookData, setData] = useState([]);
	const searchBook = evt => {
		if (evt.key === "Enter") {
			console.log("enter press");
			axios
				.get(
					"https://www.googleapis.com/books/v1/volumes?q=" +
						search +
						"&key=AIzaSyA9rsQx5fAzS4jyoaDXo9n4Vgg5Rs83twM" +
						"&maxResults=12",
				)
				.then(res => setData(res.data.items))
				.catch(err => console.log("err :", err));
		}
	};
	return (
		<>
			<div className='header'>
				<div className='header_discription'>
					<h1 className='header_discription_title'>Великая книжная комната</h1>
				</div>
				<div className='header_search'>
					<h2>Найди свою книгу</h2>
					<div className='header_search_form'>
						<input
							type='text'
							placeholder='Введите название книги'
							value={search}
							onChange={e => setSearch(e.target.value)}
							onKeyPress={searchBook}
						/>
						<button>
							<AiOutlineSearch />
						</button>
					</div>
					<img src='./images/png.png' alt=''></img>
				</div>
			</div>
			<div className='conteiner'>{<Cards book={bookData} />}</div>
		</>
	);
};

export default Main;
