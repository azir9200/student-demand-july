const CourseCard = ({ course }) => {
  console.log("data...asz", course);
  console.log(course.title);
  return (
    <div>
      <p>course card</p>
      <h2> name : {course?.title} </h2>
    </div>
  );
};

export default CourseCard;
