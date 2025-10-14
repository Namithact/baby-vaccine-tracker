import { FaSave, FaTimes } from "react-icons/fa";

export default function AddVaccineRow({setAddVaccine}) {
  return (
    <>
           
              <tr className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">
                    <input
                      type="text"
                      name="name"
                      value=""
                      onChange={(e) => handleChange(vaccine, e)}
                      className="border p-1 rounded w-full"
                    />
                  
                </td>
                <td className="py-3 px-4">
                    <input
                      type="date"
                      name="dateTaken"
                      value=""
                      onChange={(e) => handleChange(vaccine, e)}
                      className="border p-1 rounded w-full"
                    />
                </td>
                <td className="py-3 px-4">
                    <input
                      type="date"
                      name="dueDate"
                      value=""
                      onChange={(e) => handleChange(vaccine, e)}
                      className="border p-1 rounded w-full"
                    />
                </td>
                <td className="py-3 px-4">
                    <select
                      name="status"
                      value=""
                      onChange={(e) => handleChange(vaccine, e)}
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
                        onClick={(e) => handleVaccineSave(editedData)}
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
  )
}
