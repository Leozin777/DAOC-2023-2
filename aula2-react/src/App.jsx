/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import './App.css';
import { useState } from 'react';
import ButtonNext from './components/ButtonNext';
import Header from './components/Header';
import ShowDetails from './components/ShowDetails';
import Image from './components/Image';
import { data } from './data';

function App() {
  const [index, setIndex] = useState(0);

  // eslint-disable-next-line no-console
  console.log(data);

  function handleClickIndex() {
    setIndex(index + 1);
  }

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <ButtonNext click={handleClickIndex} />
      <Header title={data[index].name} sizeList="10" index={index + 1} />
      <ShowDetails description={data[index].description} />
      <Image urlImage={data[index].urlImage} />
    </div>
  );
}

export default App;
