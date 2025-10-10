import { useNavigate } from "react-router-dom";
import BabyDetails from "../components/BabyDetails";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        {/* App Heading */}
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-2">
          👶 Baby Vaccine Tracker
        </h1>

        {/* App Description */}
        <p className="text-gray-600 text-center mb-6">
          Track and manage your baby's vaccinations safely and easily. Keep all
          records in one place.
        </p>
        {/* Baby Details Section */}
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Baby Details
        </h2>

        <BabyDetails />
        <button
          onClick={() => navigate("/tracker")}
          className="w-full mt-6 bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Vaccine Tracker
        </button>
      </div>
    </div>
  );
}
