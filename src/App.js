import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import "./App.css"; // Import the CSS file


function App() {

  // const {product_list} = useSelector((state)=>state.data);
  // console.log("list is - ", product_list);
  // const dispatch = useDispatch();

  // const fetchData = async()=>{
  //   const response = await fetch(`${process.env.REACT_APP_SERVER}`);
  //   const d = await response.json();
  //   console.log(d);
  //   return d;
  // }

  // useEffect(() => {
  //   fetchData().then((data)=>{
  //     dispatch(setList(data));
  //   });
      
  // }, [dispatch]);


  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1>🛍 Product Management</h1>
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/products">📦 Products</Link></li>
            <li><Link to="/add-product">➕ Add Product</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2 className="page-title">Welcome to Product Management</h2>} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
