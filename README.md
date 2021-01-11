# COVID_Prediction_Model

## Overview
In this project, we present **The Prediction Model for various COVID-19 and non-COVID medical conditions from frontal chest X-ray of the patients**. The need to streamline patient management for both COVID-19 and non-Covid conditions has become more pressing than ever. Chest X-rays provide a non-invasive (potentially bedside) tool to monitor the progression of the disease. Such a tool can gauge severity of the lung infections for these diseases that can be used for escalation or de-escalation of care as well as monitoring treatment efficacy, especially in the ICU.

As the world grapples with multiple medical conditions, especially COVID-19, every ounce of technological innovation and ingenuity harnessed to fight this pandemic and other infections brings us one step closer to overcoming it. Artificial intelligence and machine learning are playing a key role in better understanding and addressing, especially the COVID-19 crisis. Machine learning technology enables computers to mimic human intelligence and ingest large volumes of data to quickly identify patterns and insights.
In the fight against these critical medical conditions, organizations have been quick to apply their machine learning expertise in several areas: scaling customer communications, understanding how they spread, and speeding up research and treatment. In this scenario, it is both relevant and useful to gain the knowledge of chest X-ray images to interpret and develop an AI-based approach to predict and recognize both COVID-19 and non Covid-19 diseases.

## Description of the source of data:
This labeled datset consist of 3184 frontal chest X-ray images of COVID and non-COVID cases. The non-COVID case is a Viral Pneumonia.
 
The complete dataset of 3184 images can be found at the following dropbox link: (https://www.dropbox.com/s/09b5nutjxotmftm/data_upload_v2.zip?dl=0)

The 2 sources used to create this data set are:
* Covid-Chestxray-Dataset, for COVID-19 X-ray samples
	(https://github.com/ieee8023/covid-chestxray-dataset)
* ChexPert Dataset, for Non-COVID samples
	https://www.kaggle.com/tawsifurrahman/covid19-radiography-database

	
These COVID-19 samples from Covid-Chestxray-Dataset are extracted from several publications. Only the posterior-anterior images have been used for the dataset. Also, the X-ray images of COVID-19 samples have been verified by board-certified radiologist for the credibility of dataset. It has been tried to uniformly sample images from ChexPert for Non-COVID samples.

The folder Structure of the dataset would be changing the structure as part of cleaning the data if required:

Current Folder Structure
![folderstructure](https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model/blob/main/Resources/Folder_Structure_New_Dataset.png)

The sample chest images of a COVID and Non-COVID case is as below:

![Sample_covid_19_cases](https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model/blob/main/Resources/Sample_covid_19_cases.png)

#### Sample Chest X-rays for COVID-19 cases

![Sample_non_covid_19_cases](https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model/blob/main/Resources/Sample_non_covid_19_cases.png)

#### Sample Chest X-rays for Non-COVID-19 cases

## Analysis:	
Using input of chest X-ray images of both COVID and several Non-COVID cases, we intend to predict if the patient has that particular COVID or Non-COVID (COVID-19, Viral Pneumonia or normal/no finding at all) medical conditions.
This would give physicians an edge and allow them to act with more confidence while they wait for the analysis of a radiologist by having a digital second opinion confirm their assessment of a patient's condition. Also, these tools can provide quantitative scores to consider and use in studies.

## Tasks and Technologies used:

### **STEP 1: Data cleaning and analysis:**
The images in the dataset are already augmented using the Augmentator Python library. We will use different methods from the imblearn python library to balance the dataset, including SMOTE, Cluster Centroid and SMOTEEN.

### **STEP 2: Database Storage:**
*This pending finalization of storage container due to functionality and compatibility.

Images are stored on local computers. There were 3 options tested prior to this using local computer created very slow run times. 

### **STEP 3: Applying Machine Learning Model:**
We'll be using the Tensorflow ML library to create a Multi-Class CNN classifier of different respiratory syndromes. We will try different pretrained models including VGG16, VGG19, ResNet18, ResNet50, SqueezeNet, DenseNet-121 and add layers at the end to adjust for our needs.

### **STEP 4: Dashboard: Tableau for visualization:**
In addition to using a Flask template, we will integrate Tableau for a fully functioning and interactive dashboard. It will be published on the public tableau server. 


