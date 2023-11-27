import React from "react";

const AddPostView = ({ handleSubmit, onInputChange }) => {
  return (
    <form onSubmit={handleSubmit} className="">
      <h2 className="text-center">Yeni Gönderi Ekle</h2>
      <fieldset>
        <label htmlFor="">Kullanıcı Adı</label>
        <input
          onChange={(e) => onInputChange("user", e)}
          placeholder="Örn:mehmet"
          className=""
          type="text"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="">Başlık </label>
        <input
          onChange={(e) => onInputChange("title", e)}
          placeholder="Örn:MVC mimarisi"
          type="text"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="">Açıklama</label>
        <textarea
          onChange={(e) => onInputChange("text", e)}
          placeholder="Açıklama Giriniz..."
          type="text"
        />
      </fieldset>
      <button className="btn btn-warning text-black mt-4">Gönder</button>
    </form>
  );
};

export default AddPostView;
