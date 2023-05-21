import React, { useContext, useState, useEffect } from 'react'

import { FaRegEye } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { FaTimesCircle } from 'react-icons/fa';

import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from "react-toastify";

const UserWiseProduct = () => {
  useTitle('My Toy');
  const { userInfo } = useContext(AuthContext);
  const [products, setProduct] = useState([]);

  let url = `http://localhost:5000/my-product/${userInfo?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [url]);

  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            toast.success('deleted successful');
            const results = products.filter(x => x._id !== id);
            setProduct(results);
          }
        })
    }
  }

  return (
    <div>
      <div className='card  w-[80%] mx-auto shadow-2xl bg-base-100'>
        <h2 className='text-center text-3xl'>All Toys </h2>

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
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.category}
                    </td>
                    <td>{item.price}</td>
                    <td>
                      {item.quantity}
                    </td>
                    <th>
                      <button className="btn btn-square  btn-success btn-sm mr-2">
                        <FaRegEye></FaRegEye>
                      </button>
                      <button className="btn btn-square  btn-warning btn-sm mr-2">
                        <FiEdit></FiEdit>
                      </button>
                      <button className="btn btn-square  btn-error btn-sm" onClick={() => handleDelete(item._id)} >
                        <FaTimesCircle></FaTimesCircle>
                      </button>

                    </th>
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

export default UserWiseProduct