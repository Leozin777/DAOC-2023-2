import Profile from "./Profile";

function Gallery({ titutlo }) {
  return (
    <div>
      <h1>{titutlo}</h1>
      <Profile nome="cara1" profissao="bombeiro" premios="2 Microsoft MVP" Descobertas="polonia" srcImage="https://i.imgur.com/szV5sdG.jpeg" />
      <Profile nome="cara1" profissao="bombeiro" premios="2 Microsoft MVP" Descobertas="polonia" srcImage="https://i.imgur.com/szV5sdG.jpeg" />
    </div>
  );
}

export default Gallery;
