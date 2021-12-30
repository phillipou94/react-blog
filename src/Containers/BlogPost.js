import React, { useState, useEffect, useCallback, useRef } from "react";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import readingTime from "reading-time";
import { GithubSelector, GithubCounter } from "react-reactions";
import { userClient } from '../Utils/apollo'
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Helmet } from "react-helmet";


import { config } from "../config";
import { getEmojiByName, getNameByEmoji } from '../Utils/emoji';
import { getAuthenticatedUser } from '../Utils/auth'
import { Loader } from "../Components/Common";
import { PostContainer, PostTitle, PostDate, PostDateLink, PostReaction, BackButton, PostHeader, PostMetadata, PostCategory } from "../Components/Post";
import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';

import { Header } from "../Components/Header";
import { SubscribeButton, SubscribeContainer } from "../Components/Subscribe";
import { useHistory } from "react-router-dom";

export default function BlogHome() {
  const issueNumber = parseInt(window.location.href.split("/").pop());
  const GET_POSTS = gql`{
    repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
      issue(number: ${issueNumber}) {
        title
        body
        bodyHTML
        url
        bodyText
        number
        bodyHTML
        author {
          url
          avatarUrl
          login
        }
        labels(first: 100) {
          nodes {
            color
            name
            id
          }
        }
        updatedAt
        createdAt
        id
      }
    }
  }
  `;
  const [post, setPost, setLabels] = useState([]);
  const [postNodeId, setPostNodeId] = useState('');
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_POSTS);



  useEffect(() => {
    if (!loading) {
      if (data) {
        const issues = data.repository.issue;
        setPostNodeId(issues.id);
        setPost(issues);
        var postTitle = data.repository.issue.title
        document.title = postTitle;
      }
    }
  }, [loading, error, data]);

  if (loading) {
    return <Loader />;
  }

  var getReadingTime = (text) => {
    return Math.round(readingTime(text).minutes)
  }

  var getDate = (blog) => {
    var timestamp = blog.createdAt;
    return moment(timestamp).format(" MMM DD, YYYY")
  }

  var getCategory = (blog) => {
    const labels = blog.labels.nodes.filter((value) => {
      return value.name !== "blog";
    });
    if (labels.length > 0) {
      var node = labels[0]
      return node.name
    }
    
    return "";
  }

  const openCategory = (category) => {
    console.log("category")
    history.push(`/blog/${category}`);
  }


  return (
    <>
      <Helmet>
          <title>{post.title}</title>
          <meta charSet="utf-8" />
          <meta name="description" content={config.subtitle} />
          <meta name="theme-color" content={config.header.backgroundColor} />
      </Helmet>
      <Header />
      {post.title && (
        <PostContainer>
          <PostHeader>
            <div onClick={() => openCategory(getCategory(post))}>
              <PostCategory category = {getCategory(post)} />
            </div>
            <PostTitle>{post.title}</PostTitle>
            <PostMetadata date = {getDate(post)} time = {getReadingTime(post.body)}></PostMetadata>
          </PostHeader>
          
          <Markdown
            options={{
              overrides: {
                a: {
                  component: HyperLink
                },
                pre: {
                  component: CodeBlock
                }
              }
            }}
          >
            {post.body}
          </Markdown>
          <hr />
          <SubscribeContainer>
            <h1>❤️ Enjoying the blog?</h1>
            <p>If you’d like to notified of future posts every other week, subscribe below</p>
            <SubscribeButton category = {getCategory(post)} />
          </SubscribeContainer>
        </PostContainer>
      )}
    </>
  );
}
