import { useContext } from "react";
import { useParams } from "react-router-dom";
import { InventoryContext } from "../hook/InventoryContext";

export const DetailedProduct = () => {
  const { productID } = useParams();
  const { allInventory } = useContext(InventoryContext);

  const Matched = allInventory.find((item) => item.id == productID);

  // const {
  //   id,
  //   department,
  //   name,
  //   description,
  //   price,
  //   stock,
  //   sku,
  //   supplier,
  //   delivered,
  //   imageUrl
  // } = item;
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={Matched.imageUrl}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-start">
            <h5 className="card-title">{Matched?.name}</h5>
            <div className="card-text">
              <p>
                <strong>Price</strong>
                {Matched?.price}
              </p>

              <p>
                <strong>Stock</strong>
                {Matched?.stock}
              </p>
              <p>
                <strong>Supplier BlenMaster</strong>
                {Matched?.supplier}
              </p>
              <p>
                <strong>Department</strong>
                {Matched?.department}
              </p>
              <p>
                <strong>SKU</strong>
                {Matched?.sku}
              </p>
              <p>
                <strong>Delivered</strong>
                {Matched?.delivered}
              </p>
            </div>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
