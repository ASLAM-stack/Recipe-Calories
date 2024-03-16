import React from 'react';

const Recipe = ({recipe}) => {
    console.log(recipe)
    return (
        <div class="card w-[300px] lg:w-96 bg-base-100 shadow-xl md:w-96">
            <figure className='h-[300px] object-fill'><img className='card-img' src={recipe.recipe_image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-xl lexend font-semibold text-[#282828]">{recipe.recipe_name}</h2>
                <p className='text-[#878787] text-base'>{recipe.short_description}</p>
                <hr />
                <div>
                    <h3>Ingredients: {recipe.ingredients.length}</h3>
                    <div>
                        <ul className='list-disc'>
                            {recipe.ingredients.map(ingrd => <li>{ingrd}</li>)}
                        </ul>
                    </div>
                </div>
                <div class="card-actions justify-start">
                <button class="btn btn-primary">WANT TO COOK</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;