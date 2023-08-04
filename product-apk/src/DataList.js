import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import './DataList.css'

const DataItem = ({ data, onDelete }) => {
  // Function to handle the delete button click
  const handleDelete = () => {
    onDelete(data.id); // Call the onDelete function with the data ID to delete it
  };

  return (
    <div>
      {/* Display the category */}
      <h3>{data.category} Item</h3>
      {/* Display the ID, Selling Price, and Product Name */}
      <p>ID: {data.id}</p>
      <p>Selling Price: {data.sellingPrice}</p>
      <p>Product Name: {data.productName}</p>
      {/* Delete button */}
      <button onClick={handleDelete}>
        <AiFillDelete /> Delete
      </button>
    </div>
  );
};

const DataList = ({ dataList, onDelete }) => {
  return (
    <div>
      {/* Render each data item using the DataItem component */}
      {dataList.map((data) => (
        <DataItem key={data.id} data={data} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default DataList;
