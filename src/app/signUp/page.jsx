import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='w-4/5 mx-auto my-6 flex justify-center items-center text-center'>
      <fieldset className="fieldset bg-linear-to-tl from-sky-200 to-yellow-100 border-base-300 rounded-box w-full max-w-md border p-6 flex flex-col items-center">

        <legend className="fieldset-legend text-2xl font-bold mb-4"> Sign Up
        </legend>

        <label className="label text-lg self-start">Write Your Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Write Your Email"
        />

        <label className="label text-lg self-start mt-2">Set New Password</label>
        <input
          type="password"
          className="input w-full"
          placeholder="Set New Password"
        />

        <label className="label text-lg self-start mt-2">Your Image Link</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Your Image Link"
        />

        <label className="label text-lg self-start mt-2">Your Full Name</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Your Full Name"
        />

        <label className="label text-lg self-start mt-2">Your Full Address</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Your Full Address"
        />

        <button className="btn btn-warning w-2/3 mt-5">
          Sign Up
        </button>

        <p className='mt-6'>Already Have Account?</p>

        <Link
          href="/login"
          className='btn btn-accent w-2/3 mt-2'
        >Back to Login Page</Link>

      </fieldset>
    </div>
  );
};

export default page;