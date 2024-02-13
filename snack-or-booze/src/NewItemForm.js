import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const NewItemForm = () => {
    const [form, setNewForm] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault
        setNewForm(form => [...form, {
            id:,
                name:,
            description, 
            recipe:,
            serve:
        }])
    }
    const handleChange = () => {
        
    }
    return (
        <>
             <form onSubmit={handleSubmit}>
                <label htmlFor="name">name</label>  
                <input value={form.name}
                    name="name"
                onChange={handleChange}/>
                
                <label htmlFor="desc">description</label>  
                <input name="desc"
                    value={form.description}
                    onChange={handleChange}/>
                
                <label htmlFor="recipe">recipe</label>  
                <input value={form.recipe}
                    name="recipe"
                    onChange={handleChange}/>
                
                <label htmlFor="serve">serve</label>  
                <input value={form.serve}
                    name="serve"
                    onChange={handleChange} />
                <button>submit</button>
             </form>
        </>
    )
}
