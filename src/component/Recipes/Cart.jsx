import Row from "./Row";

const Cart = ({ cart,handleDelte }) => {
  return (
    <div className="p-4 w-full flex-1">
      <div className="overflow-x-auto">
        <h1>Want to Cook : {cart.length}</h1>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th>Preparing</th>
            </tr>
          </thead>
          <tbody>
           {
            cart.map((item,index) => <Row handleDelte={handleDelte} item={item} index={index}></Row>)
           }
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="flex">
              <th>S.N</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
