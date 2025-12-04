import React, { useState, useMemo, useEffect } from 'react'
import { getIntegrations } from '../services/integrationsService'
import Modal from './Modal'

export default function IntegrationsTable(){
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize] = useState(5)
  const [editRow, setEditRow] = useState(null)
  const [deleteRow, setDeleteRow] = useState(null)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let mounted = true
    setLoading(true)
    getIntegrations().then(items => { if(mounted){ setData(items); setLoading(false) } })
    return ()=> { mounted = false }
  }, [])

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase()
    if(!q) return data
    return data.filter(r =>
      r.name.toLowerCase().includes(q) || r.integration.toLowerCase().includes(q) || r.source.toLowerCase().includes(q) || r.entity.toLowerCase().includes(q)
    )
  },[query, data])

  const total = filtered.length
  const pages = Math.max(1, Math.ceil(total / pageSize))
  const current = filtered.slice((page-1)*pageSize, page*pageSize)

  function onDeleteConfirm(){
    setDeleteRow(null)
    alert('Deleted (mock): ' + (deleteRow?.name||''))
  }

  function copyToClipboard(text){
    if(typeof navigator !== 'undefined' && navigator.clipboard){
      navigator.clipboard.writeText(text)
    } else {
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    alert('Copied to clipboard')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <input value={query} onChange={e=>{setQuery(e.target.value); setPage(1)}} placeholder="Search integrations" className="border p-2 rounded" />
        </div>
        <div className="text-sm text-gray-600">{total} results</div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="px-4 py-3">Integration</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Entity/Group</th>
              <th className="px-4 py-3">Interval</th>
              <th className="px-4 py-3">Connector URL</th>
              <th className="px-4 py-3">Instructions</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr><td colSpan={8} className="p-6 text-center text-gray-500">Loading...</td></tr>
            )}
            {!loading && current.map(r => (
              <tr key={r.id} className="border-b">
                <td className="px-4 py-3">{r.integration}</td>
                <td className="px-4 py-3 text-blue-600">{r.name}</td>
                <td className="px-4 py-3"><span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">{r.source}</span></td>
                <td className="px-4 py-3">{r.entity}</td>
                <td className="px-4 py-3">{r.interval || '-'}</td>
                <td className="px-4 py-3 text-blue-600"><button onClick={()=>copyToClipboard(r.connectorUrl)} className="underline">Copy to Clipboard</button></td>
                <td className="px-4 py-3 text-blue-600"><a href={r.instructionsUrl} target="_blank" rel="noreferrer" className="underline">View</a></td>
                <td className="px-4 py-3 text-right">
                  <button onClick={()=>setEditRow(r)} className="text-gray-600 px-2"><i className="fa-regular fa-pen-to-square" /></button>
                  <button onClick={()=>setDeleteRow(r)} className="text-red-600 px-2"><i className="fa-regular fa-trash-can" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">Page {page} of {pages}</div>
        <div className="flex items-center gap-2">
          <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page<=1} className="px-3 py-1 border rounded">Previous</button>
          <div className="flex items-center gap-1">
            {Array.from({length: pages}).map((_,i)=> (
              <button key={i+1} onClick={()=>setPage(i+1)} className={`px-3 py-1 border rounded ${page===i+1? 'bg-gray-200': ''}`}>{i+1}</button>
            ))}
          </div>
          <button onClick={()=>setPage(p=>Math.min(pages,p+1))} disabled={page>=pages} className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>

      {editRow && (
        <Modal onClose={()=>setEditRow(null)} title="Change to Existing Connection">
          <div className="p-6">
            <div className="mb-4 text-gray-700">Changes may disrupt functionality and impact data flow.
              <div className="mt-3">Are you sure you want to make changes to {editRow.integration} "{editRow.name}" connection?</div>
            </div>
            <div className="flex gap-2">
              <button onClick={()=>setEditRow(null)} className="px-4 py-2 border rounded">Undo</button>
              <button onClick={()=>setEditRow(null)} className="px-4 py-2 bg-black text-white rounded">Save Changes</button>
            </div>
          </div>
        </Modal>
      )}

      {deleteRow && (
        <Modal onClose={()=>setDeleteRow(null)} title={"Remove \"" + deleteRow?.name + "\" Connection?"}>
          <div className="p-6">
            <div className="mb-4 text-gray-700">Are you sure you want to remove {deleteRow.integration} "{deleteRow.name}" connection?</div>
            <div className="flex gap-2">
              <button onClick={()=>setDeleteRow(null)} className="px-4 py-2 border rounded">Undo</button>
              <button onClick={onDeleteConfirm} className="px-4 py-2 bg-red-600 text-white rounded">Remove</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
