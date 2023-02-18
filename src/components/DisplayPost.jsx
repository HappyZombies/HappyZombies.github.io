import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import matter from 'gray-matter';
import { Container, Typography, Link } from "@mui/material";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function DisplayPost({ type }) {
    const params = useParams();
    const notFoundText = "## Not Found\nSorry, couldn't find this post :(";
    const [markdownContent, setMarkdownContent] = useState(null);
    const [title, setTitle] = useState("");
    useEffect(() => {
        if (type === "blogs" || type === "projects") {
            import(`../posts/${type}/${params.id}.md`).then(res => {
                fetch(res.default).then(res => res.text()).then((md) => {
                    console.log(md);
                    const data = matter(md);
                    setMarkdownContent(data.content);
                    setTitle(data.data.title);
                }).catch((err) => {
                    console.log(err);
                    setMarkdownContent(notFoundText);
                })
            }).catch((err) => {
                console.log(err);
                setMarkdownContent(notFoundText);
            })
            return;
        }
        return;
    }, [])
    return (
        <Container sx={{ paddingTop: "1rem" }}>
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
                        img: ({ node, ...props }) => <img alt={props.alt} style={{ maxWidth: "100%" }} {...props} />,
                    }}

                    children={markdownContent}
                />
            </Container>
        </Container>
    );
}

export default DisplayPost;
