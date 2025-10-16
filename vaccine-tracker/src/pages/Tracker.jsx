import { useState } from "react";
import AddVaccine from "../components/AddVaccine";
import VaccineList from "../components/VaccineList";
import UploadCardButton from "../components/UploadCardButton";
export default function Tracker() {
  const [addVaccine, setAddVaccine] = useState(false);


  return (
    <div>
      {/* <header className="bg-blue-500 text-white py-5 shadow-md">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-3xl font-semibold">Baby Vaccine Tracker</h1>
      <p className="text-sm mt-1">Track and manage your baby's vaccination schedule easily</p>
    </div>
  </header> */}
      <main className="max-w-5xl mx-auto mt-8 px-4">
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
          <VaccineList addVaccine={addVaccine} setAddVaccine={setAddVaccine} />
        </div>

        {/* <div className="mt-6 text-center">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg shadow-md">
         + Add / Edit Vaccine
      </button>
    </div> */}
        <UploadCardButton />
        <AddVaccine setAddVaccine={setAddVaccine} />
      </main>

      {/* <footer className="mt-10 text-center text-gray-500 text-sm py-4">
    © 2025 Baby Vaccine Tracker
  </footer> */}
    </div>
  );
}
