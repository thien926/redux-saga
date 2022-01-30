import React, { useCallback } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import LoadingIcon from "../../assets/images/loading.gif";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function GlobalLoading(props) {
    const { classes } = props;
    const showLoading = useSelector((state) => state.ui.showLoading);

    const renderShowLoading = useCallback(() => {
        let xhtml = null;
        if (showLoading) {
            xhtml = (
                <div className={classes.globalLoading}>
                    <img
                        src={LoadingIcon}
                        alt="loading"
                        className={classes.icon}
                    />
                </div>
            );
        }
        return xhtml;
    }, [classes, showLoading]);

    return renderShowLoading();
}

GlobalLoading.propTypes = {
    classes: PropTypes.object,
    showLoading: PropTypes.bool,
};

export default withStyles(styles)(GlobalLoading);
