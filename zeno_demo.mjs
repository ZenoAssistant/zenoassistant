import ZenoAI from "./zeno_ai_core.mjs";
import ora from "ora"; // For spinner animations

function demo() {
  const zeno = new ZenoAI();
  console.log("🔥 Welcome to Zeno AI Demo!");

  const spinner = ora("🚀 Running Zeno AI Optimization...").start();
  setTimeout(() => {
    spinner.succeed("✔ Optimization Complete!");
    zeno.optimizeBlockchain();
  }, 3000);
}

demo();
