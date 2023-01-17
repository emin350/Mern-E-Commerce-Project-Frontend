import React from "react";
import classes from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../../redux/cartSlice";
import { logout } from "../../redux/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showCart, products } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleToggleCart = () => {
    dispatch(toggleShowCart());
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to={"/"} className={classes.left}>
          <h1 className={classes.title}>WebDevMania</h1>
        </Link>

        <div className={classes.right}>
          <Link to="/create" className={classes.createBtn}>
            Create product
          </Link>
          <span className={classes.username}>AR</span>
          <span className={classes.logoutBtn} onClick={handleLogout}>
            Logout
          </span>

          <div className={classes.cartContainer} onClick={handleToggleCart}>
            <AiOutlineShoppingCart />
            <span className={classes.cartNumber}>{products?.length || 0}</span>
          </div>
        </div>
        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
