import ReactMarkdown from 'react-markdown'

interface EfemeridesResultProps {
  efemeride: string
  model: string
  responseTime: number
}

export function EfemeridesResult({ efemeride, model, responseTime }: EfemeridesResultProps) {
  const getModelDisplayName = (modelId: string) => {
    const modelMap: { [key: string]: string } = {
      'deepseek/deepseek-chat-v3-0324:free': 'Deepseek Chat v3',
      'deepseek/deepseek-r1-0528:free': 'Deepseek R1 0528',
      'qwen/qwen3-coder:free': 'Qwen3 Coder',
      'deepseek/deepseek-r1:free': 'Deepseek R1',
      'z-ai/glm-4.5-air:free': 'GLM 4.5 Air',
      'tngtech/deepseek-r1t2-chimera:free': 'Deepseek R1T2 Chimera',
      'moonshotai/kimi-k2:free': 'Kimi K2',
      'tngtech/deepseek-r1t-chimera:free': 'Deepseek R1T Chimera',
      'qwen/qwen3-235b-a22b:free': 'Qwen3 235B A22B',
      'google/gemini-2.0-flash-exp:free': 'Gemini 2.0 Flash',
      'openai/gpt-oss-20b:free': 'GPT-OSS 20B',
      'microsoft/mai-ds-r1:free': 'Microsoft MAI DS R1',
      'meta-llama/llama-3.3-70b-instruct:free': 'Llama 3.3 70B Instruct',
      'deepseek/deepseek-r1-0528-qwen3-8b:free': 'Deepseek R1 0528 Qwen3 8B',
      'mistralai/mistral-small-3.2-24b-instruct:free': 'Mistral Small 3.2 24B'
    }
    return modelMap[modelId] || modelId
  }

  return (
    <div className="mt-8 glass-effect rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
          Tu efeméride
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-600/30">
          <ReactMarkdown 
            className="text-lg leading-relaxed text-gray-200 prose prose-invert prose-headings:text-white prose-strong:text-white prose-em:text-gray-300 prose-p:text-gray-200"
            components={{
              h1: ({children}) => <h1 className="text-2xl font-bold text-white mb-4">{children}</h1>,
              h2: ({children}) => <h2 className="text-xl font-bold text-white mb-3">{children}</h2>,
              h3: ({children}) => <h3 className="text-lg font-bold text-white mb-2">{children}</h3>,
              p: ({children}) => <p className="text-gray-200 mb-4 leading-relaxed">{children}</p>,
              strong: ({children}) => <strong className="font-bold text-white">{children}</strong>,
              em: ({children}) => <em className="italic text-gray-300">{children}</em>,
              ul: ({children}) => <ul className="list-disc list-inside text-gray-200 mb-4 space-y-1">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal list-inside text-gray-200 mb-4 space-y-1">{children}</ol>,
              li: ({children}) => <li className="text-gray-200">{children}</li>,
              blockquote: ({children}) => <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-300 mb-4">{children}</blockquote>
            }}
          >
            {efemeride}
          </ReactMarkdown>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          ✨ Respuesta generada con {getModelDisplayName(model)} en {responseTime.toFixed(1)} segundos ✨<br />
          Esto lo hizo la IA. Puede fallar.
        </p>
      </div>
    </div>
  )
}
