import React, {useState, useRef, useEffect} from 'react'

export default function UserDropdown(){
  const [open,setOpen] = useState(false)
  const ref = useRef()
  useEffect(()=>{
    function onDoc(e){ if(ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  },[])

  return (
    <div className="relative" ref={ref}>
      <button onClick={()=>setOpen(o=>!o)} className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">FM</button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-20">
          <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">Account Settings</button>
          <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">Sign Out</button>
        </div>
      )}
    </div>
  )
}
