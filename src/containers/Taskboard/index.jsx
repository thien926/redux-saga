import AddIcon from "@mui/icons-material/Add";
import { Button, Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import React from "react";
import { STATUSES } from "../../constants";
import styles from "./styles";
import { useCallback } from "react";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { fetchListTask, filterTask } from "../../actions/task";
import { useSelector } from "react-redux";
import SearchBox from "../../components/SearchBox";

function TaskBoard(props) {
    const { classes } = props;

    const [open, setOpen] = React.useState(false);

    const listTask = useSelector((state) => state.task.listTask);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     // dispatch(fetchListTaskRequest());

    //     dispatch(fetchListTask());

    // //   return () => {
    // //     second;
    // //   };
    // }, [dispatch]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderBoard = useCallback(() => {
        console.log("renderBoard");
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {STATUSES.map((status, index) => {
                    const taskFiltered = listTask.filter(
                        (task) => task.status === status.value
                    );
                    return (
                        <TaskList
                            taskFiltered={taskFiltered}
                            status={status}
                            classes={classes}
                            key={index}
                        />
                    );
                })}
            </Grid>
        );
        return xhtml;
    }, [classes, listTask]);

    const renderForm = useCallback(() => {
        let xhtml = null;
        // const d = new Date();
        xhtml = <TaskForm open={open} handleClose={handleClose} />;
        return xhtml;
    }, [open]);

    const handleFilter = (e) => {
        // console.log('e: ', e);
        const { value } = e.target;
        dispatch(filterTask(value));
    }

    const renderSearchBox = () => {
        let xhtml = null;
        xhtml = <SearchBox handleFilter={handleFilter}/>;
        return xhtml;
    };

    const loadData = () => {
        // dispatch(fetchListTaskRequest());
        dispatch(fetchListTask());
    };

    return (
        <div className={classes.taskBoard}>
            <Button
                onClick={handleClickOpen}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                <AddIcon /> Thêm mới công việc
            </Button>
            <Button
                onClick={loadData}
                variant="contained"
                color="success"
                className={classes.button}
            >
                Load Data
            </Button>
            {renderSearchBox()}
            {renderBoard()}
            {renderForm()}

        </div>
    );
}

TaskBoard.propTypes = {
    fetchListTask: PropTypes.func,
    dispatch: PropTypes.func,
};

export default withStyles(styles)(TaskBoard);
