import React, { useState, useEffect } from 'react';
import InputForm from './InputForm';
import DataList from './DataList';
import './App.css'

const App = () => {
  // Load data from local storage if it exists; otherwise, initialize as an empty array
  const [dataList, setDataList] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('dataList'));
    return storedData ? storedData : [];
  });

  // Function to handle adding new data to the list
  const handleAddData = (newData) => {
    setDataList([...dataList, newData]);
  };

  // Function to handle deleting data from the list
  const handleDeleteData = (id) => {
    const updatedDataList = dataList.filter((data) => data.id !== id);
    setDataList(updatedDataList);
  };

  // Save the dataList to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('dataList', JSON.stringify(dataList));
  }, [dataList]);

  return (
    <div>
      <h1>Product App</h1>
      <InputForm onAddData={handleAddData} />
      <DataList dataList={dataList} onDelete={handleDeleteData} />
    </div>
  );
};

export default App;
