import { useGetAllCourseQuery } from "../../../redux/features/course/courseApi";

const Course = () => {
  const { data } = useGetAllCourseQuery(undefined);

  console.log(data);

  return (
    <div>
      <h1> All of courses are displayed here </h1>
    </div>
  );
};

export default Course;
