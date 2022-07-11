import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if (inputValue.trim().length <=1 ) return;
          
        onNewCategory(inputValue.trim());

        setInputValue('');
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Bucar Gifs"
            value={inputValue}
            onChange={e=>setInputValue(e.target.value)}
        />
        </form>
    </>
  )
}
