import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles, Container, Typography, Link } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const useStyles = makeStyles({
    images: {
        maxWidth: 500,
    }
})

function DisplayPost({ type }) {
    const classes = useStyles();
    const params = useParams();
    const notFoundText = "## Not Found\nSorry, couldn't find this post :(";
    const [markdownContent, setMarkdownContent] = useState(null);
    const [title, setTitle] = useState("");
    useEffect(() => {
        if (type === "blogs" || type === "projects") {
            let mdFile = null;
            let config = null;
            try {
                mdFile = require(`../posts/${type}/${params.id}`).default;
                config = require(`../posts/${type}/${type}`).default;
            } catch (e) {
                setMarkdownContent(notFoundText);
                return;
            }
            fetch(mdFile)
                .then((res) => res.text())
                .then((md) => {
                    setMarkdownContent(md);
                    const post = config.find((conf) => conf.path === params.id);
                    setTitle(post.title);
                })
                .catch(() => {
                    setMarkdownContent(notFoundText);
                });
            return;
        }
        setMarkdownContent(notFoundText);
        return;
    }, [type, params.id])
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>{title}</Typography>
            <Container maxWidth="md">
                <ReactMarkdown
                    components={{
                        a: ({ node, ...props }) => <Link color="secondary" {...props} />,
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={a11yDark}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        },
                        img: ({ node, ...props }) => <img alt={props.alt} className={classes.images} {...props} />,
                    }}

                    children={markdownContent}
                />
            </Container>
        </Container>
    );
}

export default DisplayPost;
