import sacstatelogo from '../artifact/sacstatelogo.png'
import acclogo from '../artifact/acclogo.png';
import awslogo from '../artifact/aws.png';
import { Parallax } from "react-parallax";
import { useState } from 'react';
import _ from 'lodash';
const image3 = "https://buvcg.org/wp-content/uploads/2024/03/bu-campus-river.jpeg";
const image4 = "https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/f217e17/2147483647/strip/true/crop/2688x1512+0+0/resize/1738x978!/brightness/8x9/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fb6%2F20%2Fa4f588ed44888c66806860482739%2Fpxl-20220627-130916290.MP.jpg"
const transitionDuration = 1000;

function Education() {


    return ( 
        <div className="w-full h-auto mb-10 h-auto">
            <div className=' p-4'>
                <h1 className="text-4xl font-bold">Educations</h1>
                <p className='text-sm'>
                    Academic background that laid the foundation for my career in tech
                </p>
            </div>
            <div >
                <Parallax
                    strength={400}
                    bgImage={image3}
                    className="w-full h-[700px] z-50 rounded-t-3xl"
                    bgImageStyle={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transform: 'scale(1)'
                        }}
                    >
                    <div className='w-full flex justify-center items-center h-[600px]'>
                    
                    </div>
                </Parallax>
                <div className='w-full h-auto py-5 bg-stone-800 flex flex-col items-center gap-16 rounded-b-3xl text-gray-900'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-2'>
                    {
                    education.map((item, index) => (
                        <div key={index} className='w-[85vw] md:w-[400px] h-[110px] flex justify-center items-center rounded-xl hover:scale-105 preserve-3d transition-transform duration-300' style={{backgroundColor:'#f9f9f7'}}>
                        <div className='w-full h-full flex items-center px-2 gap-2'>
                            <div className='w-[100px]'>
                            <img
                                src={item.logo}
                                width={100}
                                height={100}
                                alt={item.logoAlt}
                                className='object-contain'
                            />
                            </div>
                            <div className='flex flex-col text-left items-start'>
                            <p className='text-md font-bold'>{item.entity}</p>
                            <p className='text-sm'> {item.level}{item.major ? `, ${item.major}` : ''} </p>
                            {item.graduation && <p className='text-sm'>Graduate: {item.graduation}</p>}
                            <p className='text-sm'>{item.location}</p>
                            {item.validation && <p className='text-sm'> {item.validation}</p>}
                            </div>
                        </div>
                        </div>
                    ))
                    }
                </div>
                </div>

            </div>
        </div>
    );
}

export default Education;


const education = [
    {
        entity: 'Boston University',
        level: 'Master of Science',
        major: 'Data Science',
        location: 'Boston, MA',
        graduation: '2026',
        logo: 'https://logos-world.net/wp-content/uploads/2022/01/Boston-University-Emblem.png',
        logoAlt: 'Boston University Logo',
        backgroundImage: "https://buvcg.org/wp-content/uploads/2024/03/bu-campus-river.jpeg"
    },
    {
        entity: 'Sacramento State University',
        level: 'Bachelor of Science',
        major: 'Computer Science',
        location: 'Sacramento, CA',
        graduation: '2023',
        logo: sacstatelogo,
        logoAlt: 'California State University Logo',
        backgroundImage: 'http://www.csus.edu/news/files/Campus_Fall_Students_20151123_0430_v2.jpg'
    },
    {
        entity: 'Atlantic Cape Community College',
        level: 'Associate of Science',
        major: 'Business Admin',
        location: 'Atlantic City, NJ',
        graduation: '2019',
        logo: acclogo,
        logoAlt: 'Atlantic Cape Community College Logo',
        backgroundImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/50/3d/4c/atlantic-city-boardwalk.jpg?w=700&h=400&s=1'
    },
    {
        entity: 'Amazon Web Services',
        level: 'Certified Cloud Practitioner',
        validation: 'MEMWP59DP2V4Q4C8',
        logo: 'https://d1.awsstatic.com/certification/badges/AWS-Certified-Cloud-Practitioner_badge_150x150.17da917fbddc5383838d9f8209d2030c8d99f31e.png',
        logoAlt: 'Amazon Web Services Logo',
        backgroundImage: 'https://www.alconlighting.com/cdn-cgi/image/fit=contain,format=webp,quality=80,width=768/https://www.alconlighting.com/blog/wp-content/uploads/2018/03/amazonseattlegreenoverhead.jpg'
    }

]

const awsCloudPractioner = [
    {
        entity: 'Amazon Web Services',
        level: 'Certified Cloud Practitioner',
        validation: 'MEMWP59DP2V4Q4C8',
        logo: 'https://d1.awsstatic.com/certification/badges/AWS-Certified-Cloud-Practitioner_badge_150x150.17da917fbddc5383838d9f8209d2030c8d99f31e.png',
        logoAlt: 'Amazon Web Services Logo',
        backgroundImage: 'https://www.alconlighting.com/cdn-cgi/image/fit=contain,format=webp,quality=80,width=768/https://www.alconlighting.com/blog/wp-content/uploads/2018/03/amazonseattlegreenoverhead.jpg'
    }
]