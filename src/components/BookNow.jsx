import React from "react";
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const BookNow = () => {
  const handleBookNow = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    console.log(displayName, email);
    toast.success("Your Booking is Successful!");
    e.target.reset();
  };
  return (
    <div className=" flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-7 mx-10 my-20">
        <form onSubmit={handleBookNow} className="card-body">
          <fieldset className="fieldset">
            <h1 className="text-3xl font-bold pb-3">Book Service</h1>
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="enter your name"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            <button
              type="submit"
              className="btn bg-gradient-to-br mt-3 from-[#632ee3] to-[#9f62f2] text-white hover:opacity-90"
            >
              Book Now
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
