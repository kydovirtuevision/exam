import React from 'react'
import TenantDropdown from './TenantDropdown'
import UserDropdown from './UserDropdown'

export default function Header(){
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <TenantDropdown />
        <div className="flex items-center gap-4">
          <button className="text-gray-600"><i className="fa-regular fa-bell"/></button>
          <UserDropdown />
        </div>
      </div>
    </header>
  )
}
