import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import Student from "../pages/admin/Student/Student";
import AcademicFaculty from "../pages/admin/academicFaculty/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import Course from "../pages/admin/course/Course";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Course",
        path: "course",
        element: <Course />,
      },
      {
        name: "Students",
        path: "students",
        element: <Student />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculties",
        element: <AcademicFaculty />,
      },
    ],
  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
];
