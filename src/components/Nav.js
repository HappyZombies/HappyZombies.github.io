import { makeStyles, AppBar, Toolbar, IconButton, Grid, Link } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { useNavigate, useLocation, Outlet, Link as LinkRouter } from "react-router-dom";

import routes from "../routes";

const useStyles = makeStyles(theme => {
    return {
        toolbar: theme.mixins.toolbar
    }
})

const BackButton = () => {
    // * silly implementation but it's fine for what I want...this assumes a lot.
    const navigate = useNavigate();
    const location = useLocation();
    let path = '/';
    let routeName = 'Home';
    if (!routes.find(r => `/${r}` === location.pathname)) {
        // if the route is not an exact match, the back button shall be whatever route matches closest the current route we are in.
        for (let i = 0; i < routes.length; i++) {
            const r = routes[i];
            if (location.pathname.includes(r)) {
                path = `/${r}`;
                routeName = r[0].toUpperCase() + r.substring(1).toLowerCase();
                break;
            }
        }
    }
    return (
        <Grid container direction="row" alignItems="center">
            <Grid item>
                <IconButton size="medium" edge="start" color="secondary" sx={{ mr: 2 }} onClick={() => navigate(path)}>
                    <ArrowBackIos />
                </IconButton>
                <Link component={LinkRouter} to={path} color="secondary" underline="none" variant="subtitle2" display="inline">
                    {routeName}
                </Link>
            </Grid>
        </Grid>
    )
}

function Nav() {
    const classes = useStyles();
    return (
        <div>
            <AppBar color="transparent" elevation={0}>
                <Toolbar>
                    <BackButton />
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar}></div>
            <Outlet />
        </div>
    )
}

export default Nav;
