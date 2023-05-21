import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Upsert = () => {
  useTitle('Add Toy');
  const { userInfo } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    event.preventDefault();
    fetch("https://server-phi-sooty.vercel.app/add-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Add Your Product!");
      });
   
  };

  return (
    <div>
      <div className='card  w-[80%] mx-auto shadow-2xl bg-base-100'>
        <h2 className='text-center text-3xl'>Add Toy:  </h2>

        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"    {...register("name", { required: true })}
                  placeholder="name" className="input input-bordered" autoComplete='off' />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input type="text" {...register("imageURL", { required: true })} placeholder="Image URL" className="input input-bordered" autoComplete='off' />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select className="select select-bordered"  {...register("category", { required: true })}>
                  <option value="Mickey Mouse">Mickey Mouse</option>
                  <option value="Robot">Robot</option>
                  <option value="Monster">Monster</option>
                </select>
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input type="number" {...register("quantity")} placeholder="available quantity" className="input input-bordered" autoComplete='off' />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="number" {...register("price")} placeholder="price" className="input input-bordered" autoComplete='off' />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" {...register("rating")}  placeholder="rating" className="input input-bordered" autoComplete='off' />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input type="text" defaultValue={userInfo?.displayName} {...register("createdName")} className="input input-bordered" readOnly />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input type="email" {...register("createdBy")} defaultValue={userInfo?.email} placeholder="seller email" className="input input-bordered" readOnly />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail description</span>
                </label>
                <input type="text"  {...register("description")} placeholder="detail description" className="input input-bordered" autoComplete='off'/>
              </div>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary btn-block" type="submit" value="Add Product" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Upsert