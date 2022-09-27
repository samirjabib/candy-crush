import { useDispatch } from "react-redux";
import { AppDispatch } from "./use-app-dispatch";



export const useAppDispatch: () => AppDispatch = useDispatch;