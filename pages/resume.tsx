import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";
import Bar from "../Components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Education and skills  */}

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold ">Education</h5>
          <div>
            <h5 className="my-2 text-2xl foln-bold">
              Compurter Science and Engineering
            </h5>
            <p className="font-semibold">Academy of Technology</p>
            <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold ">Experience</h5>
          <div>
            <h5 className="my-2 text-2xl foln-bold">
              Web Application Developer Sr.
            </h5>
            <p className="font-semibold">Moonju Tech (2021 - on )</p>
            <p className="my-3">I know why i&apos;m doing this job </p>
          </div>
        </motion.div>
      </div>

      {/* Language and tools  */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Frameworks</h5>
          <div className="my-2">
            {languages.map((languages) => (
              <Bar data={languages} key={languages.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
