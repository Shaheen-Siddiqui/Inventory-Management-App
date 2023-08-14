import { useContext } from "react";
import { InventoryContext } from "../hook/InventoryContext";

export const Modal = ({ setShowModal }) => {
  const { dispatchInventoryState, ventoryDetail } = useContext(
    InventoryContext
  );

  const inputHandler = (event) => {
    const { name, value } = event.target;
    dispatchInventoryState({
      type: "SET_INVENTORY_DETAIL",
      payload: { name, value }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatchInventoryState({ type: "GET_INVENTORY_DETAIL" });
    setShowModal(false);
  };
  return (
    <form className="modal-box" onSubmit={submitHandler}>
      <div className="modal-content">
        <u>
          <h1>Add new product</h1>
        </u>
        <label htmlFor="departMent" className="text-start">
          Depart Ment
        </label>

        <div class="input-group mb-3 ">
          <input
            required
            name="department"
            value={ventoryDetail?.department}
            onChange={inputHandler}
            id="departMent"
            type="text"
            class="form-control-modal"
            placeholder="department"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <label htmlFor="name" className="text-start">
          Name
        </label>

        <div class="input-group mb-3 ">
          <input
            required
            name="name"
            value={ventoryDetail?.name}
            onChange={inputHandler}
            id="name"
            type="text"
            class="form-control-modal"
            placeholder="name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <label htmlFor="Description" className="text-start">
          Description
        </label>

        <div class="input-group mb-3 ">
          <input
            required
            name="description"
            value={ventoryDetail?.description}
            onChange={inputHandler}
            id="Description"
            type="text"
            class="form-control-modal"
            placeholder="Description"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <label htmlFor="Price" className="text-start">
          Price
        </label>

        <div class="input-group mb-3 ">
          <input
            required
            name="price"
            value={ventoryDetail?.price}
            onChange={inputHandler}
            id="Price"
            type="number"
            class="form-control-modal"
            placeholder="Price"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <label htmlFor="stock" className="text-start">
          stock
        </label>

        <div class="input-group mb-3 ">
          <input
            required
            name="stock"
            value={ventoryDetail?.stock}
            onChange={inputHandler}
            id="stock"
            type="number"
            class="form-control-modal"
            placeholder="stock"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <label htmlFor="SKU" className="text-start">
          SKU
        </label>

        <div class="input-group mb-3 ">
          <input
            required
            name="sku"
            value={ventoryDetail?.sku}
            onChange={inputHandler}
            id="SKU"
            type="text"
            class="form-control-modal"
            placeholder="SKU"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <label htmlFor="Supplier" className="text-start">
          Supplier
        </label>

        <div class="input-group mb-3 ">
          <input
            required
            name="supplier"
            value={ventoryDetail?.supplier}
            onChange={inputHandler}
            id="Supplier"
            type="text"
            class="form-control-modal"
            placeholder="Supplier"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <label htmlFor="Delevered" className="text-start">
          Delevered
        </label>

        <div class="input-group mb-3 ">
          <input
            required
            name="delivered"
            value={ventoryDetail?.delivered}
            onChange={inputHandler}
            id="Delevered"
            type="number"
            class="form-control-modal"
            placeholder="Delevered"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <label htmlFor="Image Url" className="text-start">
          Image Url
        </label>

        <div class="input-group mb-3 ">
          <input
            required
            name="imageUrl"
            value={ventoryDetail?.imageUrl}
            onChange={inputHandler}
            id="Image Url"
            type="text"
            class="form-control-modal"
            placeholder="Image Url"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="btn-flex">
          <div>
            <button className="btn btn-success m-2" type="submit">
              ADD PRODUCT
            </button>
          </div>
          <div>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => setShowModal(false)}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
