'use client'

import styles from './Projects.module.css'
import ProjectCard from './ProjectsCard'

const projectsData = [
  {
    number: "01",
    title: "Life-Style Recommendation API",
    description: "A machine learning model (RandomForest) to provide lifestyle recommendations, deployed as a Flask API for an Android mobile app.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Flask", "Jupyter"],
    link: "https://github.com/RaymussenArthur/Life-Style-Recommendation"
  },
  {
    number: "02",
    title: "Movie Recommendation System",
    description: "Content-based system using TF-IDF and Cosine Similarity. Fetches data from Firebase/OMDb and provides XAI explanations using LIME.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Firebase", "LIME", "thefuzz"],
    link: "https://github.com/rVerKotz/ML_Project"
  },
  {
    number: "03",
    title: "Brain Tumor MRI Classification",
    description: "A 2-model pipeline: an object detection model (Roboflow) finds the tumor, and a classification model (EfficientNet) classifies it.",
    techStack: ["Python", "Roboflow", "EfficientNet", "Kaggle", "Computer Vision"],
    link: "https://www.kaggle.com/code/raymussenarthur/tumor-mri-modeling"
  },
  {
    number: "04",
    title: "House Price Prediction (Kaggle)",
    description: "A complete regression project for the Kaggle House Prices competition. Uses a tuned LightGBM model and explains predictions with SHAP.",
    techStack: ["Python", "LightGBM", "XGBoost", "Scikit-learn", "SHAP", "Kaggle"],
    link: "https://github.com/RaymussenArthur/House-Price"
  },
  {
    number: "05",
    title: "Mobile Phone Price Prediction",
    description: "A regression project to predict smartphone prices based on specs. A tuned XGBoost model achieved the best performance (R² 0.73).",
    techStack: ["Python", "XGBoost", "Scikit-learn", "Gradient Boosting", "EDA"],
    link: "https://github.com/RaymussenArthur/Phone-Prediction"
  },
  {
    number: "06",
    title: "Personality Prediction (Kaggle)",
    description: "Solution for Kaggle S5E7. Builds four independent XGBoost models to predict the 16-type personality (e.g., INTJ) from survey answers.",
    techStack: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Kaggle"],
    link: "https://github.com/RaymussenArthur/Personality-Prediction"
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