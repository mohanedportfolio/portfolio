"use client";

import { motion } from "framer-motion";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-col items-center w-full py-20 gap-8">
      {/* Title */}
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200"
        {...({} as any)}
      >
        AI{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"></span>{" "}
        Technologies
      </motion.div>

      {/* Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 mx-7 w-full max-w-4xl">
        <div className="rounded-2xl border border-gray-200 bg-transparent p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Flowise</h3>
          <p className="text-gray-400">
            I use Flowise to build RAG-powered applications and chatbots with
            advanced AI integration.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-transparent p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-green-600">n8n</h3>
          <p className="text-gray-400">
            I leverage n8n for workflow automations, connecting apps and APIs to
            streamline processes efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};
