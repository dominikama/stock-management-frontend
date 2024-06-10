import React, { useState, useEffect } from 'react';
import { getCodes } from 'country-list';
import '../../../react-tailwind.css';
import Checkbox from '../../common/Checkbox';
import Input from '../../common/Input';
import CustomSelect from '../../common/CustomSelect';


const WarehouseFormTemplate = ({ initialData, onSubmit, title, buttonText, showForm, setShowForm }) => {
    const [formData, setFormData] = useState({
      name: '',
      number: '',
      country: '',
      city: '',
      postalCode: '',
      address: '',
      enabled: false,
    });
  
    useEffect(() => {
      if (initialData) {
        console.log('Initial data received:', initialData);
        setFormData(initialData);
      }
    }, [initialData]);
  
    const handleChange = (e) => {
      const { name, value, type } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? value : value,
      });
    };
  
    const countryOptions = getCodes().map(country => ({ value: country, label: country }));

    const handleCountryChange = (selectedOption) => {
      setFormData({
        ...formData,
        country: selectedOption ? selectedOption.value : '',
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setShowForm(false)
      onSubmit(formData);
    };
    return (
      <>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowForm(false)}></div>
      )}
      <div
        className={`fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center transition-opacity ${
          showForm ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setShowForm(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <Input id="name" label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Silver" type="text" />
                <Input id="number" label="Number" name="number" value={formData.number} onChange={handleChange} placeholder="WH123" type="text" />
                <CustomSelect id="country" label="Country" name="country" value={countryOptions.find(option => option.value === formData.country)} onChange={handleCountryChange}
                    options={countryOptions}/>
                <Input id="city" label="City" name="city" value={formData.city} onChange={handleChange} placeholder="London" type="text" />
                <Input id="postalCode" label="Postal code" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="34-309" type="text" />
                <Input id="address" label="Address" name="address" value={formData.address} onChange={handleChange} placeholder="St.Olivers" type="text" />
                <Checkbox id="enabled" label="Enabled" checked={formData.enabled} onChange={handleChange} className="sm:col-span-2" />
                </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mx-auto"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default WarehouseFormTemplate;