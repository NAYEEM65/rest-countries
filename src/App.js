import React, { useEffect, useState } from 'react';
import './App.css';
import Countries from './Countries/Countries';
import Country from './Countries/Country/Country';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Countries/Header/Header';

function App() {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [noOfCountries, setNoOfCountries] = useState(6);
    const noOfdata = countries.slice(0, noOfCountries);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCountries(data))
            .finally(() => setLoading(false));
    }, []);
    const handleLoadMoreBtn = () => {
        setNoOfCountries(noOfCountries + 6);
    };
    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm !== '') {
            const newCountryResultList = countries.filter((country) => {
                return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setSearchResults(newCountryResultList);
        } else {
            setSearchResults(countries);
        }
    };
    return (
        <div className="container">
            <Router>
                <Header searchHandler={searchHandler} term={searchTerm} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Countries
                                loading={loading}
                                noOfdata={searchTerm.length < 1 ? noOfdata : searchResults}
                                countries={countries}
                                handleLoadMoreBtn={handleLoadMoreBtn}
                            />
                        }
                    />
                    <Route path="/country/:cId" element={<Country />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
