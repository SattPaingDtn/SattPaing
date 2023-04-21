import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Spline from "@splinetool/react-spline";
import { Tilt } from "react-tilt";

const About = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-1 mx-4 ">
          <div className="h-[500px]">
            <Spline scene="https://prod.spline.design/XYgkfz9KgI2PIfKx/scene.splinecode" />
          </div>
        </div>
        <div className="flex-2">
          <motion.div variants={textVariant()}>
            <div className={styles.sectionSubText}>About</div>
            <div className={styles.sectionHeadText}>Me?</div>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
          >
            Hi there! My name is Satt Paing and I'm a full-stack developer with
            a focus on React and Vue. I'm passionate about creating clean,
            efficient, and scalable code, and I love working on projects that
            make a positive impact on people's lives.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
          >
            I discovered my passion for programming during my freshman year of
            college, when I took my first programming class. From that point on,
            I was hooked. I spent countless hours learning new programming
            languages and frameworks, and I even started contributing to
            open-source projects.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
          >
            After college, I worked at a startup as a front-end developer, where
            I gained valuable experience building responsive and dynamic user
            interfaces using Vue. I worked on a variety of projects using Vue,
            Java , and MySQL.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
          >
            As a developer, I believe in constantly learning and growing. I keep
            up-to-date with the latest technologies and attend conferences and
            workshops whenever I can. My approach to work is collaborative and
            solution-focused, and I enjoy working with others to find creative
            solutions to complex problems.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
          >
            When I'm not coding, you can find me 3D animation, practicing yoga,
            or reading novels. Thanks for taking the time to read my about me
            section, and I look forward to hearing from you!
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
