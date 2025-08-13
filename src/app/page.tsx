'use client'

import { useState } from 'react'
import { EfemeridesForm } from '@/components/EfemeridesForm'
import { EfemeridesResult } from '@/components/EfemeridesResult'
import { Header } from '@/components/Header'

export default function Home() {
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const [modelInfo, setModelInfo] = useState<{model: string, responseTime: number} | null>(null)

  const handleSearch = async (name: string, birthDate: string, model: string) => {
    setLoading(true)
    setError('')
    setResult('')
    setModelInfo(null)

    const startTime = Date.now()

    try {
      const response = await fetch('/api/efemerides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, birthDate, model }),
      })

      if (!response.ok) {
        throw new Error('Error al buscar efemérides')
      }

      const data = await response.json()
      const responseTime = (Date.now() - startTime) / 1000
      
      setResult(data.efemeride)
      setModelInfo({ model, responseTime })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="max-w-4xl mx-auto mt-12">
          <EfemeridesForm onSubmit={handleSearch} loading={loading} />
          
          {loading && (
            <div className="mt-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
              <p className="mt-2 text-gray-300">Buscando tu efeméride...</p>
            </div>
          )}
          
          {error && (
            <div className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
              <p className="text-red-400">{error}</p>
            </div>
          )}
          
          {result && modelInfo && (
            <EfemeridesResult 
              efemeride={result} 
              model={modelInfo.model}
              responseTime={modelInfo.responseTime}
            />
          )}
        </div>
      </div>
    </main>
  )
}
