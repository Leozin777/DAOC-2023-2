import { useState } from "react";

function ShowDetails({ description }) {
  const [enable, setEnable] = useState(false);

  function handleClickEnableDetails() {
    setEnable(!enable);
  }

  return (
    <div>
      {enable && <p>{description}</p>}
      <button type="button" onClick={handleClickEnableDetails}>
        {enable ? "Hide" : "Show"} details
      </button>
    </div>
  );
}

export default ShowDetails;
