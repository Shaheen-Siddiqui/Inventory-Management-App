import { createContext, useEffect, useReducer } from "react";
import { InventoryReducer } from "./InventoryReducer";
import { inventoryData } from "../database/data";
import { DepartmentType } from "../database/DepartmentType";

export const InventoryContext = createContext(null);

export const InventoryContextProvider = ({ children }) => {
  const [
    {
      allInventory,
      filterDepartMentType,
      ventoryDetail,
      departMentType,
      sortingType,
      includeLowStock
    },
    dispatchInventoryState
  ] = useReducer(InventoryReducer, {
    allInventory: inventoryData,
    departMentType: DepartmentType,
    filterDepartMentType: "",
    includeLowStock: false,
    sortingType: "NAME",
    ventoryDetail: {
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: ""
    }
  });

  const totalStock = allInventory.reduce(
    (acc, item) => (acc += Number(item.stock)),
    0
  );
  const totalDelever = allInventory.reduce(
    (acc, item) => (acc += Number(item.delivered)),
    0
  );

  const filterAccordingly =
    filterDepartMentType?.length > 0
      ? allInventory.filter((item) => item.department === filterDepartMentType)
      : allInventory;

  const sortAccordingly =
    sortingType === "PRICE"
      ? filterAccordingly.sort((a, b) => a.price - b.price)
      : sortingType === "STOCK"
      ? filterAccordingly.sort((a, b) => a.stock - b.stock)
      : sortingType === "NAME"
      ? filterAccordingly.sort((a, b) => a.name.localeCompare(b.name))
      : filterAccordingly;

  const totalLowStock = includeLowStock
    ? sortAccordingly.filter((item) => item.stock <= 10)
    : sortAccordingly;

  useEffect(() => {
    const isPersist = localStorage.getItem("product");

    if (isPersist) {
      const obtainData = JSON.parse(isPersist);
      dispatchInventoryState({ type: "LOCAL_STORAGE", payload: obtainData });
    } else {
      localStorage.setItem("product", JSON.stringify(allInventory));
      dispatchInventoryState({ type: "LOCAL_STORAGE", payload: allInventory });
    }
  }, []);

  return (
    <InventoryContext.Provider
      value={{
        departMentType,
        allInventory,
        totalDelever,
        dispatchInventoryState,
        totalStock,
        totalLowStock,
        filterAccordingly,
        sortAccordingly,
        ventoryDetail
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
