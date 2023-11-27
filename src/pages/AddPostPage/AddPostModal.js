import { v4 } from "uuid";
class AddPostModal {
  state = {
    id: v4(),
    date: new Date(),
    user: "",
    title: "",
    text: "",
  };
}

export default AddPostModal;
