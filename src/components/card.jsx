import "../style/work.css";
import "../style/datascience2.css";
import React, { useState } from 'react';

function Card({ data }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div style={{borderRadius: '20px'}} className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className='card-front'>
                <h3 style={{ fontSize: '1.5rem', color: 'black', marginBottom: 0 , marginLeft: 10, marginTop: 10}}> {data['title']} </h3>
                <p style={{ margin: 0 , marginLeft: 10, color: '#4D5D53', fontWeight: 'boler'}}> {data['course']}</p>
                <p style={{ margin: 0, marginLeft: 10 }}> {data['institute']}</p>
                <br/>
                <div className='card-image' style={{ backgroundImage: `url(${data['image']})`, height: '200px' }}></div>
                <div style={{display: 'flex', justifyContent: 'start'}}> 
                    <button className='button' style={{marginTop: '200px', width: '120px', height: '50px'}}>
                        {isFlipped ? 'Hide info' : 'Read more..'}
                    </button>
                </div>
            </div>
            <div className='card-back'>
            <div className='card-info'>
                <p style={{ marginBottom: '5px' }}> <strong> Application: </strong> {data["application"]} </p>
                <p style={{ marginBottom: '5px' }}> <strong> Task: </strong> {data['task']}</p>
                <p style={{ marginBottom: '5px' }}> <strong> Data Set: </strong> {data['dataset']}</p>
                {data['model'] && <p style={{ marginBottom: '5px' }}> <strong> Model: </strong> {data['model']}</p>}
                {data['result'] && <p style={{ marginBottom: '5px' }}> <strong> Result: </strong> {data['result']}</p>}
                <p style={{ marginBottom: '5px' }}> <strong> Tech Stack: </strong> {data['techStack']}</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>
                    {data['link'] && <a href={data['link']} target="_blank" rel="noopener noreferrer"><button>Github</button></a>}
                </div>
                <div style={{textAlign: 'center', marginTop: 50}}>
                    <h3 style={{ fontSize: '1.5rem', color: 'black', marginBottom: 0 , marginLeft: 10, marginTop: 10}}> {data['title']} </h3>
                    <p style={{ margin: 0 , marginLeft: 10}}> {data['course']}</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Card;