import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, deleteProduct, setLoading } from "../Redux/reducers/FetchedData";
import "../App.css"; // Import CSS file

const ProductList = () => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(process.env.REACT_APP_SERVER);
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      dispatch(setLoading(false));
    };

    fetchProducts();
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      console.log(`process.env.REACT_APP_SERVER/${id}`);
      const response = await fetch(`${process.env.REACT_APP_SERVER}/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
  
      dispatch(deleteProduct(id)); // Update Redux store
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ul className="product-list">
          {products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            products.map((product) => (
              <li key={product._id} className="product-item">
                <div className="product-details">
                  <strong className="product-name">{product.name}</strong> - 
                  <span className="product-price"> {product.price}</span>
                  <p className="product-description">{product.description}</p>
                </div>
                <button className="delete-btn" onClick={() => handleDelete(product._id)}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
