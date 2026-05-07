import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='w-4/5 mx-auto my-6 flex justify-center items-center text-center'>
      
      <fieldset className="fieldset bg-linear-to-br from-sky-200 to-yellow-100 border-base-300 rounded-box w-full max-w-md border p-6 flex flex-col items-center">
        
        <legend className="fieldset-legend text-2xl font-bold mb-4">Login</legend>

        <label className="label text-lg self-start"> Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Email"
        />

        <label className="label text-lg self-start mt-3"> Password
        </label>

        <input
          type="password"
          className="input w-full"
          placeholder="Password"
        />

        <button className="btn btn-warning w-2/3 mt-5"> Login
        </button>

        <p className='mt-6'>Don't Have Account?</p>

        <Link
          href="/signUp"
          className='btn btn-accent w-2/3 mt-2'
        > Sign UP
        </Link>

      </fieldset>
    </div>
  );
};

export default page;