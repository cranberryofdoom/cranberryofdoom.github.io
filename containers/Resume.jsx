import React, { Component } from "react";
import moment from "moment";
import "./Resume.scss";

const jobs = [
  {
    title: "Lead Frontend Engineer",
    company: "DIY",
    start: moment("2015-05"),
    end: null,
    summary: [
      "Responsible for architecting and defining patterns the frontend web app; migrated the codebase from Flux to Redux, and now working on migrating from Redux to GraphQL.",
      "Works closely with design, marketing and executive teams to create roadmaps, implement, and deploy projects for not only mission-critical areas like our core product and registration flows, but our internal content moderation/course administration tools, subscription management tools, and marketing pages.",
      "Currently improving our frontend testing infrastructure to increase reliability and confidence of features deployed, as well as building out the development team by improving the interview process to optimize  for hiring competent, empathetic developers with a strong sense of mission."
    ],
    links: [
      {
        type: "JAM Storybook",
        url: "https://diy.github.io/nimbus"
      },
      {
        type: "JAM Frontend Overview",
        url:
          "https://paper.dropbox.com/doc/JAM-Frontend-Web-Overview--ASm9NJQHmAwbpFvVO3_MYQptAg-gSOdAxWwHo4s9Yu35i8G0"
      },
      {
        type: "Talk: Video Controls",
        url:
          "https://paper.dropbox.com/doc/Video-Player-Controls-rUiNUVgb7v28U6Jxhjfwi"
      }
    ]
  },
  {
    title: "Frontend Engineering Intern",
    company: "eBay",
    start: moment("2014-05"),
    end: moment("2014-08"),
    summary: [
      "Rebuilt the eBay Now operations dashboard, a tool that allowed account managers to keep track of the status of the scheduled deliveries made.",
      "Helped eBay Local Mall team build a header widget that allows a user to specify their location for a more localized shopping experience."
    ]
  },
  {
    title: "Co-Founder",
    company: "HackDuke",
    start: moment("2013-09"),
    end: moment("2015-05"),
    summary: [
      "Founded the largest collegiate hackathon that focused on the intersection of technology and social good in the nation. Organized the event for 3 successful iterations, managing a team of 15 students, inviting a total of 1300 participants from 40 universities from across the continent, and raising a total of $183k in sponsorship from 60 tech companies. Oversaw all moving parts of a hackathon, such as: design, marketing, logistics, sponsorship, mentorship, educational events and community impact."
    ]
  },
  {
    title: "Creative Director",
    company: "Duke Innovative Design Agency",
    start: moment("2012-09"),
    end: moment("2015-05"),
    summary: [
      "Led Duke University’s marketing & design agency and managed more than 300 yearly design projects submitted by undergraduate/graduate student organizations and university departments.",
      "Mentored 35 designers to improve design skills, design theory, client interaction and career opportunities."
    ]
  }
];

const talks = [
  {
    event: "Sentry Scouts: Art & Tech",
    date: moment("2017-06"),
    links: [
      {
        type: "Recap",
        url: "https://blog.sentry.io/2018/10/01/sentry-scouts-arts-tech-recap"
      }
    ]
  },
  {
    event: "Keen IO: Open Source Show & Tell",
    date: moment("2017-06"),
    links: [
      {
        type: "Recap",
        url:
          "https://blog.keen.io/9-projects-showcased-at-open-source-show-and-tell-2017/"
      },
      {
        type: "Video",
        url: "https://vimeo.com/album/4676161/video/223516345"
      }
    ]
  }
];

const features = [
  {
    where: "MakeFashion",
    date: moment("2018-09"),
    links: [
      {
        type: "video",
        url:
          "https://www.youtube.com/watch?v=2EexjlKB2uc&feature=youtu.be&t=24s"
      }
    ]
  },
  {
    where: "Bay Area Makerfaire",
    date: moment("2018-05"),
    links: [
      {
        type: "Project",
        url: "https://makerfaire.com/maker/entry/65202/edit/"
      }
    ]
  },

  {
    where: "France24",
    date: moment("2018-04"),
    links: [
      {
        type: "Video",
        url:
          "https://www.youtube.com/watch?v=hOcQkrVLFS8&feature=youtu.be&t=10m22s"
      }
    ]
  },
  {
    where: "Make:Magazine",
    date: moment("2018-03"),
    links: [
      {
        type: "Recap",
        url: "https://twitter.com/its_ashworks/status/975132496084975616"
      },
      {
        type: "Article",
        url:
          "https://medium.com/@its_ashworks/creating-the-corgi-keyboard-v1-c4aa50e64bf4"
      }
    ]
  },
  {
    where: "New York World Makerfaire",
    date: moment("2017-09"),
    links: [
      {
        type: "Project",
        url: "https://makerfaire.com/maker/entry/62904/edit/"
      }
    ]
  },
  {
    where: "Bay Area Makerfaire",
    date: moment("2017-05"),
    links: [
      {
        type: "Project",
        url: "https://makerfaire.com/maker/entry/60015/edit/"
      }
    ]
  }
];

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <div className="resume">
          <div className="resume-header">
            <h1>Ashley Qian</h1>
            <div className="links row">
              <a href="https://github.com/cranberryofdoom">Github</a>
              <a href="https://www.linkedin.com/in/ashleyqian/">LinkedIn</a>
              <a href="mailto:ashley.qian.0@gmail.com">Email</a>
              <a href="/">Website</a>
            </div>
          </div>
          <section>
            <h2>Experience</h2>
            {jobs.map(job => {
              const start = job.start;
              const end = job.end ? job.end : moment();
              const duration = moment.duration(end.diff(start));
              const years = duration.years();
              const months = duration.months();
              return (
                <article className="job">
                  <header className="job-header">
                    <h3>{job.title}</h3>
                    <h4>{job.company}</h4>
                    <div className="job-details">
                      <span>
                        {job.start.format("MMM YYYY")} —{" "}
                        {job.end ? job.end.format("MMM YYYY") : "Present"}
                      </span>
                      <span> · </span>
                      <span>
                        {years ? `${years} yr${years === 1 ? "" : "s"} ` : ""}
                        {months ? `${months} mo${months === 1 ? "" : "s"}` : ""}
                      </span>
                    </div>
                  </header>
                  <div className="job-summary">
                    {job.summary.map(point => (
                      <p>{point}</p>
                    ))}
                  </div>
                  <div className="links row">
                    {job.links &&
                      job.links.map(link => <a href={link.url}>{link.type}</a>)}
                  </div>
                </article>
              );
            })}
          </section>
          <section>
            <h2>Education</h2>
            <article className="school">
              <header>
                <h3>Duke University</h3>
                <div className="job-details">Class of 2015</div>
              </header>
              <p>B.A. Computer Science & Minor in Woman’s Studies</p>
            </article>
          </section>
          <section>
            <h2>Talks</h2>
            {talks.map(talk => (
              <article>
                <h3>{talk.event}</h3>
                <div className="job-details">
                  {talk.date.format("MMM YYYY")}
                </div>
                <div className="links row">
                  {talk.links.map(link => (
                    <a href={link.url}>{link.type}</a>
                  ))}
                </div>
              </article>
            ))}
          </section>
          <section>
            <h2>Featured</h2>
            {features.map(feature => (
              <article>
                <h3>{feature.where}</h3>
                <div className="job-details">
                  {feature.date.format("MMM YYYY")}
                </div>
                <div className="links row">
                  {feature.links.map(link => (
                    <a href={link.url}>{link.type}</a>
                  ))}
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    );
  }
}
