import useForm from "../hooks/useForm";
import Joi from "joi-browser";

const schema = {
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  birth_date: Joi.string().required(),
  email: Joi.string().required(),
  gender: Joi.string().required(),
  country: Joi.string().required(),
};

const ClientForm = ({ data, setData, selectedItem, setSlectedItem }) => {
  const initialState = {
    id: null,
    first_name: "",
    last_name: "",
    birth_date: "",
    email: "",
    gender: "",
    country: "",
  };
  const { values, renderInput, handleSubmit, renderButton } = useForm(
    initialState,
    schema,
    data,
    setData,
    selectedItem,
    setSlectedItem
  );

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Add New Client
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                {renderInput("First_Name", "first_name", values.first_name)}
                {renderInput("Last_Name", "last_name", values.last_name)}
                {renderInput("Birth_Date", "birth_date", values.birth_date)}
                {renderInput("E-mail", "email", values.email)}
                {renderInput("Gender", "gender", values.gender)}
                {renderInput("Country", "country", values.country)}
                {renderButton("Submit")}
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    // <form onSubmit={handleSubmit}>
    //   {renderInput("First_Name", "first_name", values.first_name)}
    //   {renderInput("Last_Name", "last_name", values.last_name)}
    //   {renderInput("Birth_Date", "birth_date", values.birth_date)}
    //   {renderInput("E-mail", "email", values.email)}
    //   {renderInput("Gender", "gender", values.gender)}
    //   {renderInput("Country", "country", values.country)}
    //   {renderButton("Submit")}
    // </form>
  );
};

export default ClientForm;
