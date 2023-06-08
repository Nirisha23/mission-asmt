import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import "./productlist.css"
import Box from '@mui/material/Box';
import ProductCard from './ProductCard';
import { IoCloseCircleSharp } from "react-icons/io5";
import { BiFilter } from "react-icons/bi";
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';



function ProductList({ selectedFilter, products }) {


    const drawerBleeding = 56;

    const Root = styled('div')(({ theme }) => ({
        height: '100%',
        backgroundColor:
            theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
    }));

    const StyledBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
    }));

    const Puller = styled(Box)(({ theme }) => ({
        width: 30,
        height: 6,
        backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        left: 'calc(50% - 15px)',
    }));

    const ProductListSm = ((props) => {
        const { window } = props;
        const [open, setOpen] = React.useState(false);

        const toggleDrawer = (newOpen) => () => {
            setOpen(newOpen);
        };

        // This is used only for the example
        const container = window !== undefined ? () => window().document.body : undefined;
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

                        <Root>
                            <CssBaseline />
                            <Global
                                styles={{
                                    '.MuiDrawer-root > .MuiPaper-root': {
                                        height: `calc(50% - ${drawerBleeding}px)`,
                                        overflow: 'visible',
                                    },
                                }}
                            />
                            <Box sx={{ textAlign: 'center', pt: 1 }}>
                                <BiFilter size={24} onClick={toggleDrawer(true)} />
                            </Box>
                            <SwipeableDrawer
                                container={container}
                                anchor="bottom"
                                open={open}
                                onClose={toggleDrawer(false)}
                                onOpen={toggleDrawer(true)}
                                swipeAreaWidth={drawerBleeding}
                                disableSwipeToOpen={false}
                                ModalProps={{
                                    keepMounted: true,
                                }}
                            >
                                <StyledBox
                                    sx={{
                                        position: 'absolute',
                                        top: -drawerBleeding,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                        visibility: 'visible',
                                        right: 0,
                                        left: 0,
                                    }}
                                >
                                    <Puller />
                                    <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
                                </StyledBox>
                                <StyledBox
                                    sx={{
                                        px: 2,
                                        pb: 2,
                                        height: '100%',
                                        overflow: 'auto',
                                    }}
                                >
                                    <Skeleton variant="rectangular" height="100%" />
                                </StyledBox>
                            </SwipeableDrawer>
                        </Root>
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