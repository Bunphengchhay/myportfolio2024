import "../style/work.css";
import "../style/datascience2.css";
import React, { useState } from 'react';

function Card({ data }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className='card-front'>
                <h3 style={{ fontSize: '1.5rem', color: 'black', marginBottom: 0 , marginLeft: 10, marginTop: 10}}> {data['title']} </h3>
                <p style={{ margin: 0 , marginLeft: 10}}> {data['course']}</p>
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




// function Card({ data }) {
//   const cardImageStyle = {
//     width: 'min(90vw, 1500px)',
//     height: '40%',
//     backgroundColor: '',  // Default background color, you can modify or remove this
//     backgroundImage: `url(${data['image']})`,  // Set the background image
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     display: 'flex',
//     justifyContent: 'center',
//     objectFit: 'contain'
//     // borderRadius: '30px'
//   };
//   return (
//     <div
//       className='cards'
//     >
//         <div>
//       <h1 style={{fontSize: '2rem'}}> {data['title']}</h1>
//       <p style={{margin: 0}}>  {data['course']} </p>
//       <p style={{margin: 0, marginBottom: 10}}> {data['institute']}</p>
//       <div className='card-image' style={cardImageStyle}>
//       </div>
//       <h5 style={{marginTop: '10px', marginBottom: 0}}> Project Information </h5>
//       <div style={{width: 'min(90vw, 1500px)', height: '1px', backgroundColor: 'grey', marginBottom: '10px'}}> </div>
//       <div className='card-info' style={{ whiteSpace: 'pre-line' }}>
//         <p> <strong> Application: </strong> {data['application']}</p>
//         <p> <strong> Task: </strong> {data['task']}</p>
//         <p> <strong> Data Set: </strong> {data['dataset']}</p>
//         {data['model'] && <p> <strong> Model: </strong> {data['model']}</p>}
//         {data['result'] && <p> <strong> Result: </strong> {data['result']}</p>}
//         <p> <strong> Tech Stack: </strong> {data['techStack']}</p>
//         {data['link'] && <a href={data['link']} target="_blank" rel="noopener noreferrer"><button>Github</button></a>}
//     </div>
//     </div>


//     </div>
//   );
// }

// export default Card;

