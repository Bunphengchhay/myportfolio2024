import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function AnimatedSkillCard({ item, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 40%", "end 20%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [-100, 0] : [100, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, backgroundColor: '#f9f9f7'}}
      className=" p-6 rounded-xl shadow-md "
    >
      <div className="flex justify-between items-center " >
        <h1 className="text-gray-900 text-md md:text-2xl font-bold mb-2">
          {item.category}
        </h1>
        <div>
            {item.icon && <img src={item.icon} width="30" height="30" alt={item.altIcon}
              className='hover:cursor-pointer hover:scale-110 transition-transform duration-200'
            />}
        </div>
      </div>
      <p className="text-gray-800 text-xs md:text-sm ">{item.skills.join(", ")}</p>
    </motion.div>
  );
}

export default AnimatedSkillCard;
