import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';

import { FaStar, FaRegStar } from 'react-icons/fa';

const Details = () => {
    const detailInfo = useLoaderData();
    const [detail, setDetail] = useState(detailInfo);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={detail.imageURL} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl  font-bold">Product Details</h1>
                            <h1 className="text-2xl font-bold">{detail.name}</h1>
                            <p className="font-bold">{detail.description}</p>
                            <br />
                            <table className="table w-full">

                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>Price</th>
                                        <td>{detail.price}</td>
                                    </tr>
                                    <tr>
                                        <th>Available quantity</th>
                                        <td>{detail.quantity}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>Seller Name</th>
                                        <td>{detail.createdName}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>Seller Email</th>
                                        <td>{detail.createdBy}</td>
                                    </tr>
                                    <tr>
                                        <th>Rating</th>
                                        <td><Rating
                                            placeholderRating={detail.rating} readonly
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                        >

                                        </Rating></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details