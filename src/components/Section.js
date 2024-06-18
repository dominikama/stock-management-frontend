import React from 'react';

const Section = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16 mx-auto">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Manage your stock effectively in multiple locations. Keep data from all your warehouses at one place.</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-2 mx-auto flex flex-col items-center h-full">
          <a href='/stock'>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    <path fill="currentColor" d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"></path>
                    <path fill="currentColor" d="M0 16h3v-1h10v1h3v-2h-16v2z"></path>
                  </g>
                  </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Real Time Stock</h3>
              <p class="text-gray-500 dark:text-gray-400">Monitor and access your stock levels across multiple warehouses in real time and make informed decisions.</p>
          </a>
          <a href='/warehouses'>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" height="24px" width="24px" viewBox="0 0 297 297" stroke="currentColor">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path fill="currentColor" d="M291.219,78.753L153.176,9.732c-2.943-1.473-6.409-1.473-9.353,0L5.781,78.753C2.238,80.525,0,84.145,0,88.107v189.808 c0,5.775,4.682,10.458,10.458,10.458h34.511c5.775,0,10.458-4.682,10.458-10.458V115.82h186.148v162.095 c0,5.775,4.682,10.458,10.458,10.458h34.511c5.775,0,10.458-4.682,10.458-10.458V88.107C297,84.145,294.762,80.525,291.219,78.753z M276.085,267.457h-13.595V105.362c0-5.775-4.682-10.458-10.458-10.458H44.968c-5.775,0-10.458,4.682-10.458,10.458v162.095H20.915 V94.57L148.5,30.778L276.085,94.57V267.457z"></path>
                      <path fill="currentColor" d="M217.521,132.552H148.5c-4.043,0-7.32,3.277-7.32,7.32v61.701H79.479c-4.043,0-7.32,3.277-7.32,7.32v69.021 c0,4.043,3.277,7.32,7.32,7.32h138.042c4.043,0,7.32-3.277,7.32-7.32V139.873C224.842,135.829,221.564,132.552,217.521,132.552z M155.82,226.568l16.837,16.837l-16.837,16.837V226.568z M141.18,260.241l-16.837-16.837l16.837-16.837V260.241z M166.174,216.214 h33.673l-16.837,16.837L166.174,216.214z M166.174,201.573l16.837-16.837l16.837,16.837H166.174z M210.201,191.22l-16.836-16.837 l16.836-16.837V191.22z M183.011,164.03l-16.837-16.837h33.673L183.011,164.03z M172.657,174.383L155.82,191.22v-33.673 L172.657,174.383z M113.989,233.051l-16.837-16.837h33.673L113.989,233.051z M103.636,243.404l-16.837,16.837v-33.673 L103.636,243.404z M113.989,253.758l16.837,16.837H97.153L113.989,253.758z M183.01,253.758l16.837,16.837h-33.673L183.01,253.758z M193.364,243.404l16.837-16.837v33.673L193.364,243.404z"></path>
                    </g>
                  </g>
                  </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Warehouses</h3>
              <p class="text-gray-500 dark:text-gray-400">Manage all your warehouses data from a single platform. Enhance operational efficiency.</p>
          </a>
          <a href='/products'>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/></svg>                    
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Products</h3>
              <p class="text-gray-500 dark:text-gray-400">Keep your product information up-to-date and organized. Streamline product management.</p>
          </a>
          <a href='/suppliers'>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" ffill="currentColor" height="24px" width="24px" viewBox="0 0 512 512" stroke="currentColor">
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
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Suppliers and orders</h3>
              <p class="text-gray-500 dark:text-gray-400">Effectively manage your suppliers. Configure automatic ordering to replenish stock levels when they fall below a set threshold.</p>
          </a>
          <a href='/alerts-reports'>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Alerts</h3>
              <p class="text-gray-500 dark:text-gray-400">Get notified about critical stock levels and other important events. Respond quickly to stock issues. Stay informed about inventory changes.</p>
          </a>
          <a href='/alerts-reports'>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Reports</h3>
              <p class="text-gray-500 dark:text-gray-400">Generate detailed reports to analyze your stock management performance. Identify trends and patterns. Make data-driven decisions.</p>
          </a>
      </div>
  </div>
</section>
  );
};

export default Section;
