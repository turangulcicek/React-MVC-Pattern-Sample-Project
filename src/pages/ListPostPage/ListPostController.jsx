import React, { useEffect, useState } from "react";
import ListPostView from "./ListPostView";
import axios from "axios";

const ListPostController = () => {
  const [formData, setFormData] = useState(null);
  const [showPopUp, setShowPopUP] = useState(false);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ListPostView
      formData={formData}
      showPopUp={showPopUp}
      setShowPopUP={setShowPopUP}
      userName={userName}
      setUserName={setUserName}
    />
  );
};

export default ListPostController;
