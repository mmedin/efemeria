import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, birthDate, model } = await request.json()

    if (!name || !birthDate || !model) {
      return NextResponse.json(
        { error: 'Nombre, fecha de nacimiento y modelo son requeridos' },
        { status: 400 }
      )
    }

    // Parse the birth date (format: "dd/mm")
    const [day, month] = birthDate.split('/')
    const dayNum = parseInt(day, 10)
    const monthNum = parseInt(month, 10)

    // Create a date object for formatting (using current year)
    const currentYear = new Date().getFullYear()
    const date = new Date(currentYear, monthNum - 1, dayNum)

    // Format date for display (day and month only)
    const dateFormatted = date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long'
    })

    const openRouterApiKey = process.env.OPENROUTER_API_KEY

    if (!openRouterApiKey) {
      return NextResponse.json(
        { error: 'API key no configurada' },
        { status: 500 }
      )
    }

    const prompt = `Eres un experto historiador y narrador. Necesito que me proporciones una efeméride fascinante y bien documentada para el ${dateFormatted}.

Por favor, busca un evento histórico significativo que haya ocurrido en esa fecha (día y mes) en cualquier año de la historia. Si es posible, intenta encontrar alguna conexión interesante con el nombre "${name}" o con personas que hayan tenido ese nombre.

La respuesta debe ser:
- Narrativa y atractiva
- Históricamente precisa
- Entre 150-250 palabras
- En español (de Argentina, si es posible)
- Con un toque personal que conecte con el nombre "${name}"
- Incluir el año del evento histórico
- Si hay alguna conexión interesante con el nombre, mencionarla de forma natural
- Usar formato Markdown para mejorar la presentación (títulos, negritas, cursivas, etc.)

Formato la respuesta de manera elegante y atractiva usando Markdown, como si fuera un descubrimiento personal.`

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openRouterApiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://efemeria.app',
        'X-Title': 'efemerIA'
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      throw new Error(`Error en la API: ${response.status}`)
    }

    const data = await response.json()
    const efemeride = data.choices[0]?.message?.content

    if (!efemeride) {
      throw new Error('No se pudo generar la efeméride')
    }

    return NextResponse.json({ efemeride })

  } catch (error) {
    console.error('Error en la API de efemérides:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
