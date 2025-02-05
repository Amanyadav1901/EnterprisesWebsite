import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-white p-10 rounded-3xl xs:w-[320px] w-full flex flex-row gap-4"
  >
    <img
      src={image}
      alt={`feedback-by-${name}`}
      className={`w-20 h-20 rounded-lg object-cover`}
    />

    <div className={`mt-7 flex justify-between items-center gap-1`}>
      <div className={`flex-1 flex flex-col`}>
        <p className="text-black font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={
          "sm:px-16 px-6 sm:py-16 py-10 bg-tertiary rounded-2xl min-h-[300px]"
        }
      >
        <motion.div variants={textVariant()}>
          <p className={`text-white`}>What Others say</p>
          <h2
            className={`text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]} text-white-100`}
          >
            Clientele.
          </h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 sm:px-16 px-6 flex lg:flex-row flex-wrap gap-5`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "clientle");
