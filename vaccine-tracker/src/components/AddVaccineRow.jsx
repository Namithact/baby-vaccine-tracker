import { useState } from "react";
import { FaSave, FaTimes } from "react-icons/fa";

export default function AddVaccineRow({ setAddVaccine ,addVaccine}) {
  const [name, setName] = useState("");
  const [dateTaken, setDateTaken] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Completed");
  function handleVaccineSave() {
    const newVaccineAdded = {
      id: 1,
      name: name,
      dateTaken: dateTaken,
      dueDate: dueDate,
      status: status,
    }
    addVaccine(newVaccineAdded);
    setAddVaccine(false)
  }
  return (
    <>
      <tr className="border-t hover:bg-gray-50">
        <td className="py-3 px-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-1 rounded w-full"
          />
        </td>
        <td className="py-3 px-4">
          <input
            type="date"
            name="dateTaken"
            value={dateTaken}
            onChange={(e) => setDateTaken(e.target.value)}
            className="border p-1 rounded w-full"
          />
        </td>
        <td className="py-3 px-4">
          <input
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border p-1 rounded w-full"
          />
        </td>
        <td className="py-3 px-4">
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-1 rounded w-full"
          >
            <option>Completed</option>
            <option>Pending</option>
            <option>Upcoming</option>
          </select>
        </td>

        <td className="py-3 px-4">
          <>
            <button
              onClick={(e) => handleVaccineSave()}
              className="text-blue-600 hover:text-blue-800"
            >
              <FaSave />
            </button>
            <button
              onClick={(e) => setAddVaccine(false)}
              className="text-red-600 hover:text-red-800 px-4"
            >
              <FaTimes />
            </button>
          </>
        </td>
      </tr>
    </>
  );
}
