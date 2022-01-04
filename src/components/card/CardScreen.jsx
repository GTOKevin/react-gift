
export const CardScreen = ({obj}) => {
    return (
        <div className="col-span-full md:col-span-6 xl:col-span-4 mx-4 my-4">
            <div className="grid grid-cols-12">
                <div className="col-span-full md:col-span-6 animate__animated animate__fadeInLeft">
                    <img className="w-full h-80" src={obj.imagen} alt={obj.titulo} />
                </div>
                <div className="col-span-full md:col-span-6 py-4 px-4 animate__animated animate__fadeInDown">
                    <h5 className="text-center font-bold text-xl">{obj.titulo}</h5>
                    <hr className="text-gray-300 mb-2" />
                    <p className="font-semibold mb-2">Identificador : <span className="font-normal">{obj.id}</span></p>
                    <p className="font-semibold mb-2">Tipo de imagen : <span className="font-normal">{obj.tipo}</span></p>
                    {
                        (!obj.usuario.trim().length>0)
                        ?<p className="font-semibold">Usuario : <span className="font-normal">no encontrado</span></p>
                        :<p className="font-semibold">Usuario : <span className="font-normal">{obj.usuario}</span></p>
                    }
                </div>
            </div>
        </div>
    )
}
