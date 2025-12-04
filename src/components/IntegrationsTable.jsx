import React, {useState, useMemo} from 'react'
import mockData from '../data/mockIntegrations'
import Modal from './Modal'

function TableRow({row, onEdit, onDelete}){
  return (
    <tr className="border-b">
      <td className="px-4 py-3">{row.integration}</td>
      <td className="px-4 py-3 text-blue-600">{row.name}</td>
      <td className="px-4 py-3"><span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">{row.source}</span></td>
      <td className="px-4 py-3">{row.entity}</td>
      <td className="px-4 py-3">{row.interval || '-'}</td>
      <td className="px-4 py-3 text-right">
        <button onClick={()=>onEdit(row)} className="text-gray-600 px-2"><i className="fa-regular fa-pen-to-square" /></button>
        <button onClick={()=>onDelete(row)} className="text-red-600 px-2"><i className="fa-regular fa-trash-can" /></button>
      </td>
    </tr>
  )
}

export default function IntegrationsTable(){
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize] = useState(5)
  const [editRow, setEditRow] = useState(null)
  const [deleteRow, setDeleteRow] = useState(null)

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase()
    if(!q) return mockData
    return mockData.filter(r =>
      r.name.toLowerCase().includes(q) || r.integration.toLowerCase().includes(q) || r.source.toLowerCase().includes(q)
    )
  },[query])

  const total = filtered.length
  const pages = Math.max(1, Math.ceil(total / pageSize))
  const current = filtered.slice((page-1)*pageSize, page*pageSize)

  function onDeleteConfirm(){
    // since this is a mock app we won't mutate the source data
    setDeleteRow(null)
    alert('Deleted (mock): ' + (deleteRow?.name||''))
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
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {current.map(r => (
              <TableRow key={r.id} row={r} onEdit={setEditRow} onDelete={setDeleteRow} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">Page {page} of {pages}</div>
        <div className="flex items-center gap-2">
          <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page<=1} className="px-3 py-1 border rounded">Previous</button>
          <button onClick={()=>setPage(p=>Math.min(pages,p+1))} disabled={page>=pages} className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>

      {editRow && (
        <Modal onClose={()=>setEditRow(null)} title="Edit Integration">
          <div className="p-4">
            <div className="mb-2">Edit (mock) for <strong>{editRow.name}</strong></div>
            <div className="flex gap-2">
              <button onClick={()=>setEditRow(null)} className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
              <button onClick={()=>setEditRow(null)} className="px-4 py-2 border rounded">Cancel</button>
            </div>
          </div>
        </Modal>
      )}

      {deleteRow && (
        <Modal onClose={()=>setDeleteRow(null)} title="Confirm Delete">
          <div className="p-4">
            <div className="mb-4">Are you sure you want to remove <strong>{deleteRow.name}</strong>?</div>
            <div className="flex gap-2">
              <button onClick={onDeleteConfirm} className="px-4 py-2 bg-red-600 text-white rounded">Delete</button>
              <button onClick={()=>setDeleteRow(null)} className="px-4 py-2 border rounded">Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
