import { Typography, Link, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)(() => ({
    "& .MuiTypography-root": {
        margin: "1em 0"
    }
}));

function About() {
    return (
        <>
            <Typography variant="h4" align="center" gutterBottom>About</Typography>
            <StyledContainer maxWidth="md">
                <Typography gutterBottom>
                    Hey there, I'm Daniel. A software engineer focused primarily on web
                    development.
                </Typography>
                <Typography gutterBottom>This blog is where I pretend to be an expert at things, and where I run into problems and attempt to solve them.</Typography>
                <Typography gutterBottom>
                    I enjoying developing in Node.js, and like using it along with relational databases in a lot of my personal
                    applications. I also like to dabble in Unity sometimes and contribute to open source projects when I have the chance.
                </Typography>
                <Typography gutterBottom>
                    Follow me on <Link color="secondary" href="https://github.com/HappyZombies" target="_blank" rel="noopener noreferrer">GitHub</Link> where I come up with my latest idea and never finish it!
                </Typography>
            </StyledContainer>
        </>
    );
}

export default About;
