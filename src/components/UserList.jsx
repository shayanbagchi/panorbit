import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios({
      method: "GET",
      url: "https://panorbit.in/api/users.json",
    })
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch();
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="flex justify-center pt-40">
      <div className="w-2/5 shadow-lg rounded-3xl bg-white">
        <div className="flex justify-center p-10 bg-lightgrey-100 rounded-t-3xl">
          <h2 className="font-semibold text-2xl text-lightgrey-200">
            Select an account
          </h2>
        </div>

        <ul className="bg-white max-h-96 mb-6 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-gray-100">
          {users.map((user) => (
            <Link
              to={`/profile/${user.id}`}
              state={{
                user: user,
                users: users
              }}
              key={user.id}
            >
              <li
                key={user.id}
                className="border-b border-slate cursor-pointer mx-6 w-11/12 p-2 flex items-center"
              >
                <img
                  className="w-10 h-10 mr-4 rounded-3xl"
                  src={user.profilepicture}
                  alt={`${user.name}'s profile pic`}
                />
                <div>
                  <h3 className="font-regular text-lg">{user.name}</h3>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
