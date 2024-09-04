import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
import AcademicSemesterCard from "./AcademicSemesterCard";

const AcademicSemester = () => {
  const { data: semesters } = useGetAllSemestersQuery(undefined);

  console.log("all azi", semesters);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-10">Academic Semesters</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {semesters?.data?.map((semester) => (
          <AcademicSemesterCard key={semester.id} semester={semester} />
        ))}
      </div>
    </div>
  );
};

export default AcademicSemester;
