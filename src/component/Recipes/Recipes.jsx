import { useState } from "react";
import Cart from "./Cart";
import Recipe from "./Recipe";
import { toast } from "react-toastify";
const Recipes = ({recipes}) => {
    const [cart,setCart]= useState([]);
    const [pCart,setPCart] = useState([]);
    const hanleCart= (recipe2)=>{
         
        const isExist = cart.find(item => item.recipe_id == recipe2.recipe_id)
        console.log(isExist)
        if (!isExist) {
            setCart([...cart,recipe2]);
            toast.success(`Added ${recipe2.recipe_name}`)
        }
        else{
            toast.error('Already Added')
        }    
    }
    
    const handleDelte = (id) =>{
        const newcart = cart.filter(items => items.recipe_id !== id.recipe_id)
        setCart(newcart)
        
    }
     


    return (
        <div>
            <div className="container mt-14">
                <div className="recipes-title text-center space-y-4">
                    <h1 className="lexend text-4xl font-semibold">Our Recipes</h1>
                    <p className="lexend text-base text-[#150B2B99]">The goal at Damn Delicious is to make amazing food quick and easy. Its perfect for those <br />
                    who want yummy meals without spending hours in the kitchen.You can choose of our any delicious recipe.</p>
                </div>
                <div className="cardCart-container flex flex-col lg:flex-row mt-12 justify-around">
                    <div className="card-container flex gap-5 flex-wrap ">
                         {
                            recipes.map(recipe => <Recipe recipe={recipe} hanleCart={hanleCart} kry={recipe.recipe_id}></Recipe>)
                         }
                    </div>
                    <div className="Cart-container border-2 border-red-500 rounded-2xl">
                        <Cart cart={cart} handleDelte={handleDelte}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;