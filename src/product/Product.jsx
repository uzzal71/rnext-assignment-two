import { useState } from "react";
import starIcon from "../assets/star.svg";
import SearchProduct from "./SearchProduct";
import SortProduct from "./SortProduct";

const productInitial = [
  {
    id: crypto.randomUUID(),
    name: "Business Continuity Management System",
    writtenBy: "Jianping Shi",
    price: 220,
    rating: 4,
    publicationYear: 2021,
    isFavorite: false,
    thumbnailUrl:
      "https://cdn.beeda.com/public/uploads/all/SZnjtFM53sSqQIM4gtziFhTscWutVK7vAfDPGiCs.webp",
  },
  {
    id: crypto.randomUUID(),
    name: "A Promised Land",
    writtenBy: "Barack Obama",
    price: 176,
    rating: 5,
    publicationYear: 2022,
    isFavorite: false,
    thumbnailUrl:
      "https://cdn.beeda.com/public/uploads/all/HVsitX5nm49W4DESF5UplTCsHPTEgtZIv0Kgt4fI.webp",
  },
  {
    id: crypto.randomUUID(),
    name: "Talking To Strangers",
    writtenBy: "Malcolm Gladwell",
    price: 130,
    rating: 3,
    publicationYear: 2021,
    isFavorite: false,
    thumbnailUrl: "https://cdn.beeda.com/public/uploads/all/87390319590.webp",
  },
  {
    id: crypto.randomUUID(),
    name: "Media Events In A Global Age",
    writtenBy: "Nick Couldry",
    price: 119,
    rating: 5,
    publicationYear: 2022,
    isFavorite: false,
    thumbnailUrl:
      "https://cdn.beeda.com/public/uploads/all/uWcOnC5o13MuXAwudZr9Z7ml0WBAf7IraxuGRQQN.webp",
  },
  {
    id: crypto.randomUUID(),
    name: "Introduction To Public Health",
    writtenBy: "Mary Jane Schneider",
    price: 145,
    rating: 2,
    publicationYear: 2024,
    isFavorite: false,
    thumbnailUrl:
      "https://cdn.beeda.com/public/uploads/all/ZHfwTuOAmolFfxKxMQXPJ68nv475coDMANtI9p7J.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Introduction To Public Health",
    writtenBy: "Mary Jane Schneider",
    price: 145,
    rating: 4,
    publicationYear: 2021,
    isFavorite: false,
    thumbnailUrl:
      "https://cdn.beeda.com/public/uploads/all/ZHfwTuOAmolFfxKxMQXPJ68nv475coDMANtI9p7J.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Using Macromedia Director MX",
    writtenBy: "Gary Rosenzweig",
    price: 131,
    rating: 1,
    publicationYear: 2020,
    isFavorite: false,
    thumbnailUrl:
      "https://cdn.beeda.com/public/uploads/all/ChpnanPkAykERzuK4dnyporSN5YiusMVUefFySZK.webp",
  },
  {
    id: crypto.randomUUID(),
    name: "From Word to Image",
    writtenBy: "Marcie Begleiter",
    price: 131,
    rating: 5,
    publicationYear: 2023,
    isFavorite: false,
    thumbnailUrl:
      "https://cdn.beeda.com/public/uploads/all/U6Nn3BmqKgpXLoV2mX60b5NYdwgrjXwzbwK7Qwvn.webp",
  },
  {
    id: crypto.randomUUID(),
    name: "Born A Crime: Stories From A South African Childhood",
    writtenBy: "Trevor Noah",
    price: 111,
    rating: 4,
    publicationYear: 2022,
    isFavorite: false,
    thumbnailUrl:
      "https://cdn.beeda.com/public/uploads/all/1v4IoiLtL7vz4XurSb9nO3v0wHUffraEr4X5Q2lM.webp",
  },
  {
    id: crypto.randomUUID(),
    name: "Ultimate Presentations",
    writtenBy: "Jay Surti",
    price: 108,
    rating: 3,
    publicationYear: 2023,
    isFavorite: false,
    thumbnailUrl:
      "https://cdn.beeda.com/public/uploads/all/uFeowSMRP8qo4W20Hz9ApQJgjE0TRXhSB24hfMmf.jpg",
  },
];

export default function Product() {
  const [products, setProducts] = useState(productInitial);

  function handelSearch(searchTerm) {
    const filteredProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProducts([...filteredProduct]);
  }

  function handelSort(sortTerm) {
    let sortedProducts = [...products];

    switch (sortTerm) {
      case "name_asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name_desc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "year_asc":
        sortedProducts.sort((a, b) => a.publicationYear - b.publicationYear);
        break;
      case "year_desc":
        sortedProducts.sort((a, b) => b.publicationYear - a.publicationYear);
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  }

  function handleFavorite(productId) {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          isFavorite: !product.isFavorite,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  }

  return (
    <main className="my-10 lg:my-14">
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
              Trending Books of the Year
            </h2>
            <SearchProduct onSearch={handelSearch} />
          </div>
          <SortProduct onSort={handelSort} />
        </div>
      </header>
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div className="space-y-3" key={product.id}>
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
              <img
                className="max-w-[144px]"
                src={product.thumbnailUrl}
                alt={product.name}
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold lg:text-xl">
                {product.name}({product.publicationYear})
              </h4>
              <p className="text-xs lg:text-sm">
                By : <span>{product.writtenBy}</span>
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">
                  ${product.price}
                </h4>
                <div className="flex items-center space-x-1">
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <span className="text-xs lg:text-sm">
                    ({product.rating} Star)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <button
                  onClick={() => handleFavorite(product.id)}
                  className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md ${
                    product.isFavorite
                      ? "bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5"
                      : "flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Favourite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
