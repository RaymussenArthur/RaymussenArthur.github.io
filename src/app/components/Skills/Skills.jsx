"use client";
import { useState } from 'react';
import { 
  FaPython,
  FaRProject,
  FaGitAlt,
  FaDocker
} from 'react-icons/fa';
import { 
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiJupyter,
  SiApacheairflow,
  SiGnubash,
  SiTableau,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiFlask,
  SiLangchain,
  SiHuggingface,
  SiHuawei,
  SiOracle,
  SiN8N,
  SiSap,
  SiKubernetes,
  SiRoboflow
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { DiDatabase } from "react-icons/di";
import { BsGraphUp } from "react-icons/bs";
import styles from './Skills.module.css';

const skillsData = {
  languages: [
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "R", icon: <FaRProject />, color: "#276DC3" },
    { name: "SQL", icon: <DiDatabase />, color: "#4479A1" },
    { name: "Bash", icon: <SiGnubash />, color: "#4EAA25" },
  ],
  libraries: [
    { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
    { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
    { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
    { name: "Keras", icon: <SiKeras />, color: "#D00000" },
  ],
  databases: [
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
  ],
  biAnalytics: [
    { name: "Tableau", icon: <SiTableau />, color: "#E97627" },
    { name: "SAP Analytics Cloud", icon: <SiSap />, color: "#0055D4" },
    { name: "SPSS", icon: <BsGraphUp />, color: "#CC0000" },
  ],
  frameworks: [
    { name: "Flask", icon: <SiFlask />, color: "#333333" },
    { name: "LangChain", icon: <SiLangchain />, color: "#3EAF7C" },
  ],
  cloudDeployment: [
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
    { name: "Roboflow", icon: <SiRoboflow />, color: "#000000" },
    { name: "Hugging Face", icon: <SiHuggingface />, color: "#FFD000" },
    { name: "Huawei Cloud", icon: <SiHuawei />, color: "#E31919" },
    { name: "OCI", icon: <SiOracle />, color: "#F80000" },
  ],
  toolsAutomation: [
    { name: "Jupyter", icon: <SiJupyter />, color: "#F37626" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Airflow", icon: <SiApacheairflow />, color: "#017CEE" },
    { name: "VS Code", icon: <VscCode />, color: "#007ACC" },
    { name: "n8n", icon: <SiN8N />, color: "#FF4242" },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  return (
    <section className={styles.skillsSection} id="skills">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="gradient-text">Skills & Expertise</h2>
          <p>Technologies and tools I work with</p>
        </div>
        
        <div className={styles.tabButtons}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'languages' ? styles.active : ''}`}
            onClick={() => setActiveTab('languages')}
          >
            Languages
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'libraries' ? styles.active : ''}`}
            onClick={() => setActiveTab('libraries')}
          >
            Libraries
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'databases' ? styles.active : ''}`}
            onClick={() => setActiveTab('databases')}
          >
            Databases
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'biAnalytics' ? styles.active : ''}`}
            onClick={() => setActiveTab('biAnalytics')}
          >
            BI & Analytics
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'frameworks' ? styles.active : ''}`}
            onClick={() => setActiveTab('frameworks')}
          >
            Frameworks
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'cloudDeployment' ? styles.active : ''}`}
            onClick={() => setActiveTab('cloudDeployment')}
          >
            Cloud & Deployment
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'toolsAutomation' ? styles.active : ''}`}
            onClick={() => setActiveTab('toolsAutomation')}
          >
            Tools & Automation
          </button>
        </div>

        
        <div className={styles.skillsGrid}>
          {skillsData[activeTab] && skillsData[activeTab].map((skill, index) => (
            <div 
              key={index} 
              className={styles.skillCard}
              style={{ '--skill-color': skill.color }}
            >
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h3 className={styles.skillName}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}