import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox(props) {
    const { classes, handleFilter } = props;

    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
            }}
            onSubmit={onSubmit}
            className={classes.container}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Tìm kiếm"
                inputProps={{ "aria-label": "Tìm kiếm" }}
                onChange={handleFilter}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleFilter: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
