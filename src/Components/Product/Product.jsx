"use client";

import { useEffect, useState } from "react";
import { Disclosure, DisclosureButton } from "@headlessui/react";

import ProductCard from "./ProductCard";
import { Link, useParams } from "react-router-dom";
import { Catalog } from "../../constants";
import EmblaCarousel from "../ImageSlider/Embla/EmblaCarousel";

const filters = [
  {
    title: "Cleaning Machinery",
  },
  {
    title: "Uniforms",
  },
  {
    title: "Dispensers",
  },
  {
    title: "Housekeeping Chemicals",
  },
  {
    title: "Accessories",
  },
  {
    title: "Trolley & Buckets",
  },
  {
    title: "Cleaning Tools",
  },
  {
    title: "Cleaning Products",
  },
];

const Product = () => {
  const [category, setcategory] = useState();
  const cat = useParams();

  useEffect(() => {
    setcategory(cat.category);
  }, [cat]);

  // console.log(Catalog[category]);

  return (
    <div className="bg-white items-center w-screen">
      <div>
        <main className="mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {category}
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-[300px_minmax(900px,_1fr)]">
              <form className="hidden lg:block">
                <div className="py-2 flex justify-between items-center">
                  <h1 className="text-lg opacity-50 font-bold text-left">
                    Filters
                  </h1>
                </div>
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    className="border-b border-gray-200 py-2"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          <Link
                            to={`/product/${section.title}`}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                          >
                            {section.title}
                          </Link>
                        </span>
                      </DisclosureButton>
                    </h3>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div>
                {Catalog[category]?.map((item, index) => {
                  return (
                    <div className="bg-white">
                      {Object.entries(item).map(([heading, products]) => {
                        return (
                          <>
                            <h3 className=" font-bold capitalize text-[30px]">
                              {heading}
                            </h3>
                            <div className=" grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                              {products.map((productItem) => (
                                <ProductCard
                                  productItem={productItem}
                                  category={category}
                                  subCategory={heading}
                                />
                              ))}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" w-full justify-center h-auto m-5 mx-0 border border-black-100 rounded-xl object-contain">
              <EmblaCarousel />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Product;
