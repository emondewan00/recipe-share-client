import ProductCard from "./ProductCard";

const RelatedSection = () => {
  return (
    <div className="bg-white shadow p-8">
      <h1 className="text-2xl font-bold">Related Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default RelatedSection;
