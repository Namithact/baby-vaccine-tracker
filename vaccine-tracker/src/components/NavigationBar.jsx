import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <nav className="flex gap-4 p-4 shadow bg-blue-100 text-blue-800 ">
  <NavLink to="/" className={({isActive})=>isActive?" font-semibold underline":"text-blue-800"}>Home</NavLink>
  <NavLink to="/tracker" className={({isActive})=>isActive?" font-semibold underline":"text-blue-800"}>Vaccine Tracker</NavLink>
  </nav>

  )
}
