import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Profile from './Profile';
import BottomChatWindow from './BottomChatWindow';

const UserDashboard = () => {
  const location = useLocation();
  const {user, users} = location.state;

  return (
    <div className='flex h-full w-full'>
        <Sidebar/>
        <Profile user={user} users={users}/>
        <BottomChatWindow users={users}/>
    </div>
  )
}

export default UserDashboard