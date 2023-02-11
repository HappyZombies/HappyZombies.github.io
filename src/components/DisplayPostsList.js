import { makeStyles, Typography, ListItem, ListItemText, Link, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";

const useStyles = makeStyles({
    dataText: {
        color: '#666',
        paddingRight: 20
    },
    dashPadding: {
        padding: '0 10px'
    }
})

const PostsLinkListItem = ({ type, post }) => {
    const classes = useStyles();
    // if (post.draft) {
    //     return null;
    // }
    return (
        <ListItem disableGutters>
            <ListItemText
                primary={
                    <>
                        <span className={classes.dataText}>{post.date}</span>
                        <Link component={LinkRouter} to={`/${type}/${post.path}`} color="secondary" underline="always" display="inline">
                            {post.title}
                        </Link>
                        <span>
                            <span className={classes.dashPadding}>-</span>
                            &#91;{post.category}&#93;
                        </span>
                    </>
                }
            />
        </ListItem>
    )
}

function DisplayPostsLists({ title, type, posts }) {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={3}>
                <Typography variant="h4" gutterBottom>{title}</Typography>
            </Grid>
            <Grid item xs={5}>
                {posts.map((post, i) => <PostsLinkListItem post={post} type={type} key={i} />)}
            </Grid>
        </Grid>
    )
}

export default DisplayPostsLists;
