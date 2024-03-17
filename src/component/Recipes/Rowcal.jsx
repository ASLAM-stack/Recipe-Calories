
const Rowcal = ({items2,index}) => {
    const {recipe_name,preparing_time,calories}=items2[0];
    return (
        <tr>
        <td className="hidden md:block lg:block">{index + 1}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        </tr>
    );
};

export default Rowcal;