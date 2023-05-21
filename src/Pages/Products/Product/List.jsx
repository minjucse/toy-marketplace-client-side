import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';

const List = () => {
  useTitle('All Toy');
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://server-phi-sooty.vercel.app/all-product")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const handleSearch = event => {
    event.preventDefault();
    const form = event.target;
    const searchKeyword = form.searchKeyword.value;
    fetch(`https://server-phi-sooty.vercel.app/searchProduct/${searchKeyword}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  };
  return (
    <div>
      <div className='card  w-[80%] mx-auto shadow-2xl bg-base-100'>
        <h2 className='text-center text-3xl'>All Toys </h2>
        <div className='w-[30%] pl-8'>
          <form onSubmit={handleSearch} className='flex items-center'>
            <div className="form-control">
              <label className="label">

              </label>
              <input type="text" name='searchKeyword' placeholder="name" className="input input-bordered" />
            </div>

            <div className="form-control mt-4 ml-2">
              <input className="btn btn-accent" type="submit" value="Search" />
            </div>
          </form>
        </div>
        <div className="card-body">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      #
                    </label>
                  </th>
                  <th>Image</th>
                  <th>Toy Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products?.map((item, index) => (
                  <tr key={index}>
                    <th>
                      <label>
                        {index + 1}
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.imageURL} alt="Image" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td> {item.category}</td>
                    <td>
                      {item.price}
                    </td>
                    <td>
                      {item.quantity}
                    </td>
                    <td>
                      <Link className='btn btn-square  btn-success btn-sm mr-2' to={`/product-detail/${item._id}`}> <FaRegEye></FaRegEye></Link>
                    </td>
                  </tr>
                ))}


              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th>
                    <label>
                      #
                    </label>
                  </th>
                  <th>Image</th>
                  <th>Toy Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </tfoot>

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List