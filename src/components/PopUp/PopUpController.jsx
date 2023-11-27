import React, { useEffect, useState } from "react";
import PopUpView from "./PopUpView";
import axios from "axios";

const PopUpController = ({ setShowPopUP, userName }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts?user=${userName}`)
      .then((res) => setData(res.data));
  }, [userName]);
  return (
    <PopUpView userName={userName} data={data} setShowPopUP={setShowPopUP} />
  );
};

export default PopUpController;
