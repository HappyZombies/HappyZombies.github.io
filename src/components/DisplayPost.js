import { Component } from "react";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";

import { updateLink } from "../linkaction";
import "../App.css";

const DateHeader = ({ date }) => {
  return (
    <h5 className="feat">
      <span>
        <i>{date}</i>
      </span>
    </h5>
  );
};

class DisplayPost extends Component {
  constructor(props) {
    super(props);
    props.updateLink(`${process.env.PUBLIC_URL}/${props.type}`);
    this.posts = require(`../posts/${props.type}/${props.type}.json`);
  }
  state = {
    content: null,
    date: null,
  };
  notFoundText = "# Not Found\nSorry, couldn't find this post :(";

  componentDidMount() {
    const { id } = this.props.match.params;
    const { type } = this.props;
    let foundPost = null;
    this.posts?.forEach((post) => {
      if (post.id === id) {
        foundPost = post;
        return;
      }
    });

    if (foundPost !== null) {
      let mdFile;
      try {
        mdFile = require(`../posts/${type}/${foundPost.path}`).default;
      } catch (e) {
        this.setState({ content: this.notFoundText });
        return;
      }
      fetch(mdFile)
        .then((res) => res.text())
        .then((md) => {
          this.setState({
            content: md,
            date: foundPost.date,
            title: foundPost.title,
          });
        })
        .catch(() => {
          this.setState({ content: this.notFoundText });
        });
    } else {
      this.setState({ content: this.notFoundText });
    }
  }
  render() {
    const { content, date, title } = this.state;
    return (
      <div className="App post-display">
        {date ? <DateHeader date={date} /> : null}
        <h3>{title}</h3>
        <div className="post-content">
          <ReactMarkdown children={content} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLink: (link) => dispatch(updateLink(link)),
  };
};

const mapStateToProps = (state) => ({
  link: state.link.link,
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPost);
