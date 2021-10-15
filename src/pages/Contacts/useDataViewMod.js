import {DATA_VIEW_MODES} from "../../constants/constants";
import {useEffect, useState} from "react";


const getInitialDataViewMode = () => {
    return localStorage.getItem("dataViewMod") ||   DATA_VIEW_MODES.TABLE
}
export const useDataViewMode = () =>{
    const [dataViewMod, setDataViewMod] = useState(getInitialDataViewMode);
    useEffect(() =>{
        localStorage.setItem("dataViewMod", dataViewMod);
    },[dataViewMod])
    return [dataViewMod, setDataViewMod]
}