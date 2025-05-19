import { Parallax } from 'react-parallax';
import meandeleven from '../artifact/meandeleven.JPG';

function Ending({ isDarkMode, mainStyle }) {
  return (
    <div className="w-full">
      <Parallax
        bgImage={meandeleven}
        strength={700} // try 100–500 for more/less depth
        bgImageStyle={{ objectFit: 'cover' }}
      >
        <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] rounded-b-[30px]" />
      </Parallax>
      <p className='text-red-100'> Thanks for reading about me!</p>
    </div>
  );
}

export default Ending;


// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import meandeleven from "../artifact/meandeleven.JPG";

// function Ending({ isDarkMode, mainStyle }) {

//   return (
//     <div className="w-full flex flex-col items-center justify-center overflow-hidden relative">
//       <div
//         className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]"
//       >
//         <img
//           src={meandeleven}
//           alt="Pence Chhay"
//           className="w-full h-full object-cover rounded-b-[30px]"
//         />
//       </div>
//     </div>
//   );
// }

// export default Ending;


// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import meandeleven from "../artifact/meandeleven.JPG";

// function Ending({isDarkMode, mainStyle}) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"], // adjust for timing
//   });

//   // Parallax effect: image moves slower than scroll
//   const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

//   return (
//     <div className="w-full flex flex-col items-center justify-center overflow-hidden relative">
//       {/* <h1 className="mt-10 mb-5 text-xl font-bold">Thanks for reading about me</h1> */}
      
//       <motion.div
//         ref={ref}
//         style={{ y }}
//         className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]"
//       >
//         <img
//           src={meandeleven}
//           alt="Pence Chhay"
//           className="w-full h-full object-cover rounded-b-[30px]"
//         />
//       </motion.div>
//     </div>
//   );
// }

// export default Ending;
