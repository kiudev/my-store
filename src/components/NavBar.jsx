export const NavBar = () => {
   return (
      <nav className="bg-black mt-20 -mb-20 p-2">
         <ul className="text-white flex justify-center gap-10 text-lg flex-wrap">
            <li className="hover:underline underline-offset-8"><a href="#">Electronics</a></li>
            <li className="hover:underline underline-offset-8"><a href="#">Jewelery</a></li>
            <li className="hover:underline underline-offset-8"><a href="#">Men&apos;s Clothing</a></li>
            <li className="hover:underline underline-offset-8"><a href="#">Women&apos;s Clothing</a></li>
         </ul>
      </nav>
   )
}