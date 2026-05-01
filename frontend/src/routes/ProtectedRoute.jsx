import { Navigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import PropTypes from "prop-types";

export default function ProtectedRoute({ children }) {
  const items = useCartStore((state) => state.items);
  if (items.length === 0) return <Navigate to='/' replace />;
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
