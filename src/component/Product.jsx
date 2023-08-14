import { useNavigate } from "react-router-dom";

export const Product = ({ item }) => {
  const navigate = useNavigate();
  const { id, name, description, price, stock, supplier, imageUrl } = item;
  return (
    <tr onClick={() => navigate(`/product/${id}`)} id="item-row">
      <td>
        <img src={imageUrl} className="img-with" alt={id} />
      </td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td>{supplier}</td>
    </tr>
  );
};
