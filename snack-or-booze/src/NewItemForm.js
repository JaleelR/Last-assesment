import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SnackOrBoozeApi from "./Api";
export const NewItemForm = () => {
    const history = useHistory();
    const initialState = {
        name: "",
        description: "",
        recipe: "",
        serve: "",
        type: ""
    };
    const [form, setNewForm] = useState(initialState);

     async function handleSubmit(e) {
        e.preventDefault();
         if (form.type === "drinks") {
             await SnackOrBoozeApi.addDrink({
                 id: form.name,
                 name: form.name,
                 description: form.description,
                 recipe: form.recipe,
                 serve: form.serve
            });
          
         }
         else {
             console.log("snack")
             await SnackOrBoozeApi.addSnack({
                 id: form.name,
                 name: form.name,
                 description: form.description,
                 recipe: form.recipe,
                 serve: form.serve
             });
             console.log(form);
            
         }
         history.push(`/${form.type}`);
         setNewForm(initialState);
         
    };
     
 


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewForm({
            ...form,
            [name]: value
        });
    };

 

    return (
        <>
             <form onSubmit={handleSubmit}>
                <label htmlFor="name">name</label>  
                <input value={form.name}
                    name="name"
                    placeholder="name"
                onChange={handleChange}/>
                
                <label htmlFor="description">description</label>  
                <textarea name="description"
                    value={form.description}
                    placeholder="description"
                    onChange={handleChange}/>
                
                <label htmlFor="recipe">recipe</label>  
                <textarea value={form.recipe}
                    name="recipe"
                    placeholder="recipe"
                    onChange={handleChange}/>
                
                <label htmlFor="serve">How to serve</label>  
                <input value={form.serve}
                    name="serve"
                    placeholder="serve"
                    onChange={handleChange} />
                
                <label htmlFor="type">type of item</label>  
                <select value={form.type} name="type" onChange={handleChange}>
                    <option value="">choose type of item </option>
                    <option value="drinks">Drink </option>
                    <option value="snacks">Snack</option>
                </select>

                <button>submit</button>
             </form>
        </>
    )
}
