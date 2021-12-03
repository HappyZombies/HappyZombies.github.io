import { makeStyles, Container, Typography, List, ListItem, ListItemText, Link } from "@material-ui/core";
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
    return (
        <ListItem>
            <ListItemText
                primaryTypographyProps={{ align: 'center' }}
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
        <Container>
            <Typography variant="h4" align="center" gutterBottom>{title}</Typography>
            <div>
                <List>
                    {posts.map((post, i) => <PostsLinkListItem post={post} type={type} key={i} />)}
                </List>
            </div>
        </Container>
    )
}

export default DisplayPostsLists;
