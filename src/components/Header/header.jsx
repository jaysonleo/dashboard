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
      
      <a href="#" className="font-extrabold m-3 uppercase inline-flex hover:text-emerald-700 transition-all duration-500">
          {/* <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg> */}
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
          {/* <a href="#" className="mx-0 sm:mx-2 my-2 border-b-2 border-transparent hover:border-emerald-600 
          hover:text-emerald-700 transition-all duration-500 py-1 sm:p-0">Project</a>
          <a href="#" className="mx-0 sm:mx-2 my-2 border-b-2 border-transparent hover:border-emerald-600 
          hover:text-emerald-700 transition-all duration-500 py-1 sm:p-0">Resource</a>
          <a href="#" className="mx-0 sm:mx-2 my-2 border-b-2 border-transparent hover:border-emerald-600 
          hover:text-emerald-700 transition-all duration-500 py-1 sm:p-0">About</a> */}
          <a target="_blank" href="https://hashnode.com/@jaysonleo" className="mx-0 sm:mx-2 my-2 border-b-2 border-transparent hover:border-emerald-600 
          hover:text-emerald-700 transition-all duration-500 py-1 sm:p-0">Blog</a>
      </div>
    
  </nav>
     </>
 );
   
}