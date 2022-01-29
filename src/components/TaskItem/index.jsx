import { Card, CardActions, CardContent, Fab, Grid, Icon, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';
import styles from './styles';

function TaskItem(props) {
    const { classes, task, status } = props;
    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item md={8}>
                        <Typography component="h2">{task.title}</Typography>
                    </Grid>
                    <Grid item md={4}>
                        {status.label}
                    </Grid>
                </Grid>
                <p>{task.description}</p>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Fab color="primary" aria-label="Edit" className={classes.fab} size='small'>
                    <Icon fontSize='small'>
                        edit_icon
                    </Icon>
                </Fab>
                <Fab color="primary" aria-label="Delete" className={classes.fab} size='small'>
                    <Icon fontSize='small'>
                        delete_icon
                    </Icon>
                </Fab>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(TaskItem);
