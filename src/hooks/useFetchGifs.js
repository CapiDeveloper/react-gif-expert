import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

const useFetchGifs = (categoria) => {

  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async()=>{
    const imagenes = await getGifs(categoria);
    setImages(imagenes);
    setisLoading(false);
  }

  useEffect(() => {
    getImages();
  },[]);

  return {
        images,
        isLoading
    }
}
export default useFetchGifs;