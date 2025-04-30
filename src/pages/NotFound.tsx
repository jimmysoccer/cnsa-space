
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 错误: 用户尝试访问不存在的路由:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-dark relative overflow-hidden space-stars">
      <div className="absolute inset-0 bg-space-dark/30 backdrop-blur-sm"></div>
      <div className="text-center relative z-10 p-8">
        <h1 className="text-6xl font-orbitron font-bold mb-4 text-space-light">404</h1>
        <p className="text-xl text-space-light/80 mb-6">哎呀！页面未找到</p>
        <a href="/" className="space-button inline-flex">
          返回首页
        </a>
      </div>
    </div>
  );
};

export default NotFound;
