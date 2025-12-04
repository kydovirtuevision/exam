import React, {useState, useRef, useEffect} from 'react'

import tenantImg from '../assets/image 351.png'

const sampleTenants = ['ABC Group Ltd','135 Albert St','Swathy Corp 2','All Hands Demo Limited']

export default function TenantDropdown(){
  const [open,setOpen] = useState(false)
  const ref = useRef()

  useEffect(()=>{
    function onDoc(e){ if(ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  },[])

  return (
    <div className="relative" ref={ref}>
      <button onClick={()=>setOpen(o=>!o)} className="bg-green-500 text-white px-3 py-2 rounded flex items-center gap-2">
        <img src={tenantImg} alt="tenant" className="w-6 h-6 rounded" />
        <span className="whitespace-nowrap">ABC Group Ltd</span>
        <i className="fa-solid fa-caret-down" />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-64 bg-white border rounded shadow z-20">
          <div className="p-2 border-b">
            <input className="w-full p-2 border rounded" placeholder="Type to filter..." />
          </div>
          <ul className="max-h-40 overflow-auto">
            {sampleTenants.map(t=> (
              <li key={t} className="px-3 py-2 hover:bg-gray-100 flex items-center gap-2">
                <div className="w-7 h-7 bg-gray-100 rounded flex items-center justify-center text-sm">{t.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
                <div>{t}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
