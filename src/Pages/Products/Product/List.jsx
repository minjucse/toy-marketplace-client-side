import React from 'react'

import { FaRegEye } from 'react-icons/fa';

const List = () => {
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
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      1
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                  </td>
                  <td>Purple</td>
                  <th>

                  </th>
                  <th>
                    <button className="btn btn-square  btn-success btn-sm">
                      <FaRegEye></FaRegEye>
                    </button>

                  </th>
                </tr>

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

export default List