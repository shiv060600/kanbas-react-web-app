import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const findEnrollmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/enrollments`);
  return response.data;
};

export const enrollUserInCourse = async (courseId: string, userId: string) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/enrollments`, { userId });
  return response.data;
};

export const unenrollUserFromCourse = async (enrollmentId: string) => {
  const response = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
  return response.data;
};

export const findAllEnrollments = async () => {
  const response = await axios.get(ENROLLMENTS_API);
  return response.data;
};