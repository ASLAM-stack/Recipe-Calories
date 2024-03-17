 
const Row = ({item,index,handleDelte}) => {
    return (
    <tr>
        <td className="hidden md:block lg:block  fira-sans-regular text-base text-[#282828B2] h-full py-7">{index + 1}</td>
        <td className="fira-sans-regular text-base text-[#282828B2]">{item.recipe_name}</td>
        <td className="fira-sans-regular text-base text-[#282828B2]">{item.preparing_time}</td>
        <td className="fira-sans-regular text-base text-[#282828B2]">{item.calories}</td>
        <td><button onClick={()=>handleDelte(item)} className="btn bg-[#0be58a] rounded-full">Preparing </button></td>
    </tr>
    );
};

export default Row;