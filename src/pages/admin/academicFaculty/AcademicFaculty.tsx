import { useGetAllAcademicFacultyQuery } from "../../../redux/features/academicFaculty/academicFacultyAPI";
import AcademicFacultyCard from "./AcademicFacultyCard";

const AcademicFaculty = () => {
  const { data: faculties } = useGetAllAcademicFacultyQuery(undefined);


  return (
    <div className="mt-3 bg-gradient-to-r from-blue-400 to-green-400 text-white  px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Academic Faculty
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
          Your gateway to quality life and excellent study.
        </p>
        <div className="">
          {faculties?.data?.map((faculty) => (
            <AcademicFacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>

        <a
          href="/products"
          className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 hover:text-white transition duration-300 shadow-lg"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default AcademicFaculty;
