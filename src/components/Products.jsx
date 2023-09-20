import { useState, useEffect } from 'react'

export const Products = () => {
   const [product, setProduct] = useState([])
   useEffect(() => {
      const getProductsData = () => {
         fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => setProduct(data))
      }
      getProductsData()
   }, [])

   console.log(product)

   const productsRow = product.slice(0, 4)
   return (
      <>
         {productsRow.map(product => (
            <div className='py-2' key={product.id}>
               <img
                  className="w-60 m-auto rounded-2xl"
                  src={product.image}
                  alt={product.title}
               />
               <ul className="text-center mt-2">
                  <li className="uppercase font-bold">{product.title}</li>
                  <li>${product.price}</li>
                  <li>
                     <button>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="icon icon-tabler icon-tabler-shopping-bag-plus"
                           width="34"
                           height="34"
                           viewBox="0 0 24 24"
                           strokeWidth="2"
                           stroke="currentColor"
                           fill="none"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                           ></path>
                           <path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"></path>
                           <path d="M16 19h6"></path>
                           <path d="M19 16v6"></path>
                           <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                        </svg>
                     </button>
                  </li>
               </ul>
            </div>
         ))}
      </>
   )
}
