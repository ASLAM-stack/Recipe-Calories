import Row from "./Row";
import Rowcal from "./Rowcal";
const Cart = ({cart,handleDelte,pCart}) => {
console.log(cart)
console.log(pCart)
   
  return (
    <div className="p-4 w-full rounded-2xl border-2 ">
      <div className="overflow-x-auto">
        <h1 className="lexend text-2xl font-semibold text-center p-2">Want to Cook : {cart.length}</h1>
        <hr />
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden md:block lg:block">S.N</th>
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
      <div className=" overflow-x-auto">
      <h1 className="lexend text-2xl font-semibold text-center p-2">Currently Cooking:{pCart.length}</h1>
          <hr />
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="hidden md:block lg:block">S.N</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
           {
           pCart.map((items2,index)=><Rowcal items2={items2} index={index} key={index}></Rowcal>)
           }
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td className="hidden md:block lg:block"></td>
              <td><p>Total Time =<br /> 
45 minutes</p></td>
              <td>Total Calories = <br />
1050 calories</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
