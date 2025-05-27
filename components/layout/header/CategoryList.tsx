"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CategoryProductCarousel from "./CategoryProductCarousel";

import type { Product } from "@/data/type";
import { cn } from "@/lib/utils";
import { categories } from "@/data/sample-data";
import type { Category } from "@/types";
import Image from "next/image";

type CategoryListProps = {
  products?: Product[];
};

export default function CategoryList({ products }: CategoryListProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="gap-2">
            <Filter className="w-4 h-4" />
            Danh Mục Sản Phẩm
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[1000px] flex">
              {/* Categories List */}
              <div className="w-1/3 border-r border-gray-100">
                {categories.map((category) => {
                  return (
                    <NavigationMenuLink
                      key={category.id}
                      className={cn(
                        "flex items-center gap-3 cursor-pointer transition-colors duration-150 w-full p-2",
                        selectedCategory.id === category.id
                          ? "bg-blue-50 border-r-2 border-primary text-primary"
                          : "hover:bg-gray-50"
                      )}
                      onMouseEnter={() => setSelectedCategory(category)}
                      asChild
                    >
                      <div className="flex flex-row items-center gap-3">
                        <Image
                          src={category.img_url || "/placeholder.svg"}
                          alt={category.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        ></Image>
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                      </div>
                    </NavigationMenuLink>
                  );
                })}
              </div>

              {/* Subcategories */}
              <div className="flex flex-col flex-1 overflow-hidden px-4 py-4">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={selectedCategory.img_url || "/placeholder.svg"}
                      alt={selectedCategory.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/placeholder.svg?height=48&width=48`;
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {selectedCategory.name}
                  </h3>
                </div>

                {/* Subcategoriesl*/}
                <div className="grid grid-cols-3 gap-3 mx-auto">
                  {selectedCategory.sub_categories?.length ? (
                    selectedCategory.sub_categories.map((subcategory) => (
                      <NavigationMenuLink
                        key={subcategory.id}
                        className="flex items-center gap-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-150 border border-gray-100 px-3 py-2 h-[56px]"
                        asChild
                      >
                        <div className="flex flex-row items-center gap-2">
                          <div className="relative w-10 h-10 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image
                              src={subcategory.img_url || "/placeholder.svg"}
                              alt={subcategory.name}
                              fill
                              className="object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `/placeholder.svg?height=40&width=40`;
                              }}
                            />
                          </div>
                          <span className="text-sm text-gray-700 hover:text-primary font-medium truncate">
                            {subcategory.name}
                          </span>
                        </div>
                      </NavigationMenuLink>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500 italic">
                      Không có danh mục con
                    </div>
                  )}
                </div>

                {/* Product Carousel */}
                {products && products.length > 0 && (
                  <div className="mt-auto px-2 py-2">
                    <CategoryProductCarousel products={products} />
                  </div>
                )}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
