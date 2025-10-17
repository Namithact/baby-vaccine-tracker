import { useState, useEffect } from "react";
import { set, get, del } from "idb-keyval";
import { FaTimes } from "react-icons/fa";
export default function UploadCardButton() {
  const [photo, setPhoto] = useState(null);
  //  Load saved image on mount
  useEffect(() => {
    async function loadImage() {
      const saved = await get("vaccineCardImage");
      if (saved) setPhoto(saved);
    }
    loadImage();
  }, []);
  //  Handle file upload
  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const imageDataUrl = event.target.result;
      setPhoto(imageDataUrl);
      await set("vaccineCardImage", imageDataUrl); // store in IndexedDB
    };
    reader.readAsDataURL(file); // convert to base64
  }
  // 🔹 Delete image
  async function handleRemove() {
    await del("vaccineCardImage");
    setPhoto(null);
  }
  return (
    <div className="mt-6 flex flex-col items-start relative">
      <label
        htmlFor="vaccine-card-input"
        className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white shadow-md rounded-full px-4 py-2 cursor-pointer hover:shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3v4M8 3v4"
          />
        </svg>
        <span className="text-sm font-medium">
          Upload photo of vaccine card
        </span>
      </label>

      <input
        id="vaccine-card-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileUpload}
      />

      {photo && (
        <div className="mt-4 bg-white rounded-lg shadow-lg border p-2 relative">
          <p className="text-sm text-gray-600 mb-1">Preview:</p>
          <img
            src={photo}
            alt="Vaccine Card Preview"
            className=" w-40 h-auto rounded-lg w-64 h-auto rounded-lg shadow-md border"
          />
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
}
