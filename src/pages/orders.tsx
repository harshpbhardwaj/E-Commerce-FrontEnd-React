import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";


type DataType = {
  _id: string,
  amount: number,
  quantity: number,
  discount: number,
  status: ReactElement,
  action: ReactElement
};

const Orders = () => {
  const [rows] = useState<DataType[]>([
    {
      _id: 'aa1',
      amount: 120000,
      quantity: 2,
      discount: 5000,
      status: <span></span>,
      action: <Link to={`/order/aa1`}>View</Link>
    },
    {
      _id: 'aa2',
      amount: 100000,
      quantity: 1,
      discount: 2000,
      status: <span></span>,
      action: <Link to={`/order/aa2`}>View</Link>
    }
  ]);
  return (
    <div className="section-contianer">
      <h4>My Orders</h4>
      <div>
        <h4>Orders</h4>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Quantity</th>
              <th scope="col">Discount</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((e) => (
            <tr key={e._id}>
              <th scope="row">{e._id}</th>
              <td>{e.quantity}</td>
              <td>{e.discount}</td>
              <td>{e.amount}</td>
              <td>{e.status}</td>
              <td>{e.action}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders