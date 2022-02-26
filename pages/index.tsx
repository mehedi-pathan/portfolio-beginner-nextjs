// import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { services } from "../data";
import ServiceCard from "../Components/ServiceCard";
import { animate, motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import { GetServerSidePropsContext } from "next";

const About = ({ endpoint }) => {
  // console.log(services);
  console.log(endpoint);

  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h6 className="my-3 text-base font-medium">
        I am a professional web application developer and I&apos;m holding an
        engineering degree from the Bangladesh Institute of Information
        Technology. I have 3+ years of experience in web development and I&apos;m a
        senior developer in MOONJU Tech Solution Ltd.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-gray-700"
        style={{ marginRight: "-1.5rem", marginLeft: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wider">
          What I am doing
        </h6>
        <motion.div
          className="grid gap-6 my-3 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-gray-500"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();

  return { props: { endpoint: process.env.VERCEL_URL } };
};

// export const getStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
