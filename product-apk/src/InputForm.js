import React, { useState } from 'react';
import './InputForm.css'

const InputForm = ({ onAddData }) => {
  // State to hold the form data (id, sellingPrice, productName, category)
  const [formData, setFormData] = useState({
    id: '',
    sellingPrice: '',
    productName: '',
    category: 'food', // Default category is 'food'
  });

  // Update the form data when input fields change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add data when the "Add" button is clicked
  const handleAddData = () => {
    // Check if all required fields (id, sellingPrice, productName) are filled
    if (!formData.id || !formData.sellingPrice || !formData.productName) return;
    // Pass the formData to the parent component (App) for adding to the list
    onAddData(formData);
    // Reset the form fields after adding data
    setFormData({
      ...formData,
      id: '', // Reset the ID field to empty after adding data
      sellingPrice: '',
      productName: '',
    });
  };

  return (
    <div className='content'>
      {/* ID input field */}
       Product Id 
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleInputChange}
      />
      {/* Selling Price input field */}
      Selling Price
      <input
        type="text"
        name="sellingPrice"
        placeholder="Selling Price"
        value={formData.sellingPrice}
        onChange={handleInputChange}
      />
      {/* Product Name input field */}
      Product Name
      <input
        type="text"
        name="productName"
        placeholder="Product Name"
        value={formData.productName}
        onChange={handleInputChange}
      />
      {/* Category select dropdown */}
      Category
      <select name="category" value={formData.category} onChange={handleInputChange}>
        <option value="Food">Food</option>
        <option value="SkinCare">Skincare</option>
        <option value="Electronic">Electronic</option>
        <option value="Medicine">Medicine</option>
      </select>
      {/* Add button */}
      <button className='btn' onClick={handleAddData}>Add Product</button>
    </div>
  );
};

export default InputForm;
