import Avatar from "./Avatar";

function Profile({
  // eslint-disable-next-line react/prop-types
  nome, profissao, premios, descobertas, srcImage,
}) {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{nome}</h1>
      <Avatar image={srcImage} size={40} />
      <ul>
        <li><b>Profissão:</b>{profissao}</li>
        <li><b>Premios:</b>{premios}</li>
        <li><b>Descobertas:</b>{descobertas}</li>
      </ul>
    </div>
  );
}

export default Profile;
