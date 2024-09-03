import { baseApi } from "../../api/baseApi";

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourse: builder.query({
      query: () => ({
        url: "/course",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCourseQuery } = courseApi;
