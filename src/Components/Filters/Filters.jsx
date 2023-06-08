import React, { useState } from 'react';
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaCrown } from "react-icons/fa";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';

import ProductList from '../ProductList/ProductList';
import "./filters.css";

function Filters() {


    const FilterSm = ((props) => {

        return (
            <div>
                <ProductList />
            </div>
        )
    })


    const FilterMd = (() => {
        return (
            <div>
                <ProductList />
            </div>
        )
    })

    const FilterLg = (() => {

        const [value, setValue] = React.useState([20, 37]);
        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

        const valuetext = (value) => `${value}`;
        const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

        //applied filter function
        const [selectedItems, setSelectedItems] = useState([]);

        const handleCheckboxChange = (event) => {
            const { value, checked } = event.target;

            if (checked) {
                setSelectedItems((prevSelectedItems) => [...prevSelectedItems, value]);
            } else {
                setSelectedItems((prevSelectedItems) =>
                    prevSelectedItems.filter((item) => item !== value)
                );
            }
        };
        return (
            <div className='body-content'>
                <div className='filters-container'>
                    <h5 className='filters-head'>Filters</h5>
                    <div className="product-type">
                        <h6 className="product-type-head">Product Type</h6>
                        <div className="product-type-col">
                            <Checkbox
                                value="Verified Seller"
                                color="success"
                                onChange={handleCheckboxChange} />
                            <div className="product-verified">
                                <VscVerifiedFilled className='verified-icon' />
                                <p>Verified Seller</p>
                            </div>
                        </div>
                        <div className="product-type-col">
                            <Checkbox
                                value="Popular product"
                                color="success"
                                onChange={handleCheckboxChange} />
                            <div className="popular-product">
                                <FaCrown className='crown-icon' />
                                <p>Popular product</p>
                            </div>
                        </div>
                    </div>
                    <div className="price-range">
                        <h6 className='price-range-head'>Price Range</h6>
                        <div className="price-range-col">
                            <div className="price-range-slider">
                                <Box sx={{ width: 200 }}>
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className="discount">
                        <h6 className='discount-head'>Discount</h6>
                        <div className="discount-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">10% Offer</label>
                        </div>
                        <div className="discount-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">20% Offer</label>
                        </div>
                        <div className="discount-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">30% Offer</label>
                        </div>
                        <div className="discount-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">40% Offer</label>
                        </div>
                        <div className="discount-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">50% Offer</label>
                        </div>
                    </div>
                    <div className="customer-ratings">
                        <h6 className="customer-rating-head">Customer Ratings</h6>
                        <div className="customer-ratings-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">4 & Above</label>
                        </div>
                        <div className="customer-ratings-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">3 & Above</label>
                        </div>
                    </div>
                    <div className="develiry-time">
                        <h6 className="delivery-time-head">Delivery Time</h6>
                        <div className="delivery-time-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">Delivery in 1 day</label>
                        </div>
                        <div className="delivery-time-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">Delivery in 1 week</label>
                        </div>
                    </div>
                    <div className="ram">
                        <h6 className="ram-head">RAM</h6>
                        <div className="ram-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">3 GB</label>
                        </div>
                        <div className="ram-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">4 GB</label>
                        </div>
                        <div className="ram-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">6 GB</label>
                        </div>
                        <div className="ram-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">8 GB & Above</label>
                        </div>
                    </div>
                    <div className="internal-storage">
                        <h6 className="internal-storage-head">Internal Storage</h6>
                        <div className="internal-storage-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">32 - 63.9 GB</label>
                        </div>
                        <div className="internal-storage-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">64 - 127.9 GB</label>
                        </div>
                        <div className="internal-storage-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">128 - 255.9 GB</label>
                        </div>
                        <div className="internal-storage-col">
                            <Checkbox {...label} color="success" />
                            <label htmlFor="">256 GB & Above</label>
                        </div>
                    </div>
                </div>
                <ProductList
                    selectedFilter={selectedItems}
                    products={selectedItems}
                />
            </div>
        )
    })

    return (
        <div>
            <div className='filterSm'><FilterSm /></div>
            <div className='filterMd'><FilterMd /></div>
            <div className='filterLg'><FilterLg /></div>
        </div>

    );
}

export default Filters;
