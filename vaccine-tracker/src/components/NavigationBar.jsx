import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <nav className="flex gap-4 p-4 shadow bg-blue-500 text-white ">
  <NavLink to="/" className={({isActive})=>isActive?" font-semibold underline":"text-white"}>Home</NavLink>
  <NavLink to="/tracker" className={({isActive})=>isActive?" font-semibold underline":"text-white"}>Vaccine Tracker</NavLink>
  </nav>

  )
}
