import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      <h5 className="text-center mt-5">Add Services</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 mt-5  mx-auto">
        <input
          {...register("name")}
          className="form-control mt-2 mb-2"
          placeholder="name" required
        />
        <input
          {...register("quantity")}
          className="form-control mb-2"
          placeholder="quantity"
          required
        />
        <input
          type="number"
          {...register("price")}
          className="form-control mb-2"
          placeholder="price"
          required
        />
        <input
          type="text"
          {...register("suppliername")}
          className="form-control mb-2"
          placeholder="supplier-name"
          required
        />
        <input
          type="text"
          {...register("shortdescription")}
          className="form-control mb-2"
          placeholder="short-description"
          required
        />
        <input
          type="text"
          {...register("img")}
          className="form-control mb-2"
          placeholder="photo-url"
          required
        />
        <input className="btn btn-info" type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
