import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../style/work.css"
function ReactTimeLine({ data }) {
  return (
    <div style={{ backgroundColor: '#D5DAD6', minHeight: '100vh' }}>
      <VerticalTimeline>
        {data.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#D5DAD6', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date={item['Date']}
            iconStyle={{ background: '#4D5D53', color: 'black' }}
          >
            <h3 className="vertical-timeline-element-title">{item['title']}</h3>
            <div style={{height: 'auto', textAlign: 'left' }} className= 'vertTime'>
              <p style={{ margin: '0', color: 'black', fontSize: '0.8rem' }}><strong>{item['institute']}</strong></p>
              <p style={{ margin: '0', fontSize: '0.8rem', color: 'black'  }}><strong>Course:</strong> {item['course']}</p>
              <p style={{ margin: '0', fontSize: '0.8rem'  }}><strong>Description:</strong> {item['description']}</p>
              <p style={{ margin: '0', fontSize: '0.8rem'  }}><strong>Functionality:</strong> {item['functionality']}</p>
              <p style={{ margin: '0', fontSize: '0.8rem'  }}><strong>Role:</strong> {item['role']}</p>
            </div>
            <p style={{ textAlign: 'left', margin: '0', fontSize: '0.8rem'   }}><strong style={{color: 'black'}}>Tech Stack:</strong> {item['techStack']}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ReactTimeLine;

// #5E8C6A