import { FaPlus } from "react-icons/fa";
export default function AddVaccine({setAddVaccine}) {
    function addVaccine(){
        console.log("add vaccine");
        setAddVaccine(true);
    }
  return (
    <div className="fixed bottom-6 right-6 group" onClick={addVaccine}>
      <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg">
        <FaPlus className="text-xl" />
      </button>
      <span className="absolute bottom-16 right-1/2 translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        Add Vaccine
      </span>
    </div>
  );
}
