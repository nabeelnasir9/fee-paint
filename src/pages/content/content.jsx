import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-6xl mx-auto bg-white"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center text-gray-800"
      >
        Who is Paint Genie For?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mb-10 text-lg text-gray-700 text-justify"
      >
        Our platform is for… EVERYONE interested in creating cool designs using
        AI and having a blast painting the images. 
        <br/>
        <br/>
        Whether you're an experienced
        painter looking for fresh inspiration or a newbie dipping your toes into
        the paint by numbers, our tool helps you whip up stunning images and
        paintings from simple text prompts. 
        <br/>
        <br/>
Our user-friendly platform ensures
        that everyone can produce high-quality visuals without breaking a sweat.
        It's perfect for anyone who:
      </motion.p>

      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col md:flex-row items-start"
        >
          <div className="text-7xl font-bold text-blue-600 mb-4 md:mb-0 md:mr-6">
            1
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Loves DIY and Crafts
            </h3>
            <p className="text-lg text-gray-700">
              If you're the type who loves DIY projects and craft activities,
              this tool will be your new best friend. Visualize home improvement
              ideas or create unique handmade gifts with ease.{" "}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col md:flex-row items-start"
        >
          <div className="text-7xl font-bold text-blue-600 mb-4 md:mb-0 md:mr-6">
            2
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Seeks Relaxation through Art
            </h3>
            <p className="text-lg text-gray-700">
              Find peace in coloring books for adults? You'll adore how our
              platform makes art creation easy, relaxing, and super fun.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col md:flex-row items-start"
        >
          <div className="text-7xl font-bold text-blue-600 mb-4 md:mb-0 md:mr-6">
            3
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Is Curious About AI and Innovation
            </h3>
            <p className="text-lg text-gray-700">
              For the tech enthusiasts out there, this is a fun way to explore
              the creative possibilities of AI and make something beautiful.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="flex flex-col md:flex-row items-start"
        >
          <div className="text-7xl font-bold text-blue-600 mb-4 md:mb-0 md:mr-6">
            4
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Enjoys Sharing Creative Moments with Family
            </h3>
            <p className="text-lg text-gray-700">
              Whether you're bonding over art projects with your kids or
              creating cherished memories with your nieces and nephews, it turns
              family time into a creative fun time.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
          className="flex flex-col md:flex-row items-start"
        >
          <div className="text-7xl font-bold text-blue-600 mb-4 md:mb-0 md:mr-6">
            5
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Spends Time on Social Media
            </h3>
            <p className="text-lg text-gray-700">
              Love being inspired by content creators and sharing your own
              masterpieces online? This tool helps you create impressive visuals
              to dazzle your followers.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
        className="text-center mt-10"
      >
        <button className="bg-[#1A75D2] text-white py-2 px-4 rounded-sm shadow-lg hover:bg-blue-600 transition-colors duration-300">
          Start Creating Now!
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Content;
