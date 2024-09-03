import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Student Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Student Offered Course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];
