const AcademicFacultyCard = (faculty) => {
  return (
    <div className="bg-blue-100 p-4 flex flex-col flex-grow">
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-blue-500 mb-2">
          Faculty: {faculty.faculty.name}
        </h3>
        <button>
          <a
            href="/facultyDetails"
            className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 hover:text-white transition duration-300 shadow-lg"
          >
            Learn More
          </a>
        </button>
      </div>
    </div>
  );
};

export default AcademicFacultyCard;
