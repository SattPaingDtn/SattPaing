import Spline from "@splinetool/react-spline";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-tertiary">
      <div
        className={`${styles.paddingX} absolute inset-0 h-80 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-b from-primary to-secondary"></div>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-primary to-secondary"></div>
        </div>
        <div>
          <div className={`${styles.heroHeadText}`}>
            Hello , I'm <span className="text-custom-white">Satt Paing</span>
          </div>
          <div className={`${styles.heroSubText} mt-2`}>
            I develop 3D animation , user{" "}
            <span className="sm:block hidden"></span>interfaces and web
            applications
          </div>
        </div>
      </div>
      <Spline scene="https://prod.spline.design/afx2U432kZduBQJu/scene.splinecode" />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gradient-to-b from-primary to-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
