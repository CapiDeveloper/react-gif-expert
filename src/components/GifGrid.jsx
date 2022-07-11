import useFetchGifs from "../hooks/useFetchGifs";
import {GifItem} from "./GifItem";


export const GifGrid = ({categoria}) => {

  const {images,isLoading} = useFetchGifs(categoria);

  return (
    <>
      <h2>{categoria}</h2>
      {isLoading&&<p>Cargando...</p>}
      <div className="card-grid">

        {
          !isLoading&& images.map((elemento)=>(
            <GifItem 
              key={elemento.id} 
              {...elemento}
            />
          ))
        }
      </div>
    </>
  )
}