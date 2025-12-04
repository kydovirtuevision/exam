
import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

// Clean single Sidebar implementation (left dark icon rail + grouped menu to the right)
const organisation = ['Manage','Users','Tags','Integrations']
const utilities = ['Configuration','Hierarchy','Assets']
const carbon = ['Configuration','Hierarchy','Inventory Items','Emission Factors','Snapshots']

export default function Sidebar(){
  const rail = [
    { key: 'insights', icon: 'fa-compass', title: 'Insights' },
    { key: 'collect', icon: 'fa-download', title: 'Collect' },
    { key: 'utilities', icon: 'fa-wrench', title: 'Utilities' },
    { key: 'reports', icon: 'fa-chart-line', title: 'Reports' },
    { key: 'reviews', icon: 'fa-thumbs-up', title: 'Reviews' },
    { key: 'actions', icon: 'fa-bolt', title: 'Actions' },
    { key: 'carbon', icon: 'fa-leaf', title: 'Carbon' },
  ]

  return (
    <div className="flex">
      {/* left dark rail - compact icon-only */}
      <div className="w-16 bg-gray-900 text-white min-h-screen flex flex-col items-center py-3">
        <img src={Logo} alt="logo" className="w-8 h-8 mb-2" />
        <div className="flex-1 w-full flex flex-col items-center justify-center space-y-2">
          {rail.map(r => (
            <NavLink key={r.key} to={`/Settings/${r.title}`} title={r.title} aria-label={r.title} className="w-12 h-12 rounded hover:bg-gray-800 flex flex-col items-center justify-center text-white">
              <i className={`fa-solid ${r.icon} text-lg`} />
              <span className="text-xs mt-1 text-white">{r.title}</span>
            </NavLink>
          ))}
        </div>
        <div className="mb-3">
          <button title="Settings" aria-label="Settings" className="w-12 h-12 rounded hover:bg-gray-800 flex flex-col items-center justify-center text-white">
            <i className="fa-solid fa-gear text-lg" />
            <span className="text-xs mt-1 text-white">Settings</span>
          </button>
        </div>
      </div>

      {/* grouped menu */}
      <aside className="w-64 bg-white text-gray-800 min-h-screen p-4 border-r">
        <Section title="Organisation" items={organisation} />
        <Section title="Utilities" items={utilities} />
        <Section title="Carbon" items={carbon} />
      </aside>
    </div>
  )
}

function Section({title, items}){
  return (
    <div className="mb-6">
      <div className="font-medium text-gray-600 mb-2">{title}</div>
      <ul>
        {items.map(i => (
          <li key={i} className="mb-2">
            <NavLink to={`/Settings/${i}`} className={({isActive}) => `flex items-center gap-3 px-3 py-2 rounded ${isActive ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              <span className="w-6 flex items-center justify-center text-current">
                {i==='Manage' && <i className="fa-solid fa-house" />}
                {i==='Users' && <i className="fa-solid fa-users" />}
                {i==='Tags' && <i className="fa-solid fa-tag" />}
                {i==='Integrations' && <i className="fa-solid fa-plug" />}
                {i==='Configuration' && <i className="fa-solid fa-gear" />}
                {i==='Hierarchy' && <i className="fa-solid fa-sitemap" />}
                {i==='Assets' && <i className="fa-solid fa-box" />}
                {i==='Inventory Items' && <i className="fa-solid fa-list" />}
                {i==='Emission Factors' && <i className="fa-solid fa-cloud" />}
                {i==='Snapshots' && <i className="fa-solid fa-camera" />}
              </span>
              <span>{i}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
