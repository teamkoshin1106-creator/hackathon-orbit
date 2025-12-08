import Navbar from "@/components/Navbar";
import ProblemStatementsSection from "@/components/ProblemStatementsSection";

const ProblemStatements = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ProblemStatementsSection />
      </div>
    </div>
  );
};

export default ProblemStatements;
