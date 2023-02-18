import { makeStyles, Typography, ListItem, ListItemText, Link, Grid } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

// const useStyles = makeStyles({
//     dataText: {
//         color: '#666',
//         paddingRight: 20
//     },
//     dashPadding: {
//         padding: '0 10px'
//     }
// })

const PostsLinkListItem = ({ type, post }) => {
    return (
        <ListItem disableGutters>
            <ListItemText
                primary={
                    <>
                        <span>{post.date}</span>
                        <Link component={LinkRouter} to={`${post.id}`} color="secondary" underline="always" display="inline">
                            {post.title}
                        </Link>
                        <span>
                            <span>-</span>
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
