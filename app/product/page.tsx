import Product from "./components/Product";

export default function page() {
  return (
    <div className="w-96 border mx-auto rounded-md">
      <div className="w-full border-b text-center p-2">All Products</div>
      <Product />
    </div>
  );
}
