import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { searchHandler, term } = props;
    const inputEl = useRef('');
    const handleChange = () => {
        searchHandler(inputEl.current.value);
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    Country API
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control"
                            ref={inputEl}
                            type="search"
                            placeholder="Search by country"
                            value={term}
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;
