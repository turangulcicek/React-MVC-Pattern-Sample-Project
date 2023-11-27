import React from "react";

const PopUpView = ({ setShowPopUP, data, userName }) => {
  console.log("data", data);
  return (
    <div className="wrapper">
      <div className="popup ">
        <div className="btn-wrap d-flex justify-content-between gap-5">
          <h4>
            <span>
              {userName}{" "}
              <span className="text-warning">kullanicisinin gonderileri</span>
            </span>
          </h4>
          <button
            onClick={() => setShowPopUP(false)}
            className="btn btn-danger"
          >
            Kapat
          </button>
        </div>
        <div></div>
        {data?.map((post) => (
          <div className="bg-black text-white my-3 p-2 rounded-4" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopUpView;
