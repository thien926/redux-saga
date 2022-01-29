import { Box, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';
import TaskItem from '../TaskItem';
import styles from './styles';

function TaskList(props) {
    const { status, classes, taskFiltered } = props;
    return (
        <Grid item md={4} xs={12}>
            <Box mt={2} mb={2}>
                <div className={classes.status}>{status.label}</div>
            </Box>
            <div className={classes.wrapperListTask}>
                {taskFiltered.map((task) => {
                    return <TaskItem key={task.id} task={task} classes={classes} status={status} />;
                })}
            </div>
        </Grid>
    );
}

export default withStyles(styles)(TaskList);
