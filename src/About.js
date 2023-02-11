import { makeStyles, Container, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles({
    gridHeight: {
        minHeight: '100vh'
    },
    paragraph: {
        margin: "1em 0"
    }
});

function About() {
    const classes = useStyles();
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>About</Typography>
            <Container maxWidth="md">
                <Typography className={classes.paragraph} gutterBottom>
                    Hey there, I'm Daniel. A software engineer focused primarily on web
                    development.
                </Typography>
                <Typography className={classes.paragraph} gutterBottom>This blog is where I pretend to be an expert at things, and where I run into problems and attempt to solve them.</Typography>
                <Typography className={classes.paragraph} gutterBottom>
                    I enjoying developing in Node.js, and like using it along with relational databases in a lot of my personal
                    applications. I also like to dabble in Unity sometimes and contribute to open source projects when I have the chance.
                </Typography>
                <Typography className={classes.paragraph} gutterBottom>
                    Follow me on <Link color="secondary" href="https://github.com/HappyZombies" target="_blank" rel="noopener noreferrer">GitHub</Link> where I come up with my latest idea and never finish it!
                </Typography>
            </Container>
        </Container>
    );
}

export default About;
