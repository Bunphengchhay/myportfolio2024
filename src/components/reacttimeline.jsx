import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../style/work.css"
function ReactTimeLine({ data }) {
  return (
    <div style={{ backgroundColor: '', minHeight: '100vh' }}>
      <VerticalTimeline>
        {data.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'darkslategray', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date={item['date']}
            iconStyle={{ background: 'white', color: 'white' }}
          >
            <h3 className="vertical-timeline-element-title" style={{fontSize: '1rem'}}>{item['title']}</h3>
            <div style={{height: 'auto', textAlign: 'left' }} className= 'vertTime'>
              <p style={{ margin: '0', color: 'orange', fontSize: '0.7rem' }}><strong>{item['institute']}</strong></p>
              <p style={{ margin: '0', fontSize: '0.7rem', color: 'white'  }}><strong>Course:</strong> {item['course']}</p>
              <p style={{ margin: '0', fontSize: '0.7rem'  }}><strong>Description:</strong> {item['description']}</p>
              <p style={{ margin: '0', fontSize: '0.7rem'  }}><strong>Functionality:</strong> {item['functionality']}</p>
              <p style={{ margin: '0', fontSize: '0.7rem'  }}><strong>Role:</strong> {item['role']}</p>
            </div>
            <p style={{ textAlign: 'left', margin: '0', fontSize: '0.7rem'   }}><strong style={{color: 'orange'}}>Tech Stack:</strong> {item['techStack']}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ReactTimeLine;

// #5E8C6A