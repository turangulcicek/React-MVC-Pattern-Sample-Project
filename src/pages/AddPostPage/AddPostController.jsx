import React, { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModal from "./AddPostModal";
import axios from "axios";
import axiosInstance from "../../constants";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const formModal = new AddPostModal();

  const [form, setForm] = useState(formModal.state);
  const navigate = useNavigate();
  // key:hangi inputa yazıldığının bilgisi
  // value: inputun içindeki değer
  const onInputChange = (key, e) => {
    // console.log(key, e.target.value);
    setForm({ ...form, [key]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (!form.user || !form.text || !form.title) {
      alert("Tüm alanları doldurun");
    }
    e.preventDefault();
    axiosInstance.post("posts", form).then((res) => navigate("/"))
    
  };
  return (
    <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
  );
};

export default AddPostController;
