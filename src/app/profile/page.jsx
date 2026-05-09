'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Profile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return <p className="text-center mt-10 text-lg">Loading profile...</p>;
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-teal-100 py-8 md:py-24 px-3">
      
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 text-center border border-gray-100">
        
        <h1 className="text-3xl font-bold text-slate-700 mb-6">  Your Profile</h1>

        <div className="flex justify-center mb-4">
          <Image
            src={user?.image || "/avatar.png"}
            alt="user avatar"
            width={160}
            height={160}
            className="rounded-lg border-2 border-teal-400 shadow-md"
          />
        </div>

        <h2 className="text-2xl font-semibold text-slate-800"> {user?.name}</h2>

        <p className="text-lg text-gray-500 mt-1 mb-6"> {user?.email}</p>

        <Link
          href="/update"
          className="inline-block w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-xl transition duration-200"
        > Update Info</Link>
      </div>
    </div>
  );
};

export default Profile;