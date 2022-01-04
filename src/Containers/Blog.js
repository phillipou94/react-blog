import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { useParams } from "react-router-dom";


import { config } from "../config";
import { Header } from "../Components/Header";
import { Loader } from '../Components/Common'
import { Footer } from '../Components/Footer'
import { PageTitle, BlogContainer } from '../Components/Blog'
import { Card } from '../Components/Blog/Card'

const posts_per_page = 10;

const constructQuery = (category, page_number) => {
  var label_category = (typeof category == 'undefined') ? "blog" : category;

  var i = (typeof page_number === 'undefined') ? 1 : page_number;
  
  return gql`
    {
      repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
        issues(first: 100, states: OPEN, filterBy: { labels: "${label_category}" }, orderBy: { direction: DESC, field: CREATED_AT }) {
          nodes {
            title
            body
            bodyHTML
            bodyText
            number
            labels(first: 100) {
              nodes {
                color
                name
                id
              }
            }
            author {
              url
              avatarUrl
              login
            }
            updatedAt
            createdAt
            id
          }
        }
      }
    }
    `

}
const Blog = () => {
  const [posts, setPosts] = useState([]);
  
  const { category, page_number } = useParams();

  const query = constructQuery(category,page_number);

  const { loading, error, data } = useQuery(query);
  


  useEffect(() => {
    if (!loading) {
      document.title = "Phil Ou"
      if (error) {
        console.error(error)
      }

      if (data) {
        console.log(data)
        setPosts(data?.repository?.issues?.nodes)
      }
    }
  }, [loading, error, data]);

  const pageTitle = (typeof category == 'undefined' || category == "blog") ? "Recent Posts" : category;

  return (
    <>
      <Header />
      <PageTitle>{pageTitle}</PageTitle>
      <BlogContainer>
        
        {
          loading
          ? <Loader />
          : posts.map((v, i) => {
              return <Card blog={v} key={i} />;
            })
        }
      </BlogContainer>
      <Footer />
    </>
  );
}

export default Blog;
