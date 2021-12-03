import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    gridHeight: {
        minHeight: '100vh'
    },
    paragraph: {
        margin: "1em 0"
    }
});

function DisplayPost({ title }) {
    const classes = useStyles();
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>Test Title Here</Typography>
            <Container maxWidth="md">
                <Typography className={classes.paragraph} gutterBottom>
                    Content Here
                </Typography>
            </Container>
        </Container>
    );
}

export default DisplayPost;
