import { useState } from "react";

export default function UploadCardButton() {
  const [photo, setPhoto] = useState(null);

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
        onChange={(e) => {
          const file = e.target.files && e.target.files[0];
          if (file) {
            setPhoto(URL.createObjectURL(file));
          }
        }}
      />

      {photo && (
        <div className="mt-4 bg-white rounded-lg shadow-lg border p-2 relative">
          <p className="text-sm text-gray-600 mb-1">Preview:</p>
          <img
            src={photo}
            alt="Vaccine Card Preview"
            className=" w-40 h-auto rounded-lg w-64 h-auto rounded-lg shadow-md border"
          />
          <button onClick={() => setPhoto(null)} className="absolute top-1 right-1">×</button>
        </div>
      )}
    </div>
  );
}
