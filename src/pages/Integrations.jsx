import React from 'react'
import IntegrationsTable from '../components/IntegrationsTable'

export default function Integrations(){
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Integrations</h1>
        <p className="text-sm text-gray-600">Choose a Service to Connect</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <IntegrationsTable />
      </div>
    </div>
  )
}
