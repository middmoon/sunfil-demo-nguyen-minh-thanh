import ProductListFilter from "@/components/product/ProductListFilter";
import ProductFilterSidebar from "@/components/product/ProductFilterSidebar";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/sample-data";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filter Sidebar */}
        <div className="lg:col-span-1">
          <ProductFilterSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <ProductListFilter />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
