import ZenoAI from "./zeno_ai_core.mjs";

function runBenchmarks() {
  const zeno = new ZenoAI();
  console.log("⚡ Initiating Zeno AI Benchmarks...\n");

  const fakeLogs = [
    "Analyzing blockchain data...",
    "Detecting anomalies...",
    "Optimizing gas fees...",
    "Evaluating smart contract performance...",
    "Finalizing results...",
  ];

  fakeLogs.forEach((log, index) => {
    setTimeout(() => {
      console.log(log);
      if (index === fakeLogs.length - 1) zeno.benchmark();
    }, index * 1000);
  });
}

runBenchmarks();
