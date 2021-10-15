import React, { useCallback  } from 'react';
import { ToggleButton, ToggleButtonGroup} from "@mui/material";
import PropTypes from "prop-types";
import { ViewListOutlined, ViewModuleOutlined } from "@mui/icons-material";
import { DATA_VIEW_MODES } from "../../constants/constants";

const ToggleDataViewMode = ({dataViewMod, setDataViewMod}) => {
    const handleChangeViewMode = useCallback((_, nextView) => {
        setDataViewMod(nextView);
    },[setDataViewMod])
    return (
        <ToggleButtonGroup
            value={dataViewMod}
            exclusive
            onChange={handleChangeViewMode}
        >
            <ToggleButton value={DATA_VIEW_MODES.TABLE} aria-label="DATA_VIEW_MODES.TABLE">
                <ViewListOutlined />
            </ToggleButton>
            <ToggleButton value={DATA_VIEW_MODES.GRID} aria-label="DATA_VIEW_MODES.GRID">
                <ViewModuleOutlined />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ToggleDataViewMode;

ToggleDataViewMode.propTypes = {
    dataViewMode: PropTypes.oneOf([DATA_VIEW_MODES.TABLE, DATA_VIEW_MODES.GRID]).isRequired,
    setDataViewMod: PropTypes.func.isRequired,
}