import "../style/datascience2.css"
import RAFDB from '../artifact/RAFDB.png'
import FaceMask from '../artifact/dataset-cover.jpg'
import cocodataset from '../artifact/cocodataset.png'
import vit from '../artifact/vit.webp'
import textsentimental from '../artifact/textsentimental.png'
import decissiontree from '../artifact/decisiontree.png'
import linearRegression from '../artifact/linearRegression.png'
import sklearn from '../artifact/sklearn.jpeg'
import pca from '../artifact/pca.png'
import Card from "../components/card"
import React, { useState, useRef, useEffect } from 'react';

function Datascience2() {
  
    return(
        <div style={{ minHeight: '50svh', maxWidth: '1500px', display: 'flex', justifyContent: 'center', overflowX: 'scroll', marginTop: 50}}>
            <div style={{ width: '100%', height: '500px', display: 'flex', overflowY: 'hidden'}}>
             {data.map((item, index) => (
                        <Card
                            key={index}
                            data={item}
                        />
            ))}
            </div>
        </div>
    )
}

export default Datascience2;

const data = [
    {
        title: 'Facial Emotion Recognition',
        course: 'Deep Learning',
        institute: 'San Jose State University',
        date: 'Sept 2023 - Dec 2023',
        application: 'Developed an AI model for multi-facial expression detection through live video streaming.',
        task: 'Performed inference, fine-tuning, and transfer learning with deep learning models. Adjusted hyperparameters, applied data augmentation, and tracked training progress using loss and accuracy metrics.',
        model: 'Google ViT, CNN, VGG, RestNet',
        dataset: 'RAF-DB 30K',
        result: '86% Accuracy',
        techStack: 'Python, Pytorch, VS Code, Google Colab, Github, Classification Report, SJSU Internal HPC, GPU',
        link: 'https://github.com/Bunphengchhay/GViT21k',
        image: RAFDB,
    },
    {
        title: 'Face Mask Detection',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Sept 2023 - Dec 2023',
        application: 'Developed a model for detecting people wearing masks correctly, incorrectly, or without masks in pictures.',
        task: 'Performed classification and model training, data preprocessing, and created CNN models. Generated a classification report.',
        model: 'CNN, SVM, K-Mean, Random Forest',
        dataset: 'Face Mask Dataset from Kaggle',
        result: '92% Accuracy',
        techStack: 'Python, Tensorflow, VS Code, Google Colab, Github, Data Visualization, Matplotlib',
        link: 'https://github.com//sivask01/CMPE-255-01',
        image: FaceMask
    },
    {
        title: 'Object Detection',
        course: 'Deep Learning',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Trained a model to detect different objects.',
        task: 'Trained on YOLO model, calculated and generated Mean Average Precision (mAP) report, including Confusion Matrix, IoU, and Recall.',
        model: 'YOLO V8',
        dataset: 'Coco Dataset',
        result: '',
        techStack: 'Python, Pytorch, VS Code, SJSU Internal HPC, GPU',
        link: '',
        image: cocodataset
    },
    {
        title: 'Image Classification',
        course: 'Deep Learning',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Determined the type of images.',
        task: 'Split data into train, test, and eval sets, trained and tested models, and generated a classification report.',
        model: 'vit_b_32, restnetmodel1',
        dataset: 'Tiny Image 200',
        result: '62% Accuracy',
        techStack: 'Python, Pytorch, VS Code, SJSU Internal HPC, GPU',
        link: '',
        image: vit
    },
    {
        title: 'Text Sentimental Analysis',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Classified text data into 11 distinct categories.',
        task: 'Performed text cleaning, handled missing values, applied feature engineering, addressed class imbalance, and selected and evaluated models.',
        model: 'Multinomial Naive Baye and Random Forest',
        dataset: 'Social Media Conversation - 6576 Dataset',
        result: '79%',
        techStack: 'Python, Jupyter Notebook, Pandas, CSV, Sklearn, nltk, re, TFIDF',
        link: '',
        image: textsentimental
    },
    {
        title: 'Decision Tree Classifier',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Evaluated the decision tree classifier.',
        task: 'Split data into train, test, and eval sets, generated decision tree visualization, and confusion matrix.',
        model: ' ',
        dataset: 'Iris Dataset',
        result: '95% Accuracy',
        techStack: 'Python, Jupyter Notebook, Pandas, Numpy, SkLearn, Matplotlib',
        link: '',
        image: decissiontree
    },
    {
        title: 'Linear Regression',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Demonstrated plots that linear regression learns, minimizing the observed response and prediction by the linear approximation.',
        task: 'Used the truck sales dataset to illustrate ordinary least-squares (OLS) or linear regression, calculated Mean Square Error and Variance Score, and visualized the linear regression.',
        model: 'Linear Regression',
        dataset: 'trucks.csv from UCI',
        result: 'MSE: 0.011 and Variance Score: 0.997',
        techStack: 'Python, Jupyter Notebook, Pandas, Numpy, SkLearn, Matplotlib',
        link: '',
        image: linearRegression
    },
    {
        title: 'KNN Classification',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Created a program to transform text into vectors.',
        task: 'Utilized various data mining techniques, performed KNN-based classification.',
        model: 'KNN',
        dataset: 'Badges dataset from UCI',
        result: 'Highest Accuracy: 80%',
        techStack: 'Python, Jupyter Notebook, Pandas, Numpy, SkLearn, Scipy, Collections',
        link: '',
        image: sklearn
    },
    {
        title: 'Measuring Variance',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Measured the amount of variance that can be explained by the top K principal components in a Principal Component Analysis (PCA) model.',
        task: 'Performed data pre-processing, computed PCA via Covariance Matrix, and plotted feature and overall percent variance.',
        model: 'PCA',
        dataset: 'Wine Dataset',
        result: '',
        techStack: 'Python, Jupyter Notebook, Pandas, Numpy, SkLearn, Matplotlib, Eigen Value and Singular Values',
        link: '',
        image: pca
    },
];
