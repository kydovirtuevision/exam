import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

const sections = [
  { title: 'Organisation', items: ['Manage','Users','Tags','Integrations'] },
  { title: 'Utilities', items: ['Configuration','Hierarchy','Assets'] },
  { title: 'Carbon', items: ['Configuration','Hierarchy','Inventory Items','Emission Factors','Snapshots'] },
]

export default function Sidebar(){
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <div className="mb-6 flex items-center gap-3">
        <img src={Logo} alt="BraveGen" className="w-10 h-10" />
        <div className="font-bold text-lg">BraveGen</div>
      </div>
      {sections.map((s)=> (
        <div key={s.title} className="mb-4">
          <div className="uppercase text-xs text-gray-400 px-2 mb-2">{s.title}</div>
          <ul>
            {s.items.map(i => (
              <li key={i} className="mb-1">
                <NavLink to={`/Settings/${i}`} className={({isActive}) => `block px-3 py-2 rounded ${isActive|| i==='Integrations' ? 'bg-green-500 text-white' : 'text-gray-200 hover:bg-gray-700'}`}>
                  {i}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
