import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

const organisation = ['Manage','Users','Tags','Integrations']
const utilities = ['Configuration','Hierarchy','Assets']
const carbon = ['Configuration','Hierarchy','Inventory Items','Emission Factors','Snapshots']

export default function SidebarClean(){
  return (
    <div className="flex">
      {/* Left dark rail */}
      <div className="w-16 bg-gray-900 text-white min-h-screen flex flex-col items-center py-4 gap-4">
        <img src={Logo} alt="logo" className="w-8 h-8" />
        <button title="Insights" className="w-10 h-10 rounded hover:bg-gray-800 flex items-center justify-center"><i className="fa-solid fa-compass" /></button>
        <button title="Collect" className="w-10 h-10 rounded hover:bg-gray-800 flex items-center justify-center"><i className="fa-solid fa-box" /></button>
        <button title="Reviews" className="w-10 h-10 rounded hover:bg-gray-800 flex items-center justify-center"><i className="fa-solid fa-thumbs-up" /></button>
        <button title="Carbon" className="w-10 h-10 rounded hover:bg-gray-800 flex items-center justify-center mt-auto"><i className="fa-solid fa-leaf" /></button>
        <button title="Settings" className="w-10 h-10 rounded hover:bg-gray-800 flex items-center justify-center"><i className="fa-solid fa-gear" /></button>
      </div>

      {/* Right light grouped menu */}
      <aside className="w-64 bg-white text-gray-800 min-h-screen p-4 border-r">
        <div className="mb-4">
          <div className="font-medium text-gray-600">Organisation</div>
        </div>

        <div className="mb-6">
          <ul>
            {organisation.map(i => (
              <li key={i} className="mb-2">
                <NavLink to={`/Settings/${i}`} className={({isActive}) => `flex items-center gap-3 px-3 py-2 rounded ${isActive ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                  <span className="w-6 text-green-500">
                    {i==='Manage' && <i className="fa-solid fa-house" />}
                    {i==='Users' && <i className="fa-solid fa-users" />}
                    {i==='Tags' && <i className="fa-solid fa-tag" />}
                    {i==='Integrations' && <i className="fa-solid fa-plug" />}
                  </span>
                  <span>{i}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="font-medium text-gray-600">Utilities</div>
        </div>
        <div className="mb-6">
          <ul>
            {utilities.map(i => (
              <li key={i} className="mb-2">
                <NavLink to={`/Settings/${i}`} className={({isActive}) => `flex items-center gap-3 px-3 py-2 rounded ${isActive ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                  <span className="w-6 text-green-500">
                    {i==='Configuration' && <i className="fa-solid fa-gear" />}
                    {i==='Hierarchy' && <i className="fa-solid fa-sitemap" />}
                    {i==='Assets' && <i className="fa-solid fa-box" />}
                  </span>
                  <span>{i}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="font-medium text-gray-600">Carbon</div>
        </div>
        <div>
          <ul>
            {carbon.map(i => (
              <li key={i} className="mb-2">
                <NavLink to={`/Settings/${i}`} className={({isActive}) => `flex items-center gap-3 px-3 py-2 rounded ${isActive ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                  <span className="w-6 text-green-500">
                    {i==='Inventory Items' && <i className="fa-solid fa-list" />}
                    {i==='Emission Factors' && <i className="fa-solid fa-cloud" />}
                    {i==='Snapshots' && <i className="fa-solid fa-camera" />}
                    {i==='Configuration' && <i className="fa-solid fa-gear" />}
                    {i==='Hierarchy' && <i className="fa-solid fa-sitemap" />}
                  </span>
                  <span>{i}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}
