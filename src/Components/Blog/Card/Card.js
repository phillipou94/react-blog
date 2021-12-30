import React, { useState, useEffect } from "react";
import readingTime from "reading-time";
import { useHistory } from "react-router-dom";
import moment from "moment";

import {
  PostPreview,
  CardHeader,
  CardCategory,
  CardTitle,
  CardDescription,
  CardMetadata
} from './'

export const Card = ({ blog }) => {
  const [labels, setLabels] = useState([]);
  const history = useHistory();

  const openBlog = (title, number) => {
    history.push(`/post/${title}/${number}`);
  }

  const openCategory = (category) => {
    console.log("category")
    history.push(`/blog/${category}`);
  }

  useEffect(() => {
    const labels = blog.labels.nodes.filter((value) => {
      return value.name !== "blog";
    });

    setLabels(labels);
  }, [blog.labels.nodes]);

  var getReadingTime = (text) => {
    return Math.round(readingTime(text).minutes)
  }

  var getDate = (blog) => {
    var timestamp = blog.createdAt;
    return moment(timestamp).format(" MMM DD, YYYY")
  }

  return (
    <PostPreview>
      <CardHeader>
        {labels.map((value, i) => {
          return (
            <div onClick={() => openCategory(value.name)}>
              <CardCategory value={value} key={i} />
            </div>
          );
        })}
      </CardHeader>
      <div onClick={() => openBlog(blog.title, blog.number)}>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>
          {blog.bodyText}
        </CardDescription>
        <CardMetadata date = {getDate(blog)} time={getReadingTime(blog.body)} />
      </div>
    </PostPreview>
  );
}
