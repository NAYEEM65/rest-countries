import React from 'react';
import { Link } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';

const Countries = (props) => {
    const { noOfdata, handleLoadMoreBtn, loading } = props;

    return (
        <div className="contaienr">
            {loading ? (
                <div className="text-center my-5 py-5">
                    <RingLoader color={'#36D7B7'} loading={loading} size={150} />
                </div>
            ) : (
                <div className="row">
                    {noOfdata.map((country) => {
                        return (
                            <div key={country.ccn3} className="col-lg-4 mt-2">
                                <div
                                    style={{ minHeight: '430px', backgroundColor: '#dadada' }}
                                    className="card pb-3 pt-0 rounded box-shadow-lg"
                                >
                                    <div className="country__flag">
                                        <img
                                            width="100%"
                                            style={{ maxHeight: '230px', minHeight: '230px' }}
                                            src={country.flags.png}
                                            alt={country.name}
                                        />
                                    </div>
                                    <div className="country__info px-4">
                                        <h5>
                                            <b className="text-muted">Name: </b>
                                            {country.name.common}
                                        </h5>
                                        <h5>
                                            <b className="text-muted">Capital: </b>
                                            {country.capital}
                                        </h5>
                                        <h5>
                                            <b className="text-muted">Region: </b>
                                            {country.region}
                                        </h5>
                                        <h5>
                                            <b className="text-muted">Population: </b>
                                            {country.population}
                                        </h5>
                                        <Link to={`/country/${country.cca2}`}>
                                            <div className="btn btn-outline-primary">
                                                Show Details
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <button
                        onClick={() => handleLoadMoreBtn()}
                        className="btn btn-outline-success d-block w-100 mt-5 mb-5 text-center"
                    >
                        Load More...
                    </button>
                </div>
            )}
        </div>
    );
};

export default Countries;
