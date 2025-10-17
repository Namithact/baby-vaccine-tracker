export default function BabyDetails() {
  //const babyDetails = JSON.parse(localStorage.getItem("babyDetails"));
  const babyDetails = {
    name: "Advik Sanu",
    dob: "04 April 2024",
    birthweight: "3.120 kg",
    bloodgroup: "b+",
  };
  const dob = babyDetails.dob;
  function calculateAge(birthDate) {
    const today = new Date();
    const dob = new Date(birthDate);

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();

    // Adjust if the current month/day is before birth month/day
    if (months < 0 || (months === 0 && today.getDate() < dob.getDate())) {
      years--;
      months += 12;
    }

    const totalMonths = years * 12 + months;
    return totalMonths;
  }
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2">
        <span className="text-gray-500 font-medium">Name:</span>
        <span className="text-gray-800" id="name">
          {babyDetails.name}
        </span>
      </div>
      <div className="grid grid-cols-2">
        <span className="text-gray-500 font-medium">Date of Birth:</span>
        <span className="text-gray-800" id="dob">
          {babyDetails.dob}
        </span>
      </div>
      <div className="grid grid-cols-2">
        <span className="text-gray-500 font-medium">Age:</span>
        <span className="text-gray-800" id="age">
          {calculateAge(dob)} months
        </span>
      </div>
      <div className="grid grid-cols-2">
        <span className="text-gray-500 font-medium">Birth Weight:</span>
        <span className="text-gray-800" id="birthweight">
          {babyDetails.birthweight}
        </span>
      </div>
      <div className="grid grid-cols-2">
        <span className="text-gray-500 font-medium">Blood Group:</span>
        <span className="text-gray-800" id="bloodgroup">
          {babyDetails.bloodgroup}
        </span>
      </div>
    </div>
  );
}
