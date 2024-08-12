import { ApiRoutes } from "@/routes/api_routes";
import axios from "axios";

export const BASE_URL = "http://localhost:8000/api/";


const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


AxiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config;
}, (error) => Promise.reject(error))


export default AxiosInstance;


export const AuthenticationService = ApiRoutes.Authentication;
export const GetUserService = ApiRoutes.GetUser;
export const CreateAccountService = ApiRoutes.CreateAccount;
export const GetAllNotesService = ApiRoutes.GetAllNotes;
export const AddNoteService = ApiRoutes.AddNote;
export const EditNoteService = ApiRoutes.EditNote;
export const DeleteNoteService = ApiRoutes.DeleteNote;
export const PinnedNoteService = ApiRoutes.PinnedNote;