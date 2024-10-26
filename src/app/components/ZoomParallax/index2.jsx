"use client";
import styles from '../ZoomParallax/styles2.module.scss';
import Picture1 from '../../../../public/images/1.png';
import Picture2 from '../../../../public/images/upper1.png';
import Picture3 from '../../../../public/images/left.jpg';
import Picture4 from '../../../../public/images/right.jpg';
import Picture5 from '../../../../public/images/bottom.jpg';
import Picture6 from '../../../../public/images/bottomleft.png';
import Picture7 from '../../../../public/images/bottomright.jpg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { FloatingNav } from "../Ui/FloatingNav";

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const squareScale = useTransform(scrollYProgress, [0, 1], [1, 2]);
    const textOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.5, 1], [50, -200]);
    const circleOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

    // Move circles to the left after 0.9 scroll progress
    const circle1Left = useTransform(scrollYProgress, [0.9, 1], ['5%', '15%']);
    const circle2Left = useTransform(scrollYProgress, [0.9, 1], ['80%', '70%']);
    const circle3Left = useTransform(scrollYProgress, [0.9, 1], ['20%', '5%']);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale8
        },
        {
            src: Picture7,
            scale: scale9
        }
    ];

    return (
        <div ref={container} className={styles.container}>
            {/*Square*/}
            <motion.div
                className="fixed lg:w-[1100px] lg:h-[1100px] md:w-[0px] md:[100px]"
                style={{
                    top: "-43%",
                    left: "5.5%",
                    backgroundColor: "#000319",
                    scale: squareScale,
                    rotate: 45
                }}
            />
            <div id="home" className={styles.sticky}>
                {
                    pictures.map(({ src, scale }, index) => {
                        return (
                            <motion.div key={index} style={{ scale }} className={styles.el}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={src}
                                        fill
                                        alt="image"
                                        placeholder='blur'
                                    />
                                </div>
                            </motion.div>
                        );
                    })
                }

            <motion.div
                style={{
                    opacity: textOpacity,
                    y: textY,
                    zIndex: 2,
                    position: 'fixed',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center'                  
                }}
                className={`${styles.textContainer} 
                            top-[50vh] sm:top-[35vh] md:top-[40vh] lg:top-[50vh] 
                            left-[1%] sm:left-[14%] md:left-[20%] lg:left-[30%]`}
            >
                <div className='text-[16px] sm:text-[20px] md:text-[30px] lg:text-[20px] text-purple-700 lg:-ml-[30%]'>My Portfolio</div>
                <div className='text-white font-bold text-[29px] sm:text-[28px] md:text-[36px] lg:text-[55px] lg:-ml-[30%]'>
                    Transforming Ideas into <br />
                    Seamless <span className='text-purple-500'>User Experience</span>
                </div>
            </motion.div>



                <FloatingNav/>
                
                {/* Cricle 1 */}
                <motion.div
                    style={{
                        backgroundColor: '#976AB1',
                        opacity: circleOpacity,
                        width: '250px',
                        height: '250px',
                        borderRadius: '50%',
                        position: 'fixed',
                        top: '55%',
                        left: circle1Left,  
                        zIndex: 1,
                    }}
                />

                {/* Cricle 2 */}
                <motion.div
                    style={{
                        backgroundColor: '#732CB7',
                        opacity: circleOpacity,
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        position: 'fixed',
                        top: '30%',
                        left: circle2Left,  // Use dynamic left based on scroll progress
                        zIndex: 1,
                    }}
                />

                {/* Cricle 3 */}
                <motion.div
                    style={{
                        backgroundColor: '#473567',
                        opacity: circleOpacity,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'fixed',
                        top: '10%',
                        left: circle3Left,  // Use dynamic left based on scroll progress
                        zIndex: 1,
                    }}
                />

                {/* Cricle 4 */}
                <motion.div
                    style={{
                        backgroundColor: '#000319',
                        opacity: circleOpacity,
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        position: 'fixed',
                        top: '0%',
                        left: '26%',
                        zIndex: 1,
                    }}
                />
            </div>
        </div>
    );
}