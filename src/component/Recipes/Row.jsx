 
const Row = ({item,index,handleDelte}) => {
    return (
    <tr>
        <th>{index + 1}</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time}</td>
        <td>{item.calories}</td>
        <td><button onClick={()=>handleDelte(item)} className="btn">Preparing </button></td>
    </tr>
    );
};

export default Row;