 
const Row = ({item,index,handleDelte}) => {
    return (
    <tr>
        <td className="hidden md:block lg:block">{index + 1}</td>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time}</td>
        <td>{item.calories}</td>
        <td><button onClick={()=>handleDelte(item)} className="btn">Preparing </button></td>
    </tr>
    );
};

export default Row;