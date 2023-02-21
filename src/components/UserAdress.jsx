import React from 'react'

const UserAdress = ({user}) => {
  return (
    <div className="flex flex-col w-2/3 bg-white mt-8 border-r">
      <h2 className=" ml-12 text-lightgrey-200 text-xl font-semibold">
        Address:
      </h2>
      <table className="flex table-auto mt-4 ml-20">
        <tbody>
          <tr>
            <td className="flex justify-end text-gray-600 text-xl py-1 px-2">
              Street
            </td>
            <td>:</td>
            <td className="text-gray-800 text-xl font-semibold py-1 px-2">{user.address.street}</td>
          </tr>
          <tr>
            <td className="flex justify-end text-gray-600 text-xl py-1 px-2">
              Suite
            </td>
            <td>:</td>
            <td className="text-gray-800 text-xl font-semibold py-1 px-2">
            {user.address.suite}
            </td>
          </tr>
          <tr>
            <td className="flex justify-end text-gray-600 text-xl py-1 px-2">
              City
            </td>
            <td>:</td>
            <td className="text-gray-800 text-xl font-semibold py-1 px-2">
            {user.address.city}
            </td>
          </tr>
          <tr>
            <td className="flex justify-end text-gray-600 text-xl py-1 px-2">
              Zipcode
            </td>
            <td>:</td>
            <td className="text-gray-800 text-xl font-semibold py-1 px-2">
            {user.address.zipcode}
            </td>
          </tr>
        </tbody>
      </table>
      <iframe
        title='googlemap'
        src={`https://www.google.com/maps/embed/v1/place?q=${user.address.geo.lat},${user.address.geo.lng}`} // + &key=${API_KEY} api subscription required. // Stack overflow link - https://stackoverflow.com/a/46327307
        className="h-2/4 w-3/4 ml-20 pt-3 rounded-3xl"
      ></iframe>
      <table className="flex justify-end w-3/4 table-auto mt-1 ml-20">
        <tbody className='flex justify-end w-full'>
            <tr>
                <td className=" text-gray-600 py-1">Lat: </td>
                <td className="text-gray-600 font-semibold py-1 pr-2">{user.address.geo.lat}</td>
                <td className=" text-gray-600 py-1">Long: </td>
                <td className="text-gray-600 font-semibold py-1">{user.address.geo.lng}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserAdress