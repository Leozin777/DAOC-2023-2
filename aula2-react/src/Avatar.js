// eslint-disable-next-line react/prop-types
function Avatar({ image, size }) {
  return (
    <img src={image} style={{ borderRadius: "21px" }} width={size} height={size} alt="imagemPessao" />
  );
}

export default Avatar;
