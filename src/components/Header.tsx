export function Header() {
  return (
    <header className="text-center">
      <div className="animate-float">
        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
          efemerIA
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-2">
          Descubrí tu efeméride
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Ingresa tu nombre y fecha de nacimiento (día y mes) para descubrir eventos históricos 
          fascinantes relacionados con tu día especial. Por detrás, un modelo de IA nos brindará 
          la información. Probá con distintos modelos y sacá tus propias conclusiones.
        </p>
      </div>
    </header>
  )
}
