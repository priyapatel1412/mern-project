import "./App.css";
import React from "react";
import Header from "./components/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Products/Products";
import Search from "./components/Search/Search";
import Topbar from "./components/Topbar/Topbar";
import Login from "./components/User/Login";
import store from "./store";
import { loadUser } from "./actions/userAction";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Payment from "./components/Cart/Payment";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./components/Cart/OrderSuccess";
import MyOrders from "./components/Order/MyOrders";
import OrderDetails from "./components/Order/OrderDetails";
import Dashboard from "./components/Admin/Dashboard";
import ProductList from "./components/Admin/ProductList";
import NewProduct from "./components/Admin/NewProduct";
import UpdateProduct from "./components/Admin/UpdateProduct";
import OrderList from "./components/Admin/OrderList";
import ProcessOrder from "./components/Admin/ProcessOrder";
import UsersList from "./components/Admin/UsersList";
import UpdateUser from "./components/Admin/UpdateUser";
import ProductReviews from "./components/Admin/ProductReviews";
import Contact from "./components/layout/Contact/Contact";
import About from "./components/layout/About/About";
import NotFound from "./components/layout/Not Found/NotFound";

function App() {
  const [stripeApiKey, setStripeApiKey] = React.useState("");

  // getStripeAPiKey from backend
  async function getStripeAPiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
    console.log("stripeApiKey", data.stripeApiKey);
  }

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeAPiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Topbar />
      {/* <Header /> */}
      {/* 
      {isAuthenticated && <UserOptions user={user} />} */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route path="/products/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/contacts" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/account"
          isAdmin="true"
          element={<ProtectedRoute />}
        >
          <Route exact path="/account" element={<Profile />} />
        </Route>
        <Route
          exact
          path="/me/update"
          isAdmin="true"
          element={<ProtectedRoute />}
        >
          <Route exact path="/me/update" element={<UpdateProfile />} />
        </Route>
        <Route
          exact
          path="/password/update"
          isAdmin="true"
          element={<ProtectedRoute />}
        >
          <Route exact path="/password/update" element={<UpdatePassword />} />
        </Route>
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route
          exact
          path="/login/shipping"
          isAdmin="true"
          element={<ProtectedRoute />}
        >
          <Route exact path="/login/shipping" element={<Shipping />} />
        </Route>
        <Route
          exact
          path="/order/confirm"
          isAdmin="true"
          element={<ProtectedRoute />}
        >
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
        </Route>
        <Route
          exact
          path="/process/payment"
          isAdmin="true"
          element={<ProtectedRoute />}
        >
          {stripeApiKey && (
            <Route
              exact
              path="/process/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              }
            />
          )}
        </Route>
        <Route
          exact
          path="/success"
          isAdmin="true"
          element={<ProtectedRoute />}
        >
          <Route exact path="/success" element={<OrderSuccess />} />
        </Route>
        <Route exact path="/orders" isAdmin="true" element={<ProtectedRoute />}>
          <Route exact path="/orders" element={<MyOrders />} />
        </Route>
        <Route
          exact
          path="/order/:id"
          isAdmin="true"
          element={<ProtectedRoute />}
        >
          <Route exact path="/order/:id" element={<OrderDetails />} />
        </Route>
        <Route
          exact
          path="/admin/dashboard"
          isAdmin="true"
          element={<Dashboard />}
        >
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          exact
          path="/admin/products"
          isAdmin="true"
          element={<ProductList />}
        >
          <Route exact path="/admin/products" element={<ProductList />} />
        </Route>
        <Route
          exact
          path="/admin/product"
          isAdmin="true"
          element={<NewProduct />}
        >
          <Route exact path="/admin/product" element={<NewProduct />} />
        </Route>
        <Route
          exact
          path="/admin/product/:id"
          isAdmin="true"
          element={<UpdateProduct />}
        >
          <Route exact path="/admin/product/:id" element={<UpdateProduct />} />
        </Route>
        <Route
          exact
          path="/admin/orders"
          isAdmin="true"
          element={<OrderList />}
        >
          <Route exact path="/admin/orders" element={<OrderList />} />
        </Route>
        <Route
          exact
          path="/admin/order/:id"
          isAdmin="true"
          element={<ProcessOrder />}
        >
          <Route exact path="/admin/order/:id" element={<ProcessOrder />} />
        </Route>
        <Route exact path="/admin/users" isAdmin="true" element={<UsersList />}>
          <Route exact path="/admin/users" element={<UsersList />} />
        </Route>
        <Route
          exact
          path="/admin/user/:id"
          isAdmin="true"
          element={<UpdateUser />}
        >
          <Route exact path="/admin/user/:id" element={<UpdateUser />} />
        </Route>
        <Route
          exact
          path="/admin/reviews"
          isAdmin="true"
          element={<ProductReviews />}
        >
          <Route exact path="/admin/reviews" element={<ProductReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
