'use client'

import { useState } from 'react'

interface EfemeridesFormProps {
  onSubmit: (name: string, birthDate: string, model: string) => void
  loading: boolean
}

export function EfemeridesForm({ onSubmit, loading }: EfemeridesFormProps) {
  const [name, setName] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [selectedModel, setSelectedModel] = useState('deepseek/deepseek-chat-v3-0324:free')

  const models = [
    { value: 'deepseek/deepseek-chat-v3-0324:free', label: 'Deepseek Chat v3 (Recomendado)' },
    { value: 'deepseek/deepseek-r1-0528:free', label: 'Deepseek R1 0528' },
    { value: 'qwen/qwen3-coder:free', label: 'Qwen3 Coder' },
    { value: 'deepseek/deepseek-r1:free', label: 'Deepseek R1' },
    { value: 'z-ai/glm-4.5-air:free', label: 'GLM 4.5 Air' },
    { value: 'tngtech/deepseek-r1t2-chimera:free', label: 'Deepseek R1T2 Chimera' },
    { value: 'moonshotai/kimi-k2:free', label: 'Kimi K2' },
    { value: 'tngtech/deepseek-r1t-chimera:free', label: 'Deepseek R1T Chimera' },
    { value: 'qwen/qwen3-235b-a22b:free', label: 'Qwen3 235B A22B' },
    { value: 'google/gemini-2.0-flash-exp:free', label: 'Gemini 2.0 Flash' },
    { value: 'openai/gpt-oss-20b:free', label: 'GPT-OSS 20B' },
    { value: 'microsoft/mai-ds-r1:free', label: 'Microsoft MAI DS R1' },
    { value: 'meta-llama/llama-3.3-70b-instruct:free', label: 'Llama 3.3 70B Instruct' },
    { value: 'deepseek/deepseek-r1-0528-qwen3-8b:free', label: 'Deepseek R1 0528 Qwen3 8B' },
    { value: 'mistralai/mistral-small-3.2-24b-instruct:free', label: 'Mistral Small 3.2 24B' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && day && month) {
      onSubmit(name.trim(), `${day}/${month}`, selectedModel)
    }
  }

  return (
    <div className="glass-effect rounded-2xl p-8 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Tu nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg 
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            placeholder="Ingresa tu nombre"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Fecha de nacimiento (día y mes)
          </label>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="day" className="block text-xs text-gray-400 mb-1">
                Día
              </label>
              <select
                id="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg 
                         text-white focus:outline-none focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent transition-all duration-200"
                required
                disabled={loading}
              >
                <option value="">Día</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d.toString().padStart(2, '0')}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="month" className="block text-xs text-gray-400 mb-1">
                Mes
              </label>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg 
                         text-white focus:outline-none focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent transition-all duration-200"
                required
                disabled={loading}
              >
                <option value="">Mes</option>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                <option value="03">Marzo</option>
                <option value="04">Abril</option>
                <option value="05">Mayo</option>
                <option value="06">Junio</option>
                <option value="07">Julio</option>
                <option value="08">Agosto</option>
                <option value="09">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Solo se usará el día y mes para buscar efemérides históricas
          </p>
        </div>

        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-300 mb-2">
            Modelo de IA
          </label>
          <select
            id="model"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg 
                     text-white focus:outline-none focus:ring-2 focus:ring-purple-500 
                     focus:border-transparent transition-all duration-200"
            disabled={loading}
          >
            {models.map((model) => (
              <option key={model.value} value={model.value}>
                {model.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading || !name.trim() || !day || !month || !selectedModel}
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 
                   text-white font-semibold rounded-lg hover:from-purple-700 
                   hover:to-blue-700 focus:outline-none focus:ring-2 
                   focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 
                   transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                   transform hover:scale-105 active:scale-95"
        >
          {loading ? 'Buscando...' : 'Descubrir mi efeméride'}
        </button>
      </form>
    </div>
  )
}
