import React, { useState, useEffect, useCallback, useRef } from "react";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import readingTime from "reading-time";
import { GithubSelector, GithubCounter } from "react-reactions";
import { userClient } from '../Utils/apollo'
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { config } from "../config";
import { getEmojiByName, getNameByEmoji } from '../Utils/emoji';
import { getAuthenticatedUser } from '../Utils/auth'
import { Loader } from "../Components/Common";
import { PostContainer, PostTitle, PostDate, PostDateLink, PostReaction, BackButton, PostHeader, PostMetadata, PostCategory } from "../Components/Post";
import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';

import { Header } from "../Components/Header";

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
        id
      }
    }
  }
  `;
  const [post, setPost, setLabels] = useState([]);
  const [postNodeId, setPostNodeId] = useState('');
  const [reactionPopup, setReactionPopup] = useState(false);
  const [postReactions, setPostReactions] = useState([]);
  const [postComments, setPostComments] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);
  const reactionsContainer = useRef(null);
  const userToken = localStorage.getItem('githubToken');



  useEffect(() => {
    if (!loading) {
      if (data) {
        const issues = data.repository.issue;
        setPostNodeId(issues.id);
        setPost(issues);
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
    var timestamp = blog.updatedAt;
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

  return (
    <>
      <head><title>{post.title}</title></head>
      <Header />
      {post.title && (
        <PostContainer>
          <PostHeader>
            <PostCategory category = {getCategory(post)} />
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
        </PostContainer>
      )}
    </>
  );
}
