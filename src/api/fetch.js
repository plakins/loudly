import { doFetch } from "../store/fetchable";
import { getUrl } from "./urls";
import Axios from "axios";

export const fetchForLibrary = (after) => (dispatch) => {
    dispatch(doFetch(
        'library',
        Axios.get(getUrl('/library.json')), 
        {
            afterAction: (result) => () => {
                after(result);
            }
        }
    ))
}