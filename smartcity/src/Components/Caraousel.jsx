import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import Places from './Places';

const Caraousel = () => {
    const [cityName, setCityName] = useState('');
    const navigate = useNavigate(); // Updated hook

    const handleSearch = (e) => {
        e.preventDefault();
        if (cityName) {
            navigate(`/city/${cityName}`); // Updated navigation
        }
    };

    return (
        <>
            <div className="main col-md-12">
                <div className="main-content">
                    <h1>SMART CITY</h1>
                    <p>"Discover the future of urban living with our Smart City website.By simply entering your city name, we provide you with Comprehensive list of nearby amenities such as school,College,hospital and tourist attraction.</p>
                    <h3 className='mb-2'>Experience the convenience of smart city at your fingertips</h3>
                    <div className="search">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search your preferred city"
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}
                            />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Caraousel;