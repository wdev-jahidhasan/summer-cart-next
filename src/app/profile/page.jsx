import Link from 'next/link';
import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto w-full bg-yellow-100">
      <h1 className="text-center font-semibold text-4xl">This is your profile</h1>
      <Link href={"/update"} className='btn btn-accent'>Update Info</Link>
    </div>
  );
};

export default Profile;