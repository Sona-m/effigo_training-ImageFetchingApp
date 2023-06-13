import SearchBar from './components/SearchBar';
import './App.css';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './components/ImageList';
import './components/ImageList.css';
import './components/SearchBar.css'

function App() {
  const [images , setImages] = useState([]);

  const handleSubmit = async (term) => {
   const response = await searchImages(term);
   setImages(response);
   
  }

  return (
    <div className="App">
      <SearchBar  onSubmit = {handleSubmit}/>
      <ImageList images={images} />
    </div>
  );
}

export default App;
