import { makeStyles, Typography, Link, List, ListItem, ListItemText, Grid, Container } from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";

import routes from "./routes";

const useStyles = makeStyles({
    centerList: {
        display: "table",
        margin: "0 auto"
    },
    listItemPadding: {
        paddingTop: 0,
        paddingBottom: 0
    },
    gridHeight: {
        minHeight: '100vh'
    }
});

const RouteLinkList = ({ route }) => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItemPadding}>
            <ListItemText
                primaryTypographyProps={{ variant: 'h6', style: { fontWeight: 'normal' } }}
                primary={
                    <Link component={LinkRouter} to={`/${route}`} color="secondary" underline="always">
                        {route}
                    </Link>
                }
            />
        </ListItem>
    )
}

function Home() {
    const classes = useStyles();
    return (
        <Container>
            <Grid className={classes.gridHeight} container spacing={0} direction="column" alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <div>
                        <Typography variant="h3" align="center" gutterBottom>Daniel Reguero</Typography>
                        <Typography variant="h6" align="center" gutterBottom>&gt; I just wanna make stuff</Typography>
                        <Typography variant="body1" align="center" gutterBottom><i>Isaiah 40:31</i></Typography>
                    </div>
                    <List className={classes.centerList}>
                        {routes.map((route, i) => <RouteLinkList route={route} key={i} />)}
                    </List>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;
