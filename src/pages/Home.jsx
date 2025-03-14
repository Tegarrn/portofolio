import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center text-center">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold">
        PORTOFOLIO
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-lg">
        Web Developer & Cyber Security Enthusiast
      </motion.p>
    </section>
  );
}
