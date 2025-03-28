import BlobBackground from "./components/blob"
import Button from "./components/button"

export function App() {
  return (
    <>
    {/* <div className="bg-cover bg-no-repeat h-screen bg-[url(/img/fundo.jpg)]"> */}
    <div className="relative min-h-screen">
      <BlobBackground />
      <div className="container mx-auto p-8 relative z-10">
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-8 text-white shadow-xl">
          <h1 className="text-4xl font-bold mb-4">IV Semana de Tecnologia</h1>
          <p className="text-xl">Em breve mais informações</p>
        </div>
      </div>
      <Button />
      <BlobBackground />
    </div>
    </>
  )
}

export default App
