import React from 'react'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {

const careers = [
    {
    title: "Chi-X Global Technology",
    position:"Developer",
    techStack: ["ReactJS", "Redux", "NodeJs"],
    dateEmployed: "Oct 2020 - Oct 2021",
    descriptions:[
        "I was able to learn about the foundation of React and Redux",
        "I was able to deliver the deliverables efficiently",
    ]
    },
    {
    title: "PCCW Solutions",
    position:"Solutions Developer",
    techStack: ["Angular", "Java", "MongoDB"],
    dateEmployed: "Aug 2019 - Feb 2020",
    descriptions:[
        "Had the opportunity to learn more about Java Development",
        "Spearheaded the front end development for the application"
    ]
    },
    {
    title: "Accenture",
    position:"Software Engineer",
    techStack: ["Angular", ".Net", "MySQL"],
    dateEmployed: "Feb 2015 - July 2019",
    descriptions:[
        "Had the opportunity to create an application from scratch.",
        "Able to contribute in stabilization, testing and backlogs for the application",
        "Had a lot of involvement in testing because I was part of the agile team since thestart of the project up to the production deployment",
        "Automated support tasks for the on-call support",
        "Had the opportunity to participate in the company's C# boot camp",
    ]
    },
    {
    title: "Maersk",
    position:"Process Associate",
    techStack: [],
    dateEmployed: "May 2014 - Jan 2015",
    descriptions:[
        "I was able to mold most of my soft skills that I was able to use in webdevelopment, like being able to deliver in high demand for quick turnarounds",
        "Offered recommendation that enables a smoother process for the team",
        "Worked with a team to investigate potential issues that may arise from datadelivery, data acquisition and processing."
    ]
    },
]


  return (
    <div className="pt-11 mt-4">
      <h1>Hello, I'm Jayson!</h1>
      <p>
        
        I am a <b>Front End Developer</b> and I'm currently interested in
        <b> React, UI and UX design</b>. I am going to share the things I learned
        on my blog and twitter account, so that I can also help other developers
        who might encounter the same issues that I had. I will also post some of
        the helpful tips that benefited me along my journey.
      </p>

      <h1>Career</h1>
      <p>
        
        I'm currently available for any <b>remote job opportunities</b>! I'm
        much more familiar with the tech stack of <b>React and Node.js</b>. I'm
        also a newbie when it comes to UI and UX Design.
      </p>
      <a target="_blank" href="mailto: jaseleodones@gmail.com">
        <FontAwesomeIcon color="blue" size="1x" icon={faEnvelope} className="mr-2 email-link" />
        <i className="underline text-blue-600 hover:text-blue-800">Send Email</i>
      </a>

      <div className="my-4">
          
        {careers.map((career,index) => (
            <>
            <div className='grid grid-cols-2'>
                <h2 key={index}>{career.title}</h2>
                <p className='mt-5 ml-5'><i>{career.position} ({career.dateEmployed})</i></p>
            </div>
            <div className='flex gap-4'>
                {career.techStack.map(stack =>(
                    <p className='rounded-full border-black border-2 px-4'>{stack}</p>
                ))}
            </div>
            <ul>
                {career.descriptions.map(description => (
                    <li> &bull; {description}</li>
                    )
                )}
            </ul>
            </>
        ))}
      </div>
    </div>
  );
}
