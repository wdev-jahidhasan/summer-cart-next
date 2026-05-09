'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";


const Page = () => {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignup = async (data) => {
    console.log('signup data:', data);

    const { fullname, email, password, url } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: fullname,
      email: email,
      password: password,
      image: url,
      callbackURL: "/login",
    });

    console.log(res, error)

    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("Signup Successful");

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }
  };

  return (
    <>

      <div className='w-4/5 mx-auto my-6 flex justify-center items-center text-center'>

        <form
          onSubmit={handleSubmit(handleSignup)}
          className="fieldset bg-linear-to-tl from-sky-200 to-yellow-100 border-base-300 rounded-box w-full max-w-md border p-6 flex flex-col items-center"
        >

          <legend className="fieldset-legend text-2xl font-bold mb-4"> Sign Up</legend>

          {/* Email */}
          <label className="label text-lg self-start">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Write Your Email"
            {...register("email", {
              required: "Email is required"
            })}
          />
          {errors.email && (
            <p className='text-red-500 font-semibold self-start'>
              {errors.email.message}
            </p>
          )}

          {/* Password */}
          <label className="label text-lg self-start mt-2">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Set New Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Minimum 8 characters required"
              }
            })}
          />
          {errors.password && (
            <p className='text-red-500 font-semibold self-start'>
              {errors.password.message}
            </p>
          )}

          {/* Image URL */}
          <label className="label text-lg self-start mt-2">Image URL</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Your Image URL"
            {...register("url", {
              required: "Image url is required"
            })}
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
            {...register("fullname", {
              required: "Name is required"
            })}
          />
          {errors.fullname && (
            <p className='text-red-500 font-semibold self-start'>
              {errors.fullname.message}
            </p>
          )}

          {/* Submit */}
          <button type='submit' className="btn btn-warning w-2/3 mt-5">
            Sign Up
          </button>

          <p className='mt-6'>Already Have Account?</p>

          <Link
            href="/login"
            className='btn btn-accent w-2/3 mt-2'
          >
            Back to Login Page
          </Link>

        </form>
      </div>
      <ToastContainer />
    </>

  );
};

export default Page;