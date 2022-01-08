import React, { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Helmet } from "react-helmet";
import { PageTitle } from "../Components/Blog";
import { Footer } from '../Components/Footer'
import {
    ExperienceCardDescription,
    ExperienceCardHeader,
    ExperienceCardJob,
    ExperienceCardLogo,
    ExperienceCardTitle,
    ExperienceCard
} from '../Components/ExperienceCard'

import MessagesLogo from '../Assets/messages_logo.png'
import YouTubeTVLogo from '../Assets/youtube_tv.png'
import GoogleLogo from '../Assets/google_logo.png'
import GooglePhotosLogo from '../Assets/google_photos_logo.png'
import TwitchLogo from '../Assets/twitch_logo.png'
import SnapchatLogo from '../Assets/snapchat_logo.jpg'
import DrChronoLogo from '../Assets/drchrono_logo.png'
import MITLogo from '../Assets/mit_logo.png'






const Experience = () => {
    return (
        <>
            <Helmet>
                <title>{"Experience"}</title>
            </Helmet>
            <Header />
            <PageTitle>Experience</PageTitle>
           
            <ExperienceCard> 
                <ExperienceCardHeader>
                    <ExperienceCardLogo src = {MessagesLogo} ></ExperienceCardLogo>
                    <ExperienceCardTitle>Android Messages</ExperienceCardTitle>
                </ExperienceCardHeader>
                <ExperienceCardJob>Product Manager | Conversation Experience | Aug. 2019 - Current</ExperienceCardJob>
                <ExperienceCardDescription>
                    <p>I lead a team of 20 engineers and 3 Designers responsible for building experiences related to conversation, composition, and sharing. </p>
                    <p> Ultimately, we try to answer: "What does it mean for you to feel connected to someone you're talking to?" and build experiences that facilitate that connection.</p>
                    <p>During my tenure, we <a target="_blank" rel="noopener noreferrer" href="https://www.theverge.com/2019/11/14/20964477/googles-rcs-chat-android-rollout-us-ccmi-texting-sms"> increased RCS Adoption</a>, 
                        launched <a target="_blank" rel="noopener noreferrer" href="https://www.theverge.com/2020/5/13/21256975/google-android-messages-rcs-emoji-reactions-test">Reactions</a> and a number of other features focused on self-expression</p>
                </ExperienceCardDescription>
            </ExperienceCard>

            <ExperienceCard> 
                <ExperienceCardHeader>
                    <ExperienceCardLogo src = {YouTubeTVLogo} ></ExperienceCardLogo>
                    <ExperienceCardTitle>YouTube TV</ExperienceCardTitle>
                </ExperienceCardHeader>
                <ExperienceCardJob>Product Manager | Ads Platform | Aug. 2018 - Aug 2019</ExperienceCardJob>
                <ExperienceCardDescription>
                    <p>I was the PM responsible for launching <a href="https://adage.com/article/special-report-newfronts/youtube-selling-ads-live-tv-service/313284"> YouTube TV’s advertising platform</a>. 
                    During my time there, the team launched Dynamic Ad Insertion (seamlessly stitching personalized ads onto a live television stream) and onboarded broadcasters to enable live TV ad serving.</p>      
                    <p>We also launched a number of <a target="_blank" rel="noopener noreferrer" href="https://ppcexpo.com/blog/youtube-tv-ads"> advertiser-facing features </a> ahead of the 2019 Upfronts Season such as: advanced ad targeting & reporting, campaign forecasting, and program exclusions (the first DMVPD to offer this functionality).</p>
                </ExperienceCardDescription>
            </ExperienceCard>            
            
            <ExperienceCard> 
                <ExperienceCardHeader>
                    <ExperienceCardLogo src = {GoogleLogo} ></ExperienceCardLogo>
                    <ExperienceCardTitle>Google Search</ExperienceCardTitle>
                </ExperienceCardHeader>
                <ExperienceCardJob>PM Intern | Events Search | Jun 2017 - Sep 2017</ExperienceCardJob>
                <ExperienceCardDescription>
                    <p> I led a team of engineers and designers to redesign the mobile search experience for users who look up concerts, festivals and events.  <a target="_blank" rel="noopener noreferrer" href="https://techcrunch.com/2018/07/26/google-revamps-local-events-search-to-include-personalized-suggestions/">TechCrunch</a>                    and <a target="_blank" rel="noopener noreferrer" href="https://www.theverge.com/2018/7/26/17617522/google-search-events-recommendations-interest-based">The Verge</a>.</p>      
                </ExperienceCardDescription>
            </ExperienceCard>   


            <ExperienceCard> 
                <ExperienceCardHeader>
                    <ExperienceCardLogo src = {GooglePhotosLogo} ></ExperienceCardLogo>
                    <ExperienceCardTitle>Google Photos</ExperienceCardTitle>
                </ExperienceCardHeader>
                <ExperienceCardJob>Software Engineering Intern | iOS App | Jun 2016 - Sep 2016</ExperienceCardJob>
                <ExperienceCardDescription>
                    <p> I led the research and development of new features utilizing Apple’s iOS API. I also ancorporated 3D Touch into various entrypoints in the iOS application.</p>      
                </ExperienceCardDescription>
            </ExperienceCard>  

            <ExperienceCard> 
                <ExperienceCardHeader>
                    <ExperienceCardLogo src = {TwitchLogo} ></ExperienceCardLogo>
                    <ExperienceCardTitle>Twitch</ExperienceCardTitle>
                </ExperienceCardHeader>
                <ExperienceCardJob>Software Engineering Winter Extern | Commerce | Jan 2016 - Feb 2016</ExperienceCardJob>
                <ExperienceCardDescription>
                    <p> During my month at Twitch, I created a new admin dashboard to support the Web, Commerce, and Digital Monetization Teams.</p>    
                    <p> I also automated the deployment of Amazon DynamoDB, Lambda, and SQS saving the development team hours of manual configuration time across multiple development servers</p>  
                </ExperienceCardDescription>
            </ExperienceCard> 

            <ExperienceCard> 
                <ExperienceCardHeader>
                    <ExperienceCardLogo src = {SnapchatLogo} ></ExperienceCardLogo>
                    <ExperienceCardTitle>Snapchat</ExperienceCardTitle>
                </ExperienceCardHeader>
                <ExperienceCardJob>Software Engineering Intern | Identity | Jun 2015 - Aug 2015</ExperienceCardJob>
                <ExperienceCardDescription>
                    <p> I was a member of the Snapchat Identity Team focused on user profiles and implemeneted the Add Nearby Feature for iOS and Android.</p>    
                    <p> I was also the sole developer for the <a target="_blank" rel="noopener noreferrer" href="https://www.theverge.com/2018/7/26/17617522/google-search-events-recommendations-interest-based"> Trophy Case</a> feature, 
                        implementing the entire project across iOS, Android, and the Java Backend</p>  
                </ExperienceCardDescription>
            </ExperienceCard> 

            <ExperienceCard> 
                <ExperienceCardHeader>
                    <ExperienceCardLogo src = {DrChronoLogo} ></ExperienceCardLogo>
                    <ExperienceCardTitle>drchrono</ExperienceCardTitle>
                </ExperienceCardHeader>
                <ExperienceCardJob>iOS Developer | Apple Watch | Mar 2015 - Jun 2015 </ExperienceCardJob>
                <ExperienceCardDescription>
                    <p> I created the Onpatient Apple Watch and ICD-10 application featured on the Wall Street Journey. I was invited onto Apple’s campus to work on the application ahead of the official launch of the Apple Watch.</p>    
                    <p> I also implemented the corresponding features on the company’s award-winning PHR and EHR iPhone and iPad applications</p>  
                </ExperienceCardDescription>
            </ExperienceCard> 

            <ExperienceCard> 
                <ExperienceCardHeader>
                    <ExperienceCardLogo src = {MITLogo} ></ExperienceCardLogo>
                    <ExperienceCardTitle>MIT</ExperienceCardTitle>
                </ExperienceCardHeader>
                <ExperienceCardJob>B.S. in Electrical Engineering & Computer Science | Class of 2018</ExperienceCardJob>
                <ExperienceCardDescription>
                    <p> I was the first person in my family to attend university and studied EECS with a humanities concentration in Economics.</p>    
                    <p> During my time at MIT, I was a member of the Varsity Basketball team my freshman year, a section leader for the Gordon Engineering Leadership program, and was a multi-year recipient of MIT Alumni Scholarships.</p>  
                </ExperienceCardDescription>
            </ExperienceCard> 

            <Footer />
        </>
        );
}

export default Experience;
