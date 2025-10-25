/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Technology stack icon component with dynamic rendering from technology names
 */

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiOpenai,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiFastapi,
  SiFramer,
  SiD3Dotjs,
  SiGraphql,
  SiMongodb
} from "react-icons/si";
import { 
  FaGitAlt, 
  FaAws, 
  FaMicrosoft,
  FaCode,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaChartLine,
  FaLink
} from "react-icons/fa";
import { 
  TbApi,
  TbMath,
  TbBulb
} from "react-icons/tb";
import { ComponentProps } from "react";

interface TechStackIconProps {
  tech: string;
  size?: number;
  className?: string;
  showTooltip?: boolean;
}

const techIconMap: Record<string, { icon: React.ComponentType<ComponentProps<'svg'>>, color: string, label: string }> = {
  // Frontend
  "React": { icon: SiReact, color: "text-blue-400", label: "React" },
  "Next.js": { icon: SiNextdotjs, color: "text-white", label: "Next.js" },
  "Next.js 15": { icon: SiNextdotjs, color: "text-white", label: "Next.js 15" },
  "TypeScript": { icon: SiTypescript, color: "text-blue-500", label: "TypeScript" },
  "JavaScript": { icon: SiJavascript, color: "text-yellow-400", label: "JavaScript" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-400", label: "Tailwind CSS" },
  "Framer Motion": { icon: SiFramer, color: "text-purple-400", label: "Framer Motion" },
  "Anime.js": { icon: FaCode, color: "text-green-400", label: "Anime.js" },
  "D3.js": { icon: SiD3Dotjs, color: "text-orange-400", label: "D3.js" },

  // Backend & APIs
  "Python": { icon: SiPython, color: "text-yellow-400", label: "Python" },
  "Node.js": { icon: SiNodedotjs, color: "text-green-500", label: "Node.js" },
  "FastAPI": { icon: SiFastapi, color: "text-teal-400", label: "FastAPI" },
  "APIs": { icon: TbApi, color: "text-blue-400", label: "APIs" },
  "WebSocket": { icon: FaLink, color: "text-yellow-500", label: "WebSocket" },
  "GraphQL": { icon: SiGraphql, color: "text-pink-400", label: "GraphQL" },

  // Databases
  "PostgreSQL": { icon: SiPostgresql, color: "text-blue-600", label: "PostgreSQL" },
  "MySQL": { icon: SiMysql, color: "text-blue-500", label: "MySQL" },
  "SQLite": { icon: SiSqlite, color: "text-blue-400", label: "SQLite" },
  "MongoDB": { icon: SiMongodb, color: "text-green-500", label: "MongoDB" },
  "Redis": { icon: SiRedis, color: "text-red-500", label: "Redis" },
  "ChromaDB": { icon: FaDatabase, color: "text-purple-400", label: "ChromaDB" },
  "Pinecone": { icon: FaDatabase, color: "text-green-400", label: "Pinecone" },

  // AI & ML
  "OpenAI": { icon: SiOpenai, color: "text-green-400", label: "OpenAI" },
  "GPT-4o": { icon: FaBrain, color: "text-green-400", label: "GPT-4o" },
  "LangChain": { icon: FaLink, color: "text-yellow-500", label: "LangChain" },
  "LangGraph": { icon: FaChartLine, color: "text-orange-500", label: "LangGraph" },
  "Multiple LLMs": { icon: FaBrain, color: "text-purple-400", label: "Multiple LLMs" },
  "Tree-sitter": { icon: FaCode, color: "text-red-400", label: "Tree-sitter" },
  "Gen AI": { icon: FaRobot, color: "text-cyan-400", label: "Generative AI" },
  "Machine Learning": { icon: TbMath, color: "text-orange-400", label: "Machine Learning" },
  "LLMs": { icon: FaBrain, color: "text-purple-500", label: "Large Language Models" },
  "RAG pipelines": { icon: TbBulb, color: "text-yellow-400", label: "RAG Pipelines" },

  // DevOps & Tools
  "Docker": { icon: SiDocker, color: "text-blue-400", label: "Docker" },
  "GitHub Actions": { icon: SiGithubactions, color: "text-gray-400", label: "GitHub Actions" },
  "Git": { icon: FaGitAlt, color: "text-orange-500", label: "Git" },
  "AWS": { icon: FaAws, color: "text-orange-400", label: "AWS" },
  "Azure AI Foundry": { icon: FaMicrosoft, color: "text-blue-500", label: "Azure AI Foundry" },
  "MCP": { icon: FaCloud, color: "text-gray-400", label: "Model Context Protocol" },

  // Languages
  "C#": { icon: FaCode, color: "text-purple-500", label: "C#" },
};

export default function TechStackIcon({ tech, size = 20, className = "", showTooltip = true }: TechStackIconProps) {
  const techInfo = techIconMap[tech];
  
  if (!techInfo) {
    // Fallback for unknown technologies
    return (
      <div className={`inline-flex items-center gap-1 ${className}`} title={showTooltip ? tech : undefined}>
        <FaCode size={size} className="text-gray-400" />
        <span className="text-sm text-gray-400">{tech}</span>
      </div>
    );
  }

  const { icon: Icon, color, label } = techInfo;

  return (
    <div 
      className={`inline-flex items-center gap-2 transition-all duration-200 hover:scale-110 ${className}`}
      title={showTooltip ? label : undefined}
    >
      <Icon width={size} height={size} className={`${color} drop-shadow-sm flex-shrink-0`} />
      <span className="text-sm text-gray-300 font-medium">{tech}</span>
    </div>
  );
}

// Export the tech icon map for use in other components
export { techIconMap };