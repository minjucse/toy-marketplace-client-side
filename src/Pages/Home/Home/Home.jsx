import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner'
import useTitle from '../../../hooks/useTitle';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Home = () => {
    useTitle('Home');
    const [activeTab, setActiveTab] = useState("all");
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://server-phi-sooty.vercel.app/productByCategory/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setProduct(result);
            });
    }, [activeTab]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div>
            <Banner />
            <div className='category-area mt-8  w-[80%] mx-auto'>
                <div className=" heading-section text-center  mb-12 mt-12">
                    <h2 className="text-3xl text-center font-bold">OUR Category</h2>
                    <p className='heading-description'>Explore thousands of recipe opportunities with all the information you need</p>
                </div>
                <div className="tabs flex justify-center items-center mb-12 mt-12">
                    <div className="btn-group btn-group-horizontal">
                        <button className={`${activeTab == "all" ? " btn btn-active" : "btn btn-ghost"
                            }`} onClick={() => handleTabClick("all")}>All</button>
                        <button className={`${activeTab == "Mickey Mouse" ? " btn btn-active" : "btn btn-ghost"
                            }`} onClick={() => handleTabClick("Mickey Mouse")}>Mickey Mouse</button>
                        <button className={`${activeTab == "Robot" ? " btn btn-active" : "btn btn-ghost"
                            }`} onClick={() => handleTabClick("Robot")}>Robot</button>
                        <button className={`${activeTab == "Monster" ? " btn btn-active" : "btn btn-ghost"
                            }`} onClick={() => handleTabClick("Monster")}>Monster</button>
                    </div>

                </div>
                <div className='single-featured'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        {
                            products?.map((item, index) => (
                                <div key={index}>
                                    <div className="card w-96 bg-base-100 shadow-xl" >
                                        <figure><img className='h-[250px]' src={item.imageURL} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {item.name}!
                                            </h2>
                                            <p>
                                                {item.price}!
                                            </p>
                                            <div className='mb-4'>
                                                <Rating
                                                    placeholderRating={item.rating} readonly
                                                    emptySymbol={<FaRegStar></FaRegStar>}
                                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                                    fullSymbol={<FaStar></FaStar>}
                                                >
                                                </Rating>

                                                <span className='ms-2'> {item?.rating}</span>
                                            </div>
                                            <div className="card-actions justify-end">
                                                <Link className='badge badge-outline' to={`/product-detail/${item._id}`}> Details</Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>
            </div>
            <div className='famous-area mt-8  w-[80%] mx-auto'>
                <div className=" heading-section text-center  mb-12 mt-12">
                    <h2 className="text-3xl text-center font-bold">OUR Famous Toys</h2>
                    <p className='heading-description'>Explore thousands of recipe opportunities with all the information you need</p>
                </div>

                <div className='single-featured-famous'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        <div className='famous-img'>
                            <img className='w-[100%] h-[250px]' src="https://images.unsplash.com/photo-1612618558821-40f47381f5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=433&q=80" alt="" />
                        </div>
                        <div className='famous-img'>
                            <img className='w-[100%] h-[250px]' src="https://images.unsplash.com/photo-1641302109103-912af938b5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div  className='famous-img'>
                            <img className='w-[100%] h-[250px]' src="https://images.unsplash.com/photo-1581909199603-0de32b43ffd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div className='famous-img'>
                            <img className='w-[100%] h-[250px]' src="https://images.unsplash.com/photo-1585621374760-213927cbfac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1217&q=80" alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home