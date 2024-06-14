import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import {styles} from "../style";

const Tech = () => {
  return (
		<>
			<motion.div variants={textVariant}>
				<p className={styles.sectionSubText}>What I have learnt so far</p>
				<h2 className={styles.sectionHeadText}>Technologies</h2>
			</motion.div>
			<div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
				{technologies.map((technology) => (
					<div className="w-28 h-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</>
	);
}

export default SectionWrapper(Tech, "tech");