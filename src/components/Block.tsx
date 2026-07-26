import { motion, type MotionProps } from 'motion/react';

// On hérite de toutes les props standards d'une balise <section> HTML
interface BlockProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
  id?:string;
}

export default function Block({ className = '', children,id='', ...rest }: BlockProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`mb:my-50 my-10 scroll-mt-24 ${className}`}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
