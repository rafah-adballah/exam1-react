import { useEffect, useState } from "react";
import Table from "./common/table";
import Spinner from "./common/spinner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Pagination from "./common/pagination";
import ClientForm from "./clientForm";

const Clients = () => {
  const [clients, setClients] = useState(null);

  const [selectedItem, setSelectedItem] = useState(null);

  const [paginatedData, setPaginatedData] = useState([]);

  const columns = [
    { path: "id", label: "ID" },
    { path: "first_name", label: "First_Name" },
    { path: "last_name", label: "Last_Name" },
    { path: "birth_date", label: "Birth_Date" },
    { path: "email", label: "E-mail" },
    { path: "gender", label: "Gender" },
    { path: "country", label: "Country" },
    {
      label: "Actions",
      content: (item) => (
        <>
          <button
            className="btn btn-danger m-2"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
          <button
            className="btn btn-warning m-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            onClick={() => setSelectedItem(item)}
          >
            Edit
          </button>
          <Link to={`/clients/${item.id}`} className="btn btn-primary">
            Profile
          </Link>
        </>
      ),
    },
  ];

  useEffect(() => {
    fetch("/clients.json")
      .then((respons) => respons.json())
      .then((json) => setClients(json));
  }, []);

  const handleDelete = (item) => {
    const newData = clients.filter((client) => client.id !== item.id);
    setClients(newData);
    toast.error("User is deleted successfully...", { theme: "colored" });
  };

  return (
    <>
      <ClientForm
        data={clients}
        setData={setClients}
        selectedItem={selectedItem}
        setClients={selectedItem}
      />
      {clients ? (
        <>
          <Table data={paginatedData} columns={columns} />
          <Pagination setPaginatedData={setPaginatedData} data={clients} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Clients;
