import { useGetAllStudentsQuery } from "../../../redux/features/student/studentApi";

const Student = () => {
  const { data } = useGetAllStudentsQuery(undefined);

  console.log(data);

  return (
    <div>
      <h1> Our student are very attentive. </h1>
    </div>
  );
};

export default Student;
