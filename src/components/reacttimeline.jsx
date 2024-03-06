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
            <h3 className="vertical-timeline-element-title" style={{fontSize: '1.2rem'}}>{item['title']}</h3>
            <div style={{height: 'auto', textAlign: 'left' }} className= 'vertTime'>
              <p style={{ margin: '0', color: 'white', fontSize: '1rem' }}><strong>{item['institute']}</strong></p>
              <p style={{ margin: '0', fontSize: '1rem', color: 'orange'  }}><strong >Course:</strong> {item['course']}</p>
              <p style={{ margin: '0', fontSize: '1rem'  }}><strong>Description:</strong> {item['description']}</p>
              <p style={{ margin: '0', fontSize: '1rem'  }}><strong>Functionality:</strong> {item['functionality']}</p>
              <p style={{ margin: '0', fontSize: '1rem'  }}><strong>Role:</strong> {item['role']}</p>
            </div>
            <p style={{ textAlign: 'left', margin: '0', fontSize: '1rem'   }}><strong style={{color: 'orange'}}>Tech Stack:</strong> {item['techStack']}</p>
            {item['website'] && <p style={{ margin: '0', fontSize: '1rem' }}> <strong>Website: </strong> <a href={item['website']} style={{color: 'white'}}> {item['website']}</a></p>}
            {item['github'] && <p style={{ margin: '0', fontSize: '1rem' }}> <a href={item['github']} style={{textDecoration: 'underline', color: 'white', fontWeight: 'bold'}}> Github </a></p>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ReactTimeLine;

// #5E8C6A