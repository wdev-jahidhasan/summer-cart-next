'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

const Page = () => {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleUpdateInfo = (data) => {
    const { fullname, url } = data;

    if (!fullname && !url) {
      toast.error("Please fill at least one field");
      return;
    }

    toast.success("Submitted successfully");

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <>
      <div className='w-4/5 mx-auto my-6 flex justify-center items-center text-center'>

        <form
          onSubmit={handleSubmit(handleUpdateInfo)}
          className="fieldset bg-linear-to-tl from-sky-200 to-yellow-100 border-base-300 rounded-box w-full max-w-md border p-6 flex flex-col items-center"
        >

          <legend className="fieldset-legend text-2xl font-bold mb-4">
            Update Your Info
          </legend>

          {/* Image URL */}
          <label className="label text-lg self-start mt-2">Image URL</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Your Image URL"
            {...register("url")}
          />
          {errors.url && (
            <p className='text-red-500 font-semibold self-start'>
              {errors.url.message}
            </p>
          )}

          {/* Full Name */}
          <label className="label text-lg self-start mt-2">Full Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Your Full Name"
            {...register("fullname")}
          />
          {errors.fullname && (
            <p className='text-red-500 font-semibold self-start'>
              {errors.fullname.message}
            </p>
          )}

          {/* Submit */}
          <button type='submit' className="btn btn-warning w-2/3 mt-5">
            Submit
          </button>

        </form>
      </div>

      <ToastContainer />
    </>
  );
};

export default Page;