"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from "react-toastify";
import { useSearchParams, useRouter } from "next/navigation";
import { FaGoogle } from 'react-icons/fa6';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const searchParams = useSearchParams();
  const router = useRouter();

  const redirect = searchParams.get("redirect") || "/";

  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
    });

    if (error) {
      toast.error("Wrong Credentials");
      return;
    }

    if (res) {
      toast.success("Login Successful");
      router.push(redirect);
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: redirect,
    });
  };

  return (
    <>
      <ToastContainer />

      <div className='w-11/12 mx-auto my-6 flex justify-center items-center text-center'>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="fieldset bg-linear-to-br from-sky-200 to-yellow-100 border-base-300 rounded-box w-full max-w-md border p-6 flex flex-col items-center"
        >

          <legend className="fieldset-legend text-2xl font-bold mb-4">
            Login
          </legend>

          <label className="label text-lg self-start">Email</label>
          <input
            type="email"
            className="input w-full"
            {...register("email", { required: "Write your email" })}
          />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

          <label className="label text-lg self-start mt-3">Password</label>
          <input
            type="password"
            className="input w-full"
            {...register("password", { required: "Write your password" })}
          />
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

          <button type="submit" className="btn btn-warning w-2/3 mt-5">
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleSignin}
            className="btn bg-white text-black border-[#e5e5e5] w-2/3 mt-3"
          >
            <FaGoogle /> Login with Google
          </button>

          <Link href="/signUp" className='btn btn-accent w-2/3 mt-2'>
            Sign UP
          </Link>

        </form>
      </div>
    </>
  );
};

export default LoginPage;