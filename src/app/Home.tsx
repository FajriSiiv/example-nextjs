"use client";

import { getData } from "@/api/product";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import useStore from "../store";

const Homepage = () => {
  const { isLoading, setIsLoading } = useStore();

  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getData(limit);
      setProduct(response.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addingProduct = async () => {
    setIsLoading(true);
    try {
      const newLimit = limit + 10;
      setLimit(newLimit);
      const response = await getData(limit);
      setProduct((prevProducts): any => [
        ...prevProducts,
        ...response.products,
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {product.map((item: any) => (
          <div className="border p-2 flex flex-col" key={item.id}>
            <span>{item.title}</span>

            <a href={`/${item.id}`}>Link</a>
          </div>
        ))}
        {isLoading && <p>Loading...</p>}
      </div>
      <div className="flex gap-2 mt-20">
        <Button
          className="border  p-2"
          onClick={addingProduct}
          disabled={isLoading}
        >
          Fetching Data
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
