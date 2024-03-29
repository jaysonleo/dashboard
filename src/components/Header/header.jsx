import { useEffect } from "react";
export default function Header() {
    useEffect(() => {
        var mobileMenuButton = document.getElementById("mobileMenuButton");
    mobileMenuButton.onclick = function() {
        document.getElementById("sideMenuHideOnMobile").classList.toggle("-translate-y-full");
        document.getElementById("sideMenuHideOnMobile").classList.toggle("mt-12");
        document.getElementById("sideMenuHideOnMobile").classList.toggle("shadow");
        document.getElementById("mobileMenuButtonClose").classList.toggle("hidden");
        document.getElementById("mobileMenuButtonOpen").classList.toggle("hidden");
    }
      // Hide element when click outside nav
    var theElementContainer = document.getElementsByTagName("nav")[0];
    document.addEventListener('click', function(event) {
        if (!theElementContainer.contains(event.target)) {
            document.getElementById("sideMenuHideOnMobile").classList.add("-translate-y-full");
            document.getElementById("sideMenuHideOnMobile").classList.remove("mt-12");
            document.getElementById("sideMenuHideOnMobile").classList.remove("shadow");
            document.getElementById("mobileMenuButtonOpen").classList.remove("hidden");
            document.getElementById("mobileMenuButtonClose").classList.add("hidden");
        }
    });
    })
 return (
     <>
     <nav className="bg-white fixed max-w-screen-lg z-10 mx-auto inset-x-0 top-0 flex justify-between items-center">
      
      <a href="https://www.jaysonleodones.com" 
      className="font-extrabold m-3 uppercase inline-flex hover:text-emerald-700 transition-all duration-500">
        @jaywhocodes
      </a>
    
      <button id="mobileMenuButton" className="p-3 focus:outline-none md:hidden" title="Open side menu">
          <svg id="mobileMenuButtonClose" className="w-6 h-6 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          <svg id="mobileMenuButtonOpen" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </button>
    
      <div id="sideMenuHideOnMobile" className="bg-white font-semibold z-10 rounded-bl-md flex absolute top-0 
      right-0 transition-all duration-500 transform translate-x-0 w-1/2 md:w-auto px-3 md:px-0 flex-col 
      md:flex-row -translate-y-full md:translate-y-0 md:mt-1 md:items-center md:mx-1 md:uppercase">
          <a href="#projects" className="mx-0 sm:mx-2 my-2 border-b-2 border-transparent hover:border-emerald-600 
          hover:text-emerald-700 transition-all duration-500 py-1 sm:p-0">Projects</a>
          <a target="_blank" href="https://hashnode.com/@jaysonleo" className="mx-0 sm:mx-2 my-2 border-b-2 border-transparent hover:border-emerald-600 
          hover:text-emerald-700 transition-all duration-500 py-1 sm:p-0">Blog</a>
      </div>
    
  </nav>
     </>
 );
   
}