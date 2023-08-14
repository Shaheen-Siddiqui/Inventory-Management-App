export const InventoryReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOCAL_STORAGE":
      return {
        allInventory: payload
      };
    case "FILTER_DEPARTMENT":
      return {
        ...state,
        filterDepartMentType: payload
      };
    case "INCLUDE_LOW_STOCK":
      return {
        ...state,
        includeLowStock: !payload
      };
    case "SORTING":
      return {
        ...state,
        sortingType: payload
      };
    case "SET_INVENTORY_DETAIL":
      const { name, value } = payload;
      return {
        ...state,
        ventoryDetail: { ...state.ventoryDetail, [name]: value }
      };
    case "GET_INVENTORY_DETAIL":
      const getInventoryDetail = [...state.allInventory, state.ventoryDetail];

      localStorage.setItem("product", JSON.stringify(getInventoryDetail));
      return {
        ...state,
        allInventory: getInventoryDetail,
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
      };

    default:
      break;
  }
};
