'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Projects.module.css'
import ProjectCard from './ProjectsCard'

const projectsData = [
  {
    number: "01",
    title: "Customer Churn Prediction",
    description: "Developed a machine learning model to predict customer churn for a telecommunications company, resulting in a 15% reduction in customer attrition.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"]
  },
  {
    number: "02",
    title: "Sales Forecasting",
    description: "Built a time-series model to forecast sales for a retail client, improving inventory management and reducing stockouts by 20%.",
    techStack: ["Python", "TensorFlow", "Keras", "Seaborn"]
  },
  {
    number: "03",
    title: "Sentiment Analysis of Social Media Data",
    description: "Performed sentiment analysis on social media data to gauge public opinion about a new product launch, providing actionable insights to the marketing team.",
    techStack: ["Python", "NLTK", "TextBlob", "Plotly"]
  },
  {
    number: "04",
    title: "Image Classification for Medical Diagnosis",
    description: "Developed a deep learning model to classify medical images, assisting doctors in making more accurate diagnoses.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV"]
  },
  {
    number: "05",
    title: "Credit Card Fraud Detection",
    description: "Built a real-time fraud detection system for a financial services company, saving millions of dollars in fraudulent transactions.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Flask"]
  },
  {
    number: "06",
    title: "Natural Language Processing for Chatbots",
    description: "Developed a chatbot using natural language processing to answer customer queries, improving customer satisfaction by 25%.",
    techStack: ["Python", "NLTK", "spaCy", "Dialogflow"]
  }
]

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="gradient-text">Featured Projects</h2>
          <p>A collection of my most recent and notable projects</p>
        </div>
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}