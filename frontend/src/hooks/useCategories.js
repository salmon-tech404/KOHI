import { useState, useEffect } from "react";
import { getCategories } from "../api/admin";

export default function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch(() => {});
  }, []);

  return categories;
}
