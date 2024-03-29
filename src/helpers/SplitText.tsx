import { motion } from "framer-motion";

export function SplitText({ children, ...rest }:any) {
  const words = children.split(" ");
  return words.map((word:string, i:number) => {
    return (
      <div
        key={children + i}
        style={{ display: "inline-block", overflow: "s" }}
      >
        <motion.div
          {...rest}
          style={{ display: "inline-block", willChange: "transform" }}
          custom={i}
        >
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </motion.div>
      </div>
    );
  });
}
