import React from 'react'
import './Jobs.css'


const jobs = [

    {
      Role: "Java  Developer",
      Company: "TCS",
      Experience: "1-3 years",
      Skills: "java coding questions,Arrays,Stacks hashmaps",
      Avaliablepostion: 7,
      Location: "Blr/WFO",
    },
    {
      Role: "Devops Architect",
      Company: "TCS",
      Experience: "10-15 years",
      Skills: "Architecture & Design,CI/CD Pipeline Development,Collaboration & Leadership",
      Avaliablepostion: 1,
      Location: "Blr/WFO",
    },
    {
      Role: "QA Architect",
      Company: "TCS",
      Experience: "10-15 years",
      Skills: "QA Leadership,Team Mgmnt,Process,Automation,Architecture exp-pls refer JD",
      Avaliablepostion: 1,
      Location: "Blr/WFO",
    },
    {
      Role: "AI Architect",
      Company: "TCS",
      Experience: "10 years",
      Skills: "AI Research,hands-on experience with generative models and a desire to push the boundaries of innovation",
      Avaliablepostion: 1,
      Location: "Blr/WFO",
    },
    {
      Role: "Java full stack Developer Intern",
      Company: "kanishik services",
      Experience: "0-3 years",
      Skills: "Html,Css,java script,react.js,springboot,Mysql",
      Avaliablepostion: 5,
      Location: "Hyderabad",
    },
    {
      Role: "React js Intern",
      Company: "kanishik services",
      Experience: "0-3 years",
      Skills: "Html,Css,java script,react.js",
      Avaliablepostion: 5,
      Location: "Hyderabad",
    },
   
   
    
  ];

function Jobs() {
    return (
 <div className="jobscontainer">

        <h2 className='jobs'>Job Opportunities</h2>
        <p >(Apply Now for Top Roles in Leading Companies)</p>
        <div className="job-grid">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.Role}</h3>
              <p>
                <strong>Company:</strong> {job.Company}
              </p>
              <p>
                <strong>Experience:</strong> {job.Experience}
              </p>
              <p>
                <strong>Skills:</strong> {job.Skills}
              </p>
              <p>
                <strong>Avaliable postion:</strong> {job.Avaliablepostion}
              </p>
              <p>
                <strong>Location:</strong> {job.Location}
              </p>
              
            </div>
          ))}
        </div>
</div>
    )

}


export default Jobs;