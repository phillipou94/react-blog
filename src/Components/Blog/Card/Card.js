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
    history.push(`/blog/${title}/${number}`);
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
    var timestamp = blog.updatedAt;
    return moment(timestamp).format(" MMM DD, YYYY")
  }

  return (
    <PostPreview>
      <CardHeader>
        {labels.map((value, i) => {
          return (
            <CardCategory value={value} key={i} />
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


// return (
//   <PostPreview>
//     <CardHeader>
//       {labels.map((value, i) => {
//         return (
//           <CardCategory value={value} key={i} />
//         );
//       })}
//       <CardReadingTime time={readingTime(blog.body).minutes} />
//     </CardHeader>
//     <div onClick={() => openBlog(blog.title, blog.number)}>
//       <CardTitle>{blog.title}</CardTitle>
//       <CardDescription>
//         {blog.bodyText}
//       </CardDescription>
//     </div>
//   </PostPreview>
// );
 