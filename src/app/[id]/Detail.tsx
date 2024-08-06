"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useStore from "@/store";
import { getDataDetail } from "@/api/product";

const Detail = () => {
  interface Product {
    title: string;
    description: string;
    price: number;
    tags: Array<string>;
  }

  const { isLoading, setIsLoading } = useStore();
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleData = async () => {
      setIsLoading(true);

      try {
        const response = await getDataDetail(id);
        setProduct(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSingleData();
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      {isLoading && <p>Loading...</p>}
      {product && (
        <div className="flex justify-center items-center w-full flex-col">
          <span>{product.title}</span>
          <span>{product.description}</span>
          <span>{product.price}</span>
          <span className="flex gap-4">
            {product.tags.map((item: any, index) => (
              <span key={index}>{item}</span>
            ))}
          </span>
        </div>
      )}
    </div>
  );
};

export default Detail;
