import React from 'react'
import './Trainings.css'


const trainings = [
    {
      title: "JavaFull Stack Developer",
      mode: "Online ",
      batch: "Weekday Batch",
      date: "06-01-2025",
      time: "08:15 AM to 10:00 AM",
      duration: "3.5 - 4 Months",
    },
    {
      title: "MERN stack developer",
      mode: "Online Live ",
      batch: "Weekend Batch",
      date: "14-12-2024",
      time: "08:30 AM to 12:30 PM",
      duration: "3.5 - 4 Months",
    },
    {
      title: "FrontEnd with React.js",
      mode: "Online",
      batch: "Weekend Batch",
      date: "08-12-2024",
      time: "05:00 PM to 08:00 PM",
      duration: "2 Months (40-50 Hours)",
    },
    
  ];
  

function Trainings() {
    return (

        <div className="Trainingcontainer">
        <h2 className='Trainings'>Upcoming Training Batches</h2><p>(For Fresher's and Working Professionals)</p><div className="training-grid">
            {trainings.map((training, index) => (
                <div key={index} className="training-card">
                    <h3>{training.title}</h3>
                    <div className="tags">
                        <p>
                            <span className="tag">{training.mode}</span> </p>
                        <p>
                            <span className="tag">{training.batch}</span></p>
                    </div>
                    <p>
                        <strong>Date:</strong> {training.date}
                    </p>
                    <p>
                        <strong>Time:</strong> {training.time}
                    </p>
                    {training.access && <p>{training.access}</p>}
                    {training.status && <p className="status">{training.status}</p>}
                    <p>
                        <strong>Duration:</strong> {training.duration}
                    </p>
                </div>
            ))}
        </div>
    </div>
  
        
    )
}

export default Trainings
