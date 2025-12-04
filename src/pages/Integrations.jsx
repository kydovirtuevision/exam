import React from 'react'
import IntegrationsTable from '../components/IntegrationsTable'
import qsImg from '../assets/image 348.png'
import kafkaImg from '../assets/image 348 copy.png'
import zapierImg from '../assets/image 351.png'
import tableauImg from '../assets/snowflake_icon.png.png'
import powerbiImg from '../assets/image 348 copy.png'
import measurablImg from '../assets/measurabl_icon.jpeg.png'

const services = [
  { id: 'qs', title: 'Amazon QuickSight', img: qsImg, description: 'Amazon BI service to create dashboards.' },
  { id: 'kafka', title: 'Kafka', img: tableauImg, description: 'Real-time streaming and messaging systems.' },
  { id: 'power', title: 'Power BI', img: powerbiImg, description: 'Microsoft BI service to create dashboards.' },
  { id: 'zap', title: 'Zapier', img: zapierImg, description: 'Automation tool that connects various apps.' },
  { id: 'tableau', title: 'Tableau', img: kafkaImg, description: 'BI service that helps seeing and transforming data.' },
  { id: 'measurabl', title: 'Measurabl', img: measurablImg, description: 'Enable the push and pull of data via API.' },
]

export default function Integrations(){
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Integrations</h1>
        <p className="text-sm text-gray-600">Choose a Service to Connect</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {services.map(s => (
          <div key={s.id} className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
            <img src={s.img} alt={s.title} className="w-12 h-12 object-contain" />
            <div>
              <div className="font-semibold">{s.title}</div>
              <div className="text-sm text-gray-600">{s.description}</div>
              <div className="mt-2"><button className="px-3 py-1 bg-gray-800 text-white rounded text-sm">Add Connection</button></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <IntegrationsTable />
      </div>
    </div>
  )
}
