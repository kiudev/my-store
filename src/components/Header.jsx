export const Header = () => {
   return (
      <header className="bg-black p-4 fixed mx-auto right-5 hover:p-8 transition-all">
         <ul className="text-white flex justify-center gap-5 items-center text-lg">
            <li className="hover:underline underline-offset-8 und transition-all text-center">
               <a href="#">SHOP</a>
            </li>
            <li className="hover:underline underline-offset-8 und transition-all text-center">
               <a href="#">ABOUT US</a>
            </li>
            <li>
               <a href="#">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="icon icon-tabler icon-tabler-user"
                     width="30"
                     height="30"
                     viewBox="0 0 24 24"
                     strokeWidth="2"
                     stroke="currentColor"
                     fill="none"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                     <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                  </svg>
               </a>
            </li>
            <li>
               <a href="#">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="icon icon-tabler icon-tabler-basket"
                     width="30"
                     height="30"
                     viewBox="0 0 24 24"
                     strokeWidth="2"
                     stroke="currentColor"
                     fill="none"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                     <path d="M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304z"></path>
                     <path d="M17 10l-2 -6"></path>
                     <path d="M7 10l2 -6"></path>
                  </svg>
               </a>
            </li>
            <li>
               <a href="#"></a>
            </li>
         </ul>
      </header>
   )
}
