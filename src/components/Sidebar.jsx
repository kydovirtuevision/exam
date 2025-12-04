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
    <div className="flex">
      {/* Narrow dark rail with icons */}
      <div className="w-16 bg-gray-900 text-white min-h-screen p-3 flex flex-col items-center gap-4">
        <img src={Logo} alt="logo" className="w-8 h-8" />
        <button title="Insights" className="w-10 h-10 rounded hover:bg-gray-800 flex items-center justify-center"><i className="fa-solid fa-compass"></i></button>
        <button title="Collect" className="w-10 h-10 rounded hover:bg-gray-800 flex items-center justify-center"><i className="fa-solid fa-box"></i></button>
        <button title="Reviews" className="w-10 h-10 rounded hover:bg-gray-800 flex items-center justify-center"><i className="fa-solid fa-thumbs-up"></i></button>
        <button title="Carbon" className="w-10 h-10 rounded hover:bg-gray-800 flex items-center justify-center mt-auto"><i className="fa-solid fa-leaf"></i></button>
      </div>

      {/* Light menu area */}
      <aside className="w-64 bg-white text-gray-800 min-h-screen p-4 border-r">
        <div className="mb-6">
          <div className="font-bold text-lg">BraveGen</div>
        </div>
        {sections.map((s)=> (
          <div key={s.title} className="mb-4">
            <div className="uppercase text-xs text-gray-400 px-2 mb-2">{s.title}</div>
            <ul>
              {s.items.map(i => (
                <li key={i} className="mb-1">
                  <NavLink to={`/Settings/${i}`} className={({isActive}) => `block px-3 py-2 rounded ${isActive || i==='Integrations' ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                    {i}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </div>
  )
}
