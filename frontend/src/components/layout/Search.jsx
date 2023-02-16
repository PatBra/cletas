import React, {
    useState
} from "react";
import {useNavigate} from "react-router-dom";


const Search = () => {
    let navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const searchHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/search/${keyword}`);
        } else {
            navigate("/");
        }
    };

    return (

        <form onSubmit={searchHandler} >
        <div className="input-group">
            <input
                type="text"
                id="search_field"
                className="form-control"
                placeholder="Busqueda"
                onChange={(e) => setKeyword(e.target.value)}
            />
            <div className="input-group-append mx-4">
                <button id="search_btn" className="btn btn-danger">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </form>

    )
}

export default Search