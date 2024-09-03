import { baseApi } from "../api/baseApi";


const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => ({
        url: "/students",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllStudentsQuery } = academicSemesterApi;
