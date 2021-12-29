import React, { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Helmet } from "react-helmet";




const About = () => {
  return (
    <div>
        <Helmet>
          <title>{"About"}</title>
        </Helmet>
        <Header />
        <div class = "page">
            
            <div class="markdown-body">

            <p>Hi there 👋!</p>
            <p>I don’t know how you stumbled upon this modest corner of the internet but I’m happy that you stopped by.</p>
            <p>I’m Phil. I’m a Product Manager at Google and, on nights and weekends, I coach and mentor current/aspiring PMs.</p>
            <p>I also work on this blog which is my humble diary of personally interesting topics I’m thinking through “out loud”.</p>
            <p>I’ll dissect lessons from books I’ve read, advice I’ve received from mentors, and the occasional shower thought about business, politics, and the state of the world we’re living in. And while these topics will be all over the place, they’ll all have the following in common:</p>
            <ol>
            <li>
            <p>I’ll only have a very superficial grasp on these ideas</p>
            </li>
            <li>
            <p>I genuinely think they’re super interesting and impactful</p>
            </li>
            <li>
            <p>I really want to understand better through writing</p>
            </li>
            </ol>
            <p>While reading helps me identify blind spots, it’s writing that helps me focus and streamline my thoughts.</p>
            <p>To write well is to think clearly. For each post, I hope to answer: How much of this new idea can I actually crystallize into a succinct, coherent thought?</p>
            <p>This is (mostly) a self-serving venture but maybe—just maybe—you’ll benefit from it as much as I do 🙂</p>    

            </div>


        </div>
    </div>
  );
}

export default About;
