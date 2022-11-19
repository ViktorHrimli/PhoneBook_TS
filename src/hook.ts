import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./redux/store";

// const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector };
