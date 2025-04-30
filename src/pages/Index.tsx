
import { useNavigate } from "react-router-dom";
import { NavBarItemsObj } from "@/constants/navConstants";
import { Rocket } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-dark relative overflow-hidden space-stars">
      <div className="text-center p-8">
        <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 space-gradient-text">
          探索星空的奇迹
        </h1>
        <p className="text-xl text-space-light/80 mb-8 max-w-2xl mx-auto">
          欢迎来到我们的太空探索平台，在这里你可以了解我们的太空任务、研究团队和前沿技术。
        </p>
        <button 
          onClick={() => navigate(NavBarItemsObj.home.path)}
          className="space-button text-lg"
        >
          开始探索 <Rocket className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Index;
