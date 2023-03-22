import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeOnScroll = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default FadeOnScroll;
