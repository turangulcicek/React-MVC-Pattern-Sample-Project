import PopUpController from "../../components/PopUp/PopUpController";

const ListPostView = ({
  formData,
  showPopUp,
  setShowPopUP,
  userName,
  setUserName,
}) => {
  return (
    <div className="container ">
      {formData?.map((form) => (
        <div key={form.id} className="post">
          <div className="info ">
            <h3>{form.title}</h3>
            <p
              onClick={() => {
                setShowPopUP(true);
                setUserName(form.user);
              }}
            >
              {" "}
              {form.user}
            </p>
          </div>
          <p className="text">{form.text} </p>
        </div>
      ))}
      {showPopUp && (
        <PopUpController userName={userName} setShowPopUP={setShowPopUP} />
      )}
    </div>
  );
};

export default ListPostView;
