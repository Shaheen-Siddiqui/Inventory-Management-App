import { useContext } from "react";
import { InventoryContext } from "../hook/InventoryContext";
import { useNavigate } from "react-router-dom";
import { DepartmentType } from "../database/DepartmentType";

export const Department = () => {
  const navigate = useNavigate();
  const { dispatchInventoryState } = useContext(InventoryContext);

  return (
    <div className="d-flex gap-3 dashboard-case">
      {DepartmentType.map((item, index) => {
        return (
          <div
            key={index}
            style={{ width: "18rem" }}
            className="card"
            id="pointer-card"
            onClick={(event) => {
              dispatchInventoryState({
                type: "FILTER_DEPARTMENT",
                payload: item
              });
              navigate("/product");
            }}
          >
            <div className="card-body">
              <h3 className="card-title">{item}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
