const AcademicSemesterCard = (semester) => {
  return (
    <div className="relative">
      <div className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            name: {semester?.semester?.name}
          </h3>
          <p className="text-gray-700 mb-4 flex-grow">
            Semester code : {semester?.semester?.code}{" "}
          </p>

          <p className="text-gray-700 mb-4 flex-grow">
            Semester Start : {semester?.semester?.startMonth}{" "}
          </p>
          <p className="text-gray-700 mb-4 flex-grow">
            End Month of Semester : {semester?.semester?.endMonth}{" "}
          </p>
          <p className="text-gray-700 mb-4 flex-grow">
            Academic Year : {semester?.semester?.year}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicSemesterCard;
