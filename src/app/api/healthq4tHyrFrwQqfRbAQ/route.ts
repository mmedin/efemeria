import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const openRouterApiKey = process.env.OPENROUTER_API_KEY

    if (!openRouterApiKey) {
      return NextResponse.json(
        { status: 'error', message: 'API key no configurada' },
        { status: 500 }
      )
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openRouterApiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://efemeria.app',
        'X-Title': 'efemerIA'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat-v3-0324:free',
        messages: [
          {
            role: 'user',
            content: '2+2, number result only'
          }
        ],
        max_tokens: 10,
        temperature: 0
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Health check OpenRouter error:', response.status, errorText)
      
      // Si es error 429 (rate limit), consideramos que la API está funcionando
      if (response.status === 429) {
        return NextResponse.json(
          { status: 'healthy', message: 'API rate limit reached (normal for free tier)' },
          { status: 200 }
        )
      }
      
      return NextResponse.json(
        { status: 'error', message: `Error en la API de OpenRouter: ${response.status}` },
        { status: 500 }
      )
    }

    const data = await response.json()
    const result = data.choices[0]?.message?.content?.trim()

    if (result === '4') {
      return NextResponse.json(
        { status: 'healthy', message: 'AI model responding correctly' },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { status: 'error', message: `Unexpected response: ${result}` },
        { status: 500 }
      )
    }

  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Health check failed' },
      { status: 500 }
    )
  }
}
