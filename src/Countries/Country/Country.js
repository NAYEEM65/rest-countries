import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';
const Country = () => {
    const [loading, setLoading] = useState(true);
    const { cId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/alpha/${cId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDetails(data))
            .finally(() => setLoading(false));
    }, [cId]);
    return (
        <div className="container">
            {loading ? (
                <div className="text-center my-5 py-5">
                    <RingLoader color={'#36D7B7'} loading={loading} size={150} />
                </div>
            ) : (
                <div>
                    {details.map((detail) => {
                        return (
                            <div className="row mt-5" key={detail.cca2}>
                                <div className="col-lg-6">
                                    <div className="card">
                                        <h3>National Flag</h3>
                                        <img
                                            src={detail.flags.png}
                                            height="300px"
                                            alt={detail.name}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card">
                                        <h3>Symbol of Arms</h3>
                                        <img
                                            src={detail.coatOfArms.png}
                                            height="300px"
                                            alt={detail.name}
                                        />
                                    </div>
                                </div>
                                <div className="details col-12 text-center text-muted mt-5">
                                    <h3>Country: {detail.name.common}</h3>
                                    <h3>Capital: {detail.capital}</h3>
                                    <h3>Region: {detail.region}</h3>
                                    <h3>Population: {detail.population}</h3>
                                    <h3>Area: {detail.area} sqkm</h3>
                                    <Link to="/">
                                        <div className="btn btn-outline-success">Back To Home</div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Country;
