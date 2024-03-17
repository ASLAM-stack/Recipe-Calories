
const Rowcal = ({items2,index}) => {
    const {recipe_name,preparing_time,calories}=items2[0];
    return (
        <tr>
        <td className="hidden md:block lg:block fira-sans-regular text-base text-[#282828B2]">{index + 1}</td>
        <td className="fira-sans-regular text-base text-[#282828B2]">{recipe_name}</td>
        <td className="fira-sans-regular text-base text-[#282828B2]">{preparing_time}</td>
        <td className="fira-sans-regular text-base text-[#282828B2]">{calories}</td>
        </tr>
    );
};

export default Rowcal;