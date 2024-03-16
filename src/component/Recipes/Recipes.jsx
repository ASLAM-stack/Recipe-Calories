
import Recipe from "./Recipe";
const Recipes = ({recipes}) => {

    return (
        <div>
            <div className="container mt-14">
                <div className="recipes-title text-center space-y-4">
                    <h1 className="lexend text-4xl font-semibold">Our Recipes</h1>
                    <p className="lexend text-base text-[#150B2B99]">The goal at Damn Delicious is to make amazing food quick and easy. Its perfect for those <br />
                    who want yummy meals without spending hours in the kitchen.You can choose of our any delicious recipe.</p>
                </div>
                <div className="cardCart-container">
                    <div className="card-container">
                         {
                            recipes.map(recipe => <Recipe recipe={recipe}></Recipe>)
                         }
                    </div>
                    <div className="Cart-container">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;