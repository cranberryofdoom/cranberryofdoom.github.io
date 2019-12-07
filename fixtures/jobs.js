import moment from "moment";
import diyProjects from "./projects/diy";

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
        type: "React Video Controls Tutorial",
        url:
          "https://paper.dropbox.com/doc/Video-Player-Controls-rUiNUVgb7v28U6Jxhjfwi"
      }
    ],
    projects: diyProjects
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

export default jobs;
