import React from 'react';

const Recipe = ({recipe,hanleCart}) => {
       
    return (
        <div class="card  w-full bg-base-100 shadow-xl border-2 ">
            <figure className='h-[300px] object-cover p-6 '><img className='card-img rounded-xl ' src={recipe.recipe_image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-xl lexend font-semibold text-[#282828]">{recipe.recipe_name}</h2>
                <p className='text-[#878787] text-base fira-sans-regular'>{recipe.short_description}</p>
                <hr />
                <div>
                    <h3 className='lexend text-lg font-medium'>Ingredients: {recipe.ingredients.length}</h3>
                    <div>
                        <ul className='list-disc'>
                            {recipe.ingredients.map(ingrd => <li className='.fira-sans-regular text-lg text-[#878787] ml-5'>{ingrd}</li>)}
                        </ul>
                    </div>
                    <hr className='mt-3'/>
                    <div className='py-3 flex flex-wrap justify-between'>
                        <div className='flex gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fira-sans-regular text-base text-[#282828CC]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className='fira-sans-regular text-base text-[#282828CC]'>{recipe.preparing_time}</p>
                        </div>
                        <div className='flex gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fira-sans-regular text-base text-[#282828CC]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>
                        <p className='fira-sans-regular text-base text-[#282828CC]'>{recipe.calories}</p>
                        </div>
                    </div>
                </div>
                <div class="card-actions justify-start">
                <button class="btn bg-[#0BE58A] rounded-full text-lg font-medium lexend text-[#150B2B]" onClick={()=>hanleCart(recipe)}>WANT TO COOK</button>
                </div>
                
            </div>
        </div>
    );
};

export default Recipe;