import { useContext } from "react";
import { InventoryContext } from "../hook/InventoryContext";
import { DepartmentType } from "../database/DepartmentType";

export const Header = ({ setShowModal }) => {
  const { dispatchInventoryState } = useContext(InventoryContext);

  const sortingArray = ["NAME", "PRICE", "STOCK"];

  return (
    <header className="d-flex justify-content-around mt-3 mb-3 header-case">
      <h3 className="line-height">Products</h3>
      <select
        onChange={(event) =>
          dispatchInventoryState({
            type: "FILTER_DEPARTMENT",
            payload: event.target.value
          })
        }
      >
        {DepartmentType?.map((item, index) => {
          return (
            <option id="option-cls" value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>

      <div className="checkbox-wrapper-1">
        <input
          className="substituted"
          type="checkbox"
          id="lowstock"
          onChange={(event) =>
            dispatchInventoryState({
              type: "INCLUDE_LOW_STOCK",
              payload: !event.target.checked
            })
          }
        />
        <label htmlFor="lowstock">Low Stock Item</label>
      </div>

      <select
        onChange={(event) =>
          dispatchInventoryState({
            type: "SORTING",
            payload: event.target.value
          })
        }
      >
        {sortingArray.map((item, index) => {
          return (
            <option id="option-cls" value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>

      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        New
      </button>
    </header>
  );
};
