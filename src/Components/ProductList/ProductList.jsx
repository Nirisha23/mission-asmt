import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import "./productlist.css"
import ProductCard from './ProductCard';
import { IoCloseCircleSharp } from "react-icons/io5";
import { BiFilter } from "react-icons/bi";




function ProductList({ selectedFilter, products }) {

    const ProductListSm = (() => {
        return (
            <div className='product-list-sm-container'>
                <div className='product-detail-heading'>
                    <div className='products-details-container' >
                        <h3>Mobiles</h3>
                        <p>(824 products)</p>
                    </div>
                    <div className='products-filter'>
                        <select>
                            <option value="Relevent">Relevent</option>
                            <option value="Price High to Low">High to Low</option>
                            <option value="Price Low to High">Low to High</option>
                            <option value="Newest First">Newest First</option>
                        </select>
                        <BiFilter size={24} />
                    </div>
                </div>
                <div className='product-grid' >
                    <ProductCard />
                </div>
            </div>
        )
    })

    const ProductListMd = (() => {
        return (
            <div className='product-list-sm-container'>
                <div className='product-detail-heading'>
                    <div className='products-details-container' >
                        <h3>Mobiles</h3>
                        <p>(824 products)</p>
                    </div>
                    <div className='products-filter'>
                        <select>
                            <option value="Relevent">Relevent</option>
                            <option value="Price High to Low">High to Low</option>
                            <option value="Price Low to High">Low to High</option>
                            <option value="Newest First">Newest First</option>
                        </select>
                        <BiFilter size={24} />
                    </div>
                </div>
                <div className='product-grid' >
                    <ProductCard />
                </div>
            </div>
        )
    })

    const ProductListLg = ((selectedFilter) => {
        function handleClick(event) {
            event.preventDefault();
            console.info('You clicked a breadcrumb.');
        }

        return (
            <div className='productlist-container'>
                <div className='productlist-content'>
                    <div className='productlist-head'>
                        <div role="presentation" onClick={handleClick} className='breadcrumbs-head'>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link underline="hover" color="inherit" href="/">
                                    Home
                                </Link>
                                <Link
                                    underline="hover"
                                    color="inherit"
                                    href="/material-ui/getting-started/installation/"
                                >
                                    Mobiles & Accessories
                                </Link>
                                <Typography color="text.primary">Mobiles</Typography>
                            </Breadcrumbs>
                        </div>
                        <div className='products-details-container' >
                            <h3>Mobiles</h3>
                            <p>(Showing 1 to 24 products out of 824 products)</p>
                        </div>
                    </div>
                    <div className='products-filter'>
                        <p>Sort by:</p>
                        <select>
                            <option value="Relevent">Relevent</option>
                            <option value="Price High to Low">Price High to Low</option>
                            <option value="Price Low to High">Price Low to High</option>
                            <option value="Newest First">Newest First</option>
                        </select>
                    </div>
                </div>

                <div className={Array.isArray(selectedFilter) && selectedFilter.length ? 'selected-filter-container' : 'd-none'}>
                    <div className='selected-filter-chips'>
                        {Array.isArray(selectedFilter) &&
                            selectedFilter.map((item) => (
                                <div className="selected-filter" key={item}>
                                    <p>{item}</p>
                                    <IoCloseCircleSharp />
                                </div>
                            ))}
                    </div>
                    <button className="ghost-btn">Clear All</button>
                </div>
                <>
                    <div className='product-grid' >
                        <ProductCard />
                    </div>
                </>
            </div>
        )
    })


    return (
        <div>
            <div className='productlist-sm'><ProductListSm /></div>
            <div className='productlist-md'><ProductListMd /></div>
            <div className='productlist-lg'><ProductListLg selectedFilter={selectedFilter} products={products} /></div>
        </div>
    )
}

export default ProductList