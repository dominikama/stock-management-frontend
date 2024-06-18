import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as StockManagementLogo } from '../assets/icons/stock-management.svg';

const Sidebar = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
      document.body.classList.toggle('overflow-hidden', !isSidebarOpen);
    };
  return (
    <>
 <button onClick={toggleSidebar} aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

<aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
         <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
         <div>
         {isSidebarOpen && (
            <button onClick={toggleSidebar} className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-1.5">
               <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
               </svg>
            </button>)}
            <Link to="/" className="flex items-center ps-2.5 mb-5 mt-3">
               <StockManagementLogo className="h-6 me-3 sm:h-7" alt="Stock Management Logo"/>
               <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Stock Management</span>
            </Link>
            </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/warehouses" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" viewBox="0 0 16 16" fill="currentColor">
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    <path fill="currentColor" d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"></path>
                    <path fill="currentColor" d="M0 16h3v-1h10v1h3v-2h-16v2z"></path>
                  </g>
                </svg>
                <span className="ms-3">Stock</span>
              </Link>
            </li>
            <li>
              <Link to="/products" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <li>
              <Link to="/warehouses" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" height="24px" width="24px" viewBox="0 0 297 297" stroke="currentColor">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path fill="currentColor" d="M291.219,78.753L153.176,9.732c-2.943-1.473-6.409-1.473-9.353,0L5.781,78.753C2.238,80.525,0,84.145,0,88.107v189.808 c0,5.775,4.682,10.458,10.458,10.458h34.511c5.775,0,10.458-4.682,10.458-10.458V115.82h186.148v162.095 c0,5.775,4.682,10.458,10.458,10.458h34.511c5.775,0,10.458-4.682,10.458-10.458V88.107C297,84.145,294.762,80.525,291.219,78.753z M276.085,267.457h-13.595V105.362c0-5.775-4.682-10.458-10.458-10.458H44.968c-5.775,0-10.458,4.682-10.458,10.458v162.095H20.915 V94.57L148.5,30.778L276.085,94.57V267.457z"></path>
                      <path fill="currentColor" d="M217.521,132.552H148.5c-4.043,0-7.32,3.277-7.32,7.32v61.701H79.479c-4.043,0-7.32,3.277-7.32,7.32v69.021 c0,4.043,3.277,7.32,7.32,7.32h138.042c4.043,0,7.32-3.277,7.32-7.32V139.873C224.842,135.829,221.564,132.552,217.521,132.552z M155.82,226.568l16.837,16.837l-16.837,16.837V226.568z M141.18,260.241l-16.837-16.837l16.837-16.837V260.241z M166.174,216.214 h33.673l-16.837,16.837L166.174,216.214z M166.174,201.573l16.837-16.837l16.837,16.837H166.174z M210.201,191.22l-16.836-16.837 l16.836-16.837V191.22z M183.011,164.03l-16.837-16.837h33.673L183.011,164.03z M172.657,174.383L155.82,191.22v-33.673 L172.657,174.383z M113.989,233.051l-16.837-16.837h33.673L113.989,233.051z M103.636,243.404l-16.837,16.837v-33.673 L103.636,243.404z M113.989,253.758l16.837,16.837H97.153L113.989,253.758z M183.01,253.758l16.837,16.837h-33.673L183.01,253.758z M193.364,243.404l16.837-16.837v33.673L193.364,243.404z"></path>
                    </g>
                  </g>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Warehouses</span>
              </Link>
            </li>
            <li>
              <Link to="/orders-suppliers" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" height="24px" width="24px" viewBox="0 0 512 512" stroke="currentColor">
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    <g>
                      <path fill="currentColor" d="M116.683,354.34c-26.836,0-48.607,21.764-48.607,48.6c0,26.85,21.771,48.614,48.607,48.614 c26.844,0,48.608-21.764,48.608-48.614C165.29,376.104,143.526,354.34,116.683,354.34z M116.683,424.826 c-12.08,0-21.872-9.799-21.872-21.886c0-12.073,9.792-21.865,21.872-21.865c12.08,0,21.872,9.792,21.872,21.865 C138.554,415.027,128.762,424.826,116.683,424.826z"></path>
                      <path fill="currentColor" d="M403.8,354.34c-26.836,0-48.6,21.764-48.6,48.6c0,26.85,21.764,48.614,48.6,48.614 c26.843,0,48.606-21.764,48.606-48.614C452.406,376.104,430.643,354.34,403.8,354.34z M403.8,424.826 c-12.073,0-21.865-9.799-21.865-21.886c0-12.073,9.792-21.865,21.865-21.865c12.079,0,21.871,9.792,21.871,21.865 C425.671,415.027,415.879,424.826,403.8,424.826z"></path>
                      <path fill="currentColor" d="M200.127,128.622H90.502c-3.561,0-6.957,1.582-9.23,4.331l-78.48,94.163C0.986,229.268,0,231.994,0,234.815 v82.595v43.189c0,6.648,5.389,12.029,12.03,12.029h36.844c11.626-25.9,37.621-44.024,67.81-44.024 c30.196,0,56.183,18.124,67.81,44.024h27.671V140.652C212.163,134.003,206.767,128.622,200.127,128.622z M43.931,236.052 c0-2.849,0.978-5.612,2.777-7.82l50.103-61.694c2.36-2.907,5.9-4.59,9.633-4.59h49.083c6.848,0,12.404,5.554,12.404,12.411v70.011 c0,6.849-5.555,12.404-12.404,12.404H56.334c-6.85,0-12.404-5.554-12.404-12.404V236.052z"></path>
                      <path fill="currentColor" d="M243.532,338.792c-3.741,0-6.763,3.03-6.763,6.77v20.303c0,3.735,3.022,6.763,6.763,6.763h92.466 c6.382-14.209,17.072-26.023,30.419-33.836H243.532z"></path>
                      <path fill="currentColor" d="M504.381,338.792h-63.19c13.353,7.814,24.044,19.627,30.419,33.836h32.772c3.741,0,6.77-3.028,6.77-6.763 v-20.303C511.151,341.822,508.122,338.792,504.381,338.792z"></path>
                      <path fill="currentColor" d="M497.568,60.446H252.043c-7.964,0-14.425,6.46-14.425,14.432v226.703c0,7.972,6.461,14.432,14.425,14.432 h245.525c7.971,0,14.432-6.46,14.432-14.432V74.878C512,66.906,505.539,60.446,497.568,60.446z M458.27,134.09H291.355 c-3.741,0-6.771-3.036-6.771-6.763v-13.533c0-3.741,3.03-6.77,6.771-6.77H458.27c3.735,0,6.763,3.029,6.763,6.77v13.533 C465.033,131.054,462.005,134.09,458.27,134.09z M291.355,174.697H458.27c3.735,0,6.763,3.021,6.763,6.763V195 c0,3.727-3.028,6.763-6.763,6.763H291.355c-3.741,0-6.771-3.036-6.771-6.763v-13.54 C284.584,177.718,287.614,174.697,291.355,174.697z M291.355,242.369H458.27c3.735,0,6.763,3.022,6.763,6.763v13.533 c0,3.727-3.028,6.77-6.763,6.77H291.355c-3.741,0-6.771-3.044-6.771-6.77v-13.533C284.584,245.391,287.614,242.369,291.355,242.369 z"></path>
                    </g>
                  </g>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Suppliers</span>
              </Link>
            </li>
            <li>
              <Link to="/alerts-reports" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" stroke="currentColor">
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    <style type="text/css">
                      {`.st0{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                      .st1{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}
                      .st2{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:5.2066,0;}`}
                    </style>
                    <path className="st0" d="M3,6v15c0,1.1,0.9,2,2,2h22c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H5C3.9,4,3,4.9,3,6z"></path>
                    <line className="st0" x1="9" y1="29" x2="23" y2="29"></line>
                    <path className="st0" d="M13,23c0,2.1-0.7,4.6-1.8,6"></path>
                    <path className="st0" d="M20.8,29c-1.1-1.4-1.8-3.9-1.8-6"></path>
                    <path className="st0" d="M11,10c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4"></path>
                    <path className="st0" d="M12,9v4h4C16,10.8,14.2,9,12,9z"></path>
                    <line className="st0" x1="20" y1="12" x2="25" y2="12"></line>
                    <line className="st0" x1="23" y1="15" x2="25" y2="15"></line>
                  </g>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Alerts and reports</span>
              </Link>
            </li>
            <li>
              <Link to="/user" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
                    <path d="M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z" stroke="currentColor" strokeWidth="1.5"></path>
                    <path d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.298 5.64118 21.5794 6.2255 21.748 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M19 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M19 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M19 15H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  </g>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">My Account</span>
              </Link>
            </li>
            <li>
              <Link to="/sign-out" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
