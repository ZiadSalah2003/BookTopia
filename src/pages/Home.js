import axios from "axios";
import {useEffect, useState} from "react";
import './Home.css'
import Ziad from "../assets/wallhaven-rrqowm.jpg";
function Home() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        async function getGames() {
            try {
                const res = await axios.get("http://localhost:5000/books");
                setBooks(res.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        }

        getGames()
    }, []);

    return (<div>
        <div className="search d-flex justify-content-center mx-5 mt-2">
            <input
                className="form-control m-3"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                style={{backgroundColor: "#b0b3b6"}}
            />
        </div>
        <div className="d-flex">
        <div className="crd-container">
  {books.filter((book) => search.toLowerCase() === "" ? true : book.name.toLowerCase().includes(search))
    .map((book) => book.tba === false ? (
      <div key={book.id} className="crd ">
        <a href={`/books/${book.id}`}>
          <img src={book.background_image} alt={book.name} className="crd-image"/>
        </a>
        <div className="tooltip">{book.name}</div>
        {/*<div className="crd-description">{book.rating}</div>*/}
      </div>
    ) : null)}
</div>
        <div className="cate">
          <div className="title">Choose Your Cource</div>
          <div className="content">
            <input type="radio" name="box" id="one"/>
            <input type="radio" name="box" id="two"/>
          <label for="one" className="box first">
        <div className="course">
          <span className="circle"></span>
          <span className="subject">History</span>
          </div>
          </label>
          <label for="two" className="box second">
        <div className="course">
          <span className="circle"></span>
          <span className="subject">History</span>
          </div>
          </label>
          </div>
        
        </div>
      </div>
    </div>);
}

export default Home;