// "use client";

// import { useEffect, useState } from "react";

export default async function Product() {
  //   const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await fetch("https://dummyjson.com/products");
  //       const getData = await data.json();

  //       setProducts(getData?.products);
  //     };
  //     fetchData();
  //   }, []);

  const data = await fetch("https://dummyjson.com/products");
  const getData = await data.json();
  const products = getData.products;
  return (
    <div>
      <h1 className="text-center py-5">Total Products {products.length}</h1>
      <ul>
        {products?.map((product: any, index: any) => (
          <li key={index} className="border m-2 shadow-sm rounded-sm">
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
