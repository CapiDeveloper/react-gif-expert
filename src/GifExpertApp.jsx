import { useState } from "react";
import {AddCategory,GifGrid} from "./components"

const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory)=>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  }

  return (
    <>
        <h1>Gif expert app</h1>

        <AddCategory 
          onNewCategory = { event=>onAddCategory(event)}
        />

        {
          categories.map((elemento)=>(
            
              <GifGrid
              key={elemento}
              categoria={elemento}
              />
          ))
        }
    </>
  )
}

export default GifExpertApp