import { useState } from 'react';
import React from 'react';
import Products from './ProductsArray';
import "./productlist.css"
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaCrown } from "react-icons/fa";

function formatNumber(number) {
    const formattedNumber = number.toLocaleString();
    return `₹${formattedNumber}`;
}


function ProductCard() {


    const ProductCardSm = (() => {
        const [isFavorite, setIsFavorite] = useState(false);

        const handleToggleFavorite = () => {
            setIsFavorite(!isFavorite);
        };
        return (
            <>
                {Products.map((item) => (
                    <div className='product-card-container'>
                        <div className='product-card-img-container'>
                            <img src={item.src} alt={item.title} className='product-card-img' />
                            <span>
                                <button
                                    className={`fav-icon-btn ${isFavorite ? 'active' : ''}`}
                                    onClick={handleToggleFavorite}
                                >
                                    {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                                </button>
                            </span>
                        </div>
                        <div className='product-card-details'>
                            {item.badges == "Verified Seller" ? <p className='badge verified'><VscVerifiedFilled />Verified Seller</p> : (item.badges == "Popular product" ? <p className='badge popular'><FaCrown />Popular product</p> : <p>  </p>)}
                            <p className='product-name'>{item.title}</p>
                            <div className='product-ratings'>
                                <p className='product-star'><AiFillStar className='star-icon' />{item.rating}</p>
                                <span>({item.noofratings})</span>
                            </div>
                            <div className='product-prices'>
                                <div>
                                    <p className='offer-price'>{formatNumber(item.offerprice)}</p>
                                    <p className='market-price'>{formatNumber(item.price)}</p>
                                </div>
                                <button className='secondary-btn'>Add to Cart</button>
                            </div>
                        </div>
                    </div >
                ))
                }
            </>
        )
    })

    const ProductCardMd = (() => {

        const [isFavorite, setIsFavorite] = useState(false);

        const handleToggleFavorite = () => {
            setIsFavorite(!isFavorite);
        };
        return (
            <>
                {Products.map((item) => (
                    <div className='product-card-container'>
                        <div className='product-card-img-container'>
                            <img src={item.src} alt={item.title} className='product-card-img' />
                            <span>
                                <button
                                    className={`fav-icon-btn ${isFavorite ? 'active' : ''}`}
                                    onClick={handleToggleFavorite}
                                >
                                    {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                                </button>
                            </span>
                        </div>
                        <div className='product-card-details'>
                            {item.badges == "Verified Seller" ? <p className='badge verified'><VscVerifiedFilled />Verified Seller</p> : (item.badges == "Popular product" ? <p className='badge popular'><FaCrown />Popular product</p> : <p>  </p>)}
                            <p className='product-name'>{item.title}</p>
                            <div className='product-ratings'>
                                <p className='product-star'><AiFillStar className='star-icon' />{item.rating}</p>
                                <span>({item.noofratings})</span>
                            </div>
                            <div className='product-prices'>
                                <div>
                                    <p className='offer-price'>{formatNumber(item.offerprice)}</p>
                                    <p className='market-price'>{formatNumber(item.price)}</p>
                                </div>
                                <button className='secondary-btn'>Add to Cart</button>
                            </div>
                        </div>
                    </div >
                ))
                }
            </>
        )
    })

    const ProductCardLg = (() => {
        const [isFavorite, setIsFavorite] = useState(false);

        const handleToggleFavorite = () => {
            setIsFavorite(!isFavorite);
        };

        return (
            <>
                {Products.map((item) => (
                    <div className='product-card-container'>
                        <div className='product-card-img-container'>
                            <img src={item.src} alt={item.title} className='product-card-img' />
                            <span>
                                <button
                                    className={`fav-icon-btn ${isFavorite ? 'active' : ''}`}
                                    onClick={handleToggleFavorite}
                                >
                                    {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                                </button>
                            </span>
                        </div>
                        <div className='product-card-details'>
                            {item.badges == "Verified Seller" ? <p className='badge verified'><VscVerifiedFilled />Verified Seller</p> : (item.badges == "Popular product" ? <p className='badge popular'><FaCrown />Popular product</p> : <p>  </p>)}
                            <p className='product-name'>{item.title}</p>
                            <div className='product-ratings'>
                                <p className='product-star'><AiFillStar className='star-icon' />{item.rating}</p>
                                <span>({item.noofratings})</span>
                            </div>
                            <div className='product-prices'>
                                <div>
                                    <p className='offer-price'>{formatNumber(item.offerprice)}</p>
                                    <p className='market-price'>{formatNumber(item.price)}</p>
                                </div>
                                <button className='secondary-btn'>Add to Cart</button>
                            </div>
                        </div>
                    </div >
                ))
                }
            </>
        )
    })




    return (
        <div>
            <div className='productlist-sm'><ProductCardSm /></div>
            <div className='productlist-md'><ProductCardMd /></div>
            <div className='productlist-lg'><ProductCardLg /></div>
        </div>
    );
}

export default ProductCard;
