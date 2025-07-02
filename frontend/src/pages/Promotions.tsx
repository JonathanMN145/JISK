export function Promotions() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">PROMOCIONES</h1>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">EDITAR PROMOCIONES</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-medium">AGREGAR NUEVA PROMOCIÓN</h3>
          <h3 className="text-xl font-medium">FINALIZAR PROMOCIÓN</h3>
          <h3 className="text-xl font-medium">PROMOCIONES RECOMENDADAS</h3>
        </div>
      </section>

      <hr className="border-gray-300 my-6" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">ULTIMAS PROMOCIONES</h2>
        
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
              <div>
                <h4 className="font-medium">Spicy seasoned seafood noodles</h4>
                <p className="text-gray-600">$ 2.28 • 20 Bowls</p>
              </div>
              <button className="text-orange-500 hover:text-orange-700">
                Edit dish
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Promotions;
