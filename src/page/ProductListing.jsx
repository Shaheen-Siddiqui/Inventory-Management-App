import { useContext, useState } from "react";
import { Header } from "../component/Header";
import { Modal } from "../component/Modal";
import { Product } from "../component/Product";
import { InventoryContext } from "../hook/InventoryContext";

export const ProductListing = () => {
  const [showModal, setShowModal] = useState(false);

  const { sortAccordingly, totalLowStock } = useContext(InventoryContext);

  return (
    <>
      <Header setShowModal={setShowModal} />
      <table className="table">
        <thead className="table-headers">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        {totalLowStock.map((item) => {
          return (
            <tbody>
              <Product item={item} key={item.id} />
            </tbody>
          );
        })}
      </table>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};
