import React from 'react'

export default function Modal({children, onClose, title}){
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose} />
      <div className="bg-white rounded shadow z-50 max-w-lg w-full">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="font-semibold">{title}</div>
          <button onClick={onClose} className="text-gray-600">✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
