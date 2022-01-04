import React, { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Helmet } from "react-helmet";
import { PageTitle } from "../Components/Blog";
import { Footer } from '../Components/Footer'





const About = () => {
  return (
    <div>
        <Helmet>
          <title>{"About"}</title>
        </Helmet>
        <Header />
        <div class = "page">
            <PageTitle>About</PageTitle>
            <div class="markdown-body">

              <p>Hi there 👋!</p>
              <p>I’m Phil. I’m a Product Manager at Google and, on nights and weekends, I coach and mentor current/aspiring PMs.</p>
              <p>I also work on this: my humble diary of things I’m thinking through “out loud”. Generally, I roam over subjects like technology, economics, personal development, and current events.</p>
              <p>I won’t claim to be an expert in any of these topics but they’re all personally interesting to me and I hope writing about them will help clarify my own thinking and point of view.</p>
              <p>This will mostly be a self-serving venture but maybe—just maybe—you’ll benefit from it as much as I do 🙂</p>
            </div>
        <Footer />
        </div>
    </div>
  );
}

export default About;
