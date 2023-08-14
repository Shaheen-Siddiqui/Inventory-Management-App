import { useContext } from "react";
import { InventoryContext } from "../hook/InventoryContext";

export const Dashboard = () => {
  const { totalStock, totalDelever, allInventory } = useContext(
    InventoryContext
  );

  const totalLowStock = allInventory.filter((item) => item.stock <= 10);

  return (
    <div className="d-flex gap-3 dashboard-case">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body-dash">
          <h5 className="card-text-green">{totalStock}</h5>
          <p>Total Stock</p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body-dash">
          <h5 className="card-title text-warning card-text-orange">
            {totalDelever}
          </h5>
          <p>Total Delivered</p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body-dash">
          <h5 className="card-title text-danger card-text-red">
            {totalLowStock?.length}
          </h5>
          <p>Low Stock Items</p>
        </div>
      </div>
    </div>
  );
};
