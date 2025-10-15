import { useState } from "react";
import { FaPen, FaSave, FaTimes } from "react-icons/fa";
import AddVaccineRow from "./AddVaccineRow";
export default function VaccineList({ addVaccine, setAddVaccine }) {
  const [vaccines, setVaccines] = useState([
    {
      id: 1,
      name: "BCG",
      dateTaken: "2025-01-12",
      dueDate: "—",
      status: "Completed",
    },
    {
      id: 2,
      name: "Hepatitis B",
      dateTaken: "2025-03-10",
      dueDate: "2025-09-10",
      status: "Upcoming",
    },
    {
      id: 3,
      name: "Polio",
      dateTaken: "—",
      dueDate: "2025-05-01",
      status: "Pending",
    },
  ]);
  const [editId, setEditId] = useState(null);
  const [editedData, setEditedData] = useState({});

  function handleVaccineEdit(vaccine, e) {
    console.log("editing vaccine function", vaccine);
    setEditId(vaccine.id);
    setEditedData(vaccine);
    console.log(e);
  }
  function handleChange(vaccine, e) {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  }
  function handleVaccineSave(data) {
    console.log("inside vaccine save", data);
    setVaccines(vaccines.map((v) => (data.id === v.id ? editedData : v)));
    setEditId(null);
  }
  function handleCancelEdit() {
    console.log("inside edit cancel");
    setEditId(null);
  }
  function addNewVaccine(vaccine) {
    console.log("new vaccine",addVaccine)
    setVaccines((prevVaccine) => [...prevVaccine, vaccine]);
  }
  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr className="bg-blue-100 text-blue-800 text-sm uppercase tracking-wide">
          <th className="py-3 px-4 text-left">Vaccine Name</th>
          <th className="py-3 px-4 text-left">Date Taken</th>
          <th className="py-3 px-4 text-left">Due Date</th>
          <th className="py-3 px-4 text-left">Status</th>
          <th className="py-3 px-4 text-left">Edit</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {vaccines.map((vaccine) => (
          <tr key={vaccine.name} className="border-t hover:bg-gray-50">
            <td className="py-3 px-4">
              {editId === vaccine.id ? (
                <input
                  type="text"
                  name="name"
                  value={editedData.name}
                  onChange={(e) => handleChange(vaccine, e)}
                  className="border p-1 rounded w-full"
                />
              ) : (
                vaccine.name
              )}
            </td>
            <td className="py-3 px-4">
              {editId === vaccine.id ? (
                <input
                  type="date"
                  name="dateTaken"
                  value={editedData.dateTaken}
                  onChange={(e) => handleChange(vaccine, e)}
                  className="border p-1 rounded w-full"
                />
              ) : (
                vaccine.dateTaken
              )}
            </td>
            <td className="py-3 px-4">
              {editId === vaccine.id ? (
                <input
                  type="date"
                  name="dueDate"
                  value={editedData.dueDate}
                  onChange={(e) => handleChange(vaccine, e)}
                  className="border p-1 rounded w-full"
                />
              ) : (
                vaccine.dueDate
              )}
            </td>
            <td className="py-3 px-4">
              {editId === vaccine.id ? (
                <select
                  name="status"
                  value={editedData.status}
                  onChange={(e) => handleChange(vaccine, e)}
                  className="border p-1 rounded w-full"
                >
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Upcoming</option>
                </select>
              ) : (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    vaccine.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : vaccine.status === "Pending"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {vaccine.status}
                </span>
              )}
            </td>

            <td className="py-3 px-4">
              {editId === vaccine.id ? (
                <>
                  <button
                    onClick={(e) => handleVaccineSave(editedData)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaSave />
                  </button>
                  <button
                    onClick={(e) => handleCancelEdit()}
                    className="text-red-600 hover:text-red-800 px-4"
                  >
                    <FaTimes />
                  </button>
                </>
              ) : (
                <button
                  onClick={(e) => handleVaccineEdit(vaccine)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaPen />
                </button>
              )}
            </td>
          </tr>
        ))}
        {addVaccine && (
          <AddVaccineRow
            addVaccine={addNewVaccine}
            setAddVaccine={setAddVaccine}
          />
        )}
      </tbody>
    </table>
  );
}
