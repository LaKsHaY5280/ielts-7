"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Award,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white pointer-events-none"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* CTA Card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Orange accent for top border */}
            <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500 w-full"></div>

            <div className="bg-white shadow-xl rounded-b-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
                {/* Left side with text content */}
                <div className="p-8 md:p-12 lg:pr-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-orange-100 text-orange-700 text-sm font-medium"
                  >
                    <Award className="w-4 h-4" />
                    <span>Join Thousands of Successful Students</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                  >
                    Achieve Your Target{" "}
                    <span className="text-orange-600">IELTS Score</span> with
                    Expert-Led Practice
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-600 mb-8"
                  >
                    Our comprehensive preparation materials and proven
                    strategies have helped thousands of students reach band 7
                    and above. Start practicing today and join our community of
                    successful test-takers.
                  </motion.p>

                  {/* Benefits list */}
                  <motion.div
                    className="space-y-3 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {[
                      "Authentic practice tests from Cambridge IELTS",
                      "Detailed performance analysis and feedback",
                      "Structured preparation for all four test sections",
                      "Learn from high-scoring students' strategies",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="mr-3 mt-1">
                          <CheckCircle className="h-5 w-5 text-orange-500" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <motion.a
                      href="#practice-tests"
                      className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-lg inline-flex items-center justify-center shadow-md group relative overflow-hidden"
                      whileHover={{
                        scale: 1.03,
                        boxShadow:
                          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.preventDefault();
                        const practiceTestsSection =
                          document.getElementById("practice-tests");
                        if (practiceTestsSection) {
                          practiceTestsSection.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      <span>Start Practicing Now</span>
                      <motion.div
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>

                      {/* Animated hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 -z-10"
                        initial={{ x: "-100%", opacity: 0 }}
                        whileHover={{ x: "100%", opacity: 0.4 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.a>

                    <motion.a
                      href="/about"
                      className="px-8 py-3.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-lg inline-flex items-center justify-center"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.a>
                  </motion.div>
                </div>

                {/* Right side with image and overlapped elements */}
                <div className="relative h-full min-h-[300px] lg:min-h-[500px] overflow-hidden rounded-bl-2xl">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600">
                    <div className="absolute inset-0 opacity-20 bg-[url('/pattern.svg')] bg-repeat bg-[length:20px_20px]"></div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-10 right-10 bg-white/10 w-32 h-32 rounded-full blur-xl"></div>
                  <div className="absolute bottom-10 left-10 bg-white/10 w-40 h-40 rounded-full blur-xl"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    {/* Main stat */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.4 }}
                      className="bg-white/15 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 shadow-xl"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="w-8 h-8 text-white mr-3" />
                        <h3 className="text-2xl font-bold text-white">
                          95% Success Rate
                        </h3>
                      </div>
                      <p className="text-white text-opacity-90">
                        Students achieving their target band score
                      </p>
                    </motion.div>

                    {/* Floating stats */}
                    <div className="flex flex-wrap justify-center gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      >
                        <div className="flex items-center">
                          <BookOpen className="w-5 h-5 text-white mr-3" />
                          <div>
                            <div className="text-xl font-bold text-white">
                              150,000+
                            </div>
                            <div className="text-white/75 text-sm">
                              Practice tests taken
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      >
                        <div className="flex items-center">
                          <Award className="w-5 h-5 text-white mr-3" />
                          <div>
                            <div className="text-xl font-bold text-white">
                              +1.5
                            </div>
                            <div className="text-white/75 text-sm">
                              Average band improvement
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
