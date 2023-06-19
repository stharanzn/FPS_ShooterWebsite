import React from 'react'
import "./profile.scss"
import { useAuth } from '../../utils/auth'

export default function Profile() {

  const auth = useAuth();

  const handleLogout = ()=>{
    auth.logout();
  }

  return (
    <>
        <div className="profilePage">
            <button onClick={handleLogout}>Logout</button>
        </div>
    </>
  )
}
