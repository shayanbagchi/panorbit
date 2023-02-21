import React from "react";
import Navbar from "./Navbar";
import UserAdress from "./UserAdress";
import UserDetails from "./UserDetails";

const Profile = ({user, users}) => {
  return (
    <div className="w-full flex flex-col">
      <Navbar user={user} users={users}/>
      <div className="flex">
        <UserDetails user={user}/>
        <UserAdress user={user}/>
      </div>
    </div>
  );
};

export default Profile;
