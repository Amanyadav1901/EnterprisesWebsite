"use client";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Catalog } from "../../constants";
import EmblaCarousel from "../ImageSlider/Embla/EmblaCarousel";

export default function Example() {
  const cat = useParams();

  useEffect(() => {}, [cat]);

  const product = Catalog[cat.category][0][cat.subCategory][cat.productId];

  return (
    <div className="bg-white">
      <div className="block w-full h-20"></div>
      <div className="pt-6 ">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li className="text-sm">
              <a
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.imageTitle}
              </a>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col md:flex-row">
          {/* Image gallery */}
          <div className="mx-auto mt-6 sm:px-6  lg:gap-x-8 lg:px-8 ">
            <img
              alt={product.imageTitle}
              src={product.imageUrl}
              className=" size-full rounded-lg object-cover block"
            />
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6  lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}

            <div className="py-10   lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.imageTitle}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {product.imageDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full justify-center h-auto m-5 mx-0 border border-black-100 rounded-xl object-contain">
          <EmblaCarousel />
        </div>
      </div>
    </div>
  );
}
