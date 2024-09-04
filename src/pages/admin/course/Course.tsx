import { useGetAllCourseQuery } from "../../../redux/features/course/courseApi";
import CourseCard from "./CourseCard";

const Course = () => {
  const { data } = useGetAllCourseQuery(undefined);
  const courses = data;
  console.log(courses);

  return (
    <div className="mt-3 bg-gradient-to-r from-green-700 to-red-600 text-white py-16 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome you to take our Course
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
          Your gateway to quality products and excellent service.
        </p>
        <div>
          {courses?.data?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
