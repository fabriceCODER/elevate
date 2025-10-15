import { useState, useEffect } from "react";
import { Product } from "@/data/products";
import { products as initialProducts } from "@/data/products";

const STORAGE_KEY = "elevate_products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Load products from localStorage or use initial data
  useEffect(() => {
    const storedProducts = localStorage.getItem(STORAGE_KEY);
    if (storedProducts) {
      try {
        setProducts(JSON.parse(storedProducts));
      } catch (error) {
        console.error("Failed to parse stored products:", error);
        setProducts(initialProducts);
      }
    } else {
      setProducts(initialProducts);
    }
    setLoading(false);
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }
  }, [products, loading]);

  const addProduct = async (newProductData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...newProductData,
      id: Date.now().toString(), // Simple ID generation
    };

    setProducts(prev => [...prev, newProduct]);
    return newProduct;
  };

  const updateProduct = async (id: string, updatedData: Partial<Omit<Product, 'id'>>) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id ? { ...product, ...updatedData } : product
      )
    );
  };

  const deleteProduct = async (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (category: string) => {
    return category === "all"
      ? products
      : products.filter(product => product.category === category);
  };

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProductsByCategory,
  };
};

export default useProducts;
