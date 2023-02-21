import React from "react";

const UserDetails = ({user}) => {
  return (
    <div className="flex flex-col justify-center items-center w-1/3 bg-white mt-8 border-r">
      <div className="flex justify-center mb-2">
        <img
          className="h-48 w-48 rounded-full object-cover"
          src={user.profilepicture}
          alt="Profile"
        />
      </div>
      <h2 className="text-center text-lightgrey-200 text-xl font-semibold">
        {user.name}
      </h2>
      <table className="flex justify-center table-auto w-full mt-4">
        <tbody>
          <tr>
            <td className="flex justify-end text-gray-600 text-xl py-1 px-2">
              Username
            </td>
            <td>:</td>
            <td className="text-gray-800 text-xl font-semibold py-1 px-2">{user.name}</td>
          </tr>
          <tr>
            <td className="flex justify-end text-gray-600 text-xl py-1 px-2">
              Email
            </td>
            <td>:</td>
            <td className="text-gray-800 text-xl font-semibold py-1 px-2">
              {user.email}
            </td>
          </tr>
          <tr>
            <td className="flex justify-end text-gray-600 text-xl py-1 px-2">
              Phone
            </td>
            <td>:</td>
            <td className="text-gray-800 text-xl font-semibold py-1 px-2">
              {user.phone}
            </td>
          </tr>
          <tr>
            <td className="flex justify-end text-gray-600 text-xl py-1 px-2">
              Website
            </td>
            <td>:</td>
            <td className="text-gray-600 hover:underline cursor-pointer text-xl font-semibold py-1 px-2">
              {user.website}
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="w-4/5 mt-4 pt-3 text-center text-lightgrey-200 text-xl font-regular border-t">
        Company
      </h2>
      <table className="flex justify-center table-auto w-11/12 mt-2">
        <tbody>
          <tr>
            <td className="flex justify-end text-gray-600 text-xl py-1 px-2">
              Name
            </td>
            <td>:</td>
            <td className="text-gray-800 text-xl font-semibold py-1 px-2">{user.company.name}</td>
          </tr>
          <tr>
            <td className="flex justify-end text-gray-600 text-xl py-1 px-2">
              CatchPhrase
            </td>
            <td>:</td>
            <td className="text-gray-800 text-xl font-semibold py-1 px-2">
            {user.company.catchPhrase}
            </td>
          </tr>
          <tr>
            <td className="flex justify-end text-gray-600 text-xl py-1 px-2">
              BS
            </td>
            <td>:</td>
            <td className="text-gray-800 text-xl font-semibold py-1 px-2">
              {user.company.bs}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
