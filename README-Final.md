# COVID_Prediction_Model

## Overview
In this project, we present **The Prediction Model for various COVID-19 and non-COVID medical conditions from frontal chest X-ray of the patients**. The need to streamline patient management for both COVID-19 and non-Covid conditions has become more pressing than ever. Chest X-rays provide a non-invasive (potentially bedside) tool to monitor the progression of the disease. Such a tool can gauge severity of the lung infections for these diseases that can be used for escalation or de-escalation of care as well as monitoring treatment efficacy, especially in the ICU.

As the world grapples with multiple medical conditions, especially COVID-19, every ounce of technological innovation and ingenuity harnessed to fight this pandemic and other infections brings us one step closer to overcoming it. Artificial intelligence and machine learning are playing a key role in better understanding and addressing, especially the COVID-19 crisis. Machine learning technology enables computers to mimic human intelligence and ingest large volumes of data to quickly identify patterns and insights.
In the fight against these critical medical conditions, organizations have been quick to apply their machine learning expertise in several areas: scaling customer communications, understanding how they spread, and speeding up research and treatment. In this scenario, it is both relevant and useful to gain the knowledge of chest X-ray images to interpret and develop an AI-based approach to predict and recognize both COVID-19 and non Covid-19 diseases.

## Description of the source of data:
This labeled datset consist of 3184 frontal chest X-ray images of COVID and non-COVID cases. The non-COVID case is Viral Pneumonia. The complete dataset of 3184 images separated by three diffent clasification folders Covid19, Normal and Viral_Pneumonia; images can be found on the below link:

[image dataset Link](https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model/tree/main/Database)


The 2 sources used to create this data set are:
* Covid-Chestxray-Dataset, for COVID-19 X-ray samples
	(https://github.com/ieee8023/covid-chestxray-dataset)
* ChexPert Dataset, for Non-COVID samples
	https://www.kaggle.com/tawsifurrahman/covid19-radiography-database

	
These COVID-19 samples from Covid-Chestxray-Dataset are extracted from several publications. Only the posterior-anterior images have been used for the dataset. Also, the X-ray images of COVID-19 samples have been verified by board-certified radiologist for the credibility of dataset. It has been tried to uniformly sample images from ChexPert for Non-COVID samples.

Current Folder Structure
![folderstructure](https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model/blob/main/Resources/Folder_Structure_New_Dataset.png)

Sample chest images of a COVID and Non-COVID case is below:

![Sample_covid_19_cases](https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model/blob/main/Resources/Sample_covid_19_cases.png)

#### Sample Chest X-rays for COVID-19 cases

![Sample_non_covid_19_cases](https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model/blob/main/Resources/Sample_non_covid_19_cases.png)

#### Sample Chest X-rays for Non-COVID-19 cases

## Analysis	
Using input of chest X-ray images of both COVID-19 and Non-COVID-19 cases, we intend to predict if the patient has COVID-19 or Non-COVID-19 (Viral Pneumonia or normal/no finding at all) medical conditions.
This would give physicians an edge and allow them to act with more confidence while they wait for the analysis of a radiologist by having a digital second opinion confirm their assessment of a patient's condition. Also, these tools can provide quantitative scores to consider and use in studies.
[Presentation link](https://docs.google.com/presentation/d/14ZuV0ykFa7aRdDV4gOMjhqHt0uEHZvyV4xSlan1TKEE/edit#slide=id.p1)

## Tasks and Technologies used:

### **STEP 1: Data cleaning and analysis:**
The images in the dataset are already augmented using the Augmentator Python library. We will use different methods from the imblearn python library to balance the dataset, including SMOTE, Cluster Centroid and SMOTEEN.

### **STEP 2: Database Storage:**
Images are stored on local computers. There were 3 options tested AWS and Google Colab prior to this using local computer created very slow run times. 

### **STEP 3: Applying Machine Learning Model:**
We'll be using the Tensorflow ML library to create a Multi-Class CNN classifier of different respiratory syndromes. We will try different pretrained models including VGG16, VGG19, ResNet18, ResNet50, SqueezeNet, DenseNet-121 and add layers at the end to adjust for our needs.

* Demo
The following demo was deployed using Google Colab and Ngrok. The trained VGG16 model was uploaded to Google Drive and used to predict images using a web interface deployed using Ngrok.

[Demo Link](https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model/blob/main/Resources/demo.gif)


### **STEP 4: Dashboard: Tableau for visualization:**
In addition to using a Flask template, we will integrate Tableau for a fully functioning and interactive dashboard. It will be published on the public tableau server. 

[Interactive Dashboard Link](https://public.tableau.com/profile/stuti.budhwar#!/vizhome/Covid_Prediction_Model_Dashboard/ACCURACY?publish=yes)


## Roles explanation and description

### Presentation 
The Presenation initially started as a role that was assigned to a teammate taking on multipule roles. It has become a role that each teammate would take on when their primary tasking did not require a deliverable. The team has now established that we would all work together to in a collaborative effort to finalize the finished product.

### Machine Learning Model - Bijan Samimi
We are still using this dataset as for the final model. We have not made any further changes to this. With our new Dataset, and from our models we have made in the past we have determined that we did not have enough photos for the neural network to learn. I decided to only have three classes with more photos more ability of the neural network to learn. 
These are the following classes with the number of photos in total: 
* Covid images: 1327
* Normal images: 1341
* Viral_Pneumonia: 1463
Code for Training and Testing:

batch_size=128

data_dir = "Database/"

**rescale images**

datagen= ImageDataGenerator(rescale=1/255,validation_split=.3,rotation_range=20,
                           shear_range=.2,width_shift_range=0.1,height_shift_range=0.1,zoom_range=0.2,
                           preprocessing_function=preprocess_input)

**train_generator**= datagen.flow_from_directory(
                data_dir,
                target_size=(200,200),
                batch_size=batch_size,
                subset="training",
                class_mode="categorical", 
                classes= ["COVID19", "NORMAL","Viral_Pneumonia"],
                shuffle=True, seed=30)


datagen2=ImageDataGenerator(rescale=1/255,validation_split=.3,
                            preprocessing_function=preprocess_input)




**test_generator**=datagen2.flow_from_directory(
                data_dir,
                target_size=(200,200),
                batch_size=batch_size,
                classes= ["COVID19", "NORMAL","Viral_Pneumonia"],
                class_mode="categorical", subset="validation", shuffle=True, seed=30)
                
I decided on a 70/30 split to analyze as a team to start for this model. We used the function image_dataset_from_directory() then include all the rest of the inputs as needed.I began to use photo augemntation for training to use as a class balancer for the neural network to learn. You can look at what inputs I did with the ImageDataGenerator().

**Base Models**
I began by making one base model by my own creation which kept improving over time. This base model I made was 5 layers but this time I used increasing neurons from 16, 32, 64, 128, back to 64 then I finished off with a flatten and the dense layers with the classes. These base models we not learning as a proper machine learning algorithm due to the fact that our training set had a lower accuracy than our validation. This means that our model was underfitted so we did not pursure these in spite of the great scores. 

**Transfer Learning Models**
Unsatisfied by my results from my base models, I tried to build on top of what I had already made. I began with VGG16 transfer learning model pretrained for image datasets. On top of the VGG16 Model I added another dense layer for the number of classes and flattened the images.WE continued by using various drouputs functions on VGG16 and adding more complexity but we still saw no improvement in our scores. But it seemed that the best results for these models was to keep it simple and barely add anything to it and just add the Dense layer with the class names.

My second transfer learning model was the ResNet50 model gave similar results so far out of all my models. I did the same with ResNet where i only added a Dense layer with the number of classes and to flatten the images. We again added more complexity just as with VGG16 but again we saw little improvement on these models so we decided to keep it simple because it was giving the best results.

**BASE_MODEL SCORES** 

Training:
        Loss=0.1841008216
        Accuracy=0.9359369874
         
Validation:
        Loss=0.1820759922
        Accuracy=0.9359999895
        
**VGG_16 MODEL**

Training:
        Loss=0.1469199546
        Accuracy=0.9499760199
         
Validation:
        Loss=0.3281681743
        Accuracy=0.8802880001
        
**ResNet MODEL**

Training:
        Loss=0.4442575076
        Accuracy=0.8325042823
         
Validation:
        Loss=0.4181249711
        Accuracy=0.8417360008

### Machine Learning Model - Gabriel Cuchacovich
We keep using the same dataset and training using Google Colab. Different images sizes and data augmentation parameters were tried to obtain a better result, but it did not work out. Code for training:

data_dir = "Database/" Rescale images datagen= ImageDataGenerator(rescale=1/255,validation_split=.3,rotation_range=20, shear_range=.2,width_shift_range=0.1,height_shift_range=0.1,zoom_range=0.2)

train_ds= datagen.flow_from_directory( data_dir, target_size=(img_width,img_height), batch_size=batch_size, subset="training", class_mode="categorical", classes= image_names, shuffle=True, seed=30)

datagen2=ImageDataGenerator(rescale=1/255,validation_split=.3)

val_ds=datagen2.flow_from_directory( data_dir, target_size=(img_width,img_height), batch_size=batch_size, classes= image_names, class_mode="categorical", subset="validation", shuffle=True, seed=30)

We decided on a 70/30 split to analyze as a team to start for this model. We used the function flow_from_directory() then include all the rest of the inputs as needed.

Code for training:

data_dir = "Database/"
Rescale images 
datagen= ImageDataGenerator(rescale=1/255,validation_split=.3,rotation_range=20,
                           shear_range=.2,width_shift_range=0.1,height_shift_range=0.1,zoom_range=0.2)


train_ds= datagen.flow_from_directory(
                data_dir,
                target_size=(img_width,img_height),
                batch_size=batch_size,
                subset="training",
                class_mode="categorical", 
                classes= image_names,
                shuffle=True, 
                seed=30)


datagen2=ImageDataGenerator(rescale=1/255,validation_split=.3)

val_ds=datagen2.flow_from_directory(
                data_dir,
                target_size=(img_width,img_height),
                batch_size=batch_size,
                classes= image_names,
                class_mode="categorical", 
                subset="validation", 
                shuffle=True, 
                seed=30)

We decided on a 70/30 split to analyze as a team to start for this model. We used the function flow_from_directory() then include all the rest of the inputs as needed.

Two more models were trained, a simplified version of the previous ResNet50, and a VGG16 with a dropout layer to reduce overfitting.
|Model     |Architecture                                  |Performance                            | Confusion Matrix                   |
|:--------:|:--------------------------------------------:|:-------------------------------------:|:----------------------------------:|
|VGG16 2 |![](Resources/VGG16_model2/architecture.png)  |![](Resources/VGG16_model2/score.png)    |![](Resources/VGG16_model2/conf.png)|
|ResNet50|![](Resources/ResNet50_model2/architecture.png)|![](Resources/ResNet50_model2/score.png)|![](Resources/ResNet50_model2/conf.png)|

After trying many data augmentation combinations, different architectures and training the models for 100 epochs instead of 50, we did not get better scores, but we had a big breakthrough in understanding why the accuracy was not improving. The likelihood of each column represent different classes for each model. For example, for the VGG16_model the labels for each column are COVID-19, Viral_Pneumonia and NORMAL while for the ResNet50, they are COVID-19, NORMAL and Viral_Pneumonia. Another important aspect is the fact that the validation accuracy score fluctuates randomly during the training. This is due to the class ratio between the validation minibatches. Meaning that if a validation batch has a higher ratio of a missclassified class, the validation accuracy score will decrease. So after about 11 to 14 epochs, the validation score was not improving, even though the training score was. For future iterations, we should try unfreezing the last layers of the transfer learning models.

### Database - James De Mott
My second deliverable is happening in the context of big shifts in our approach. Due to the computational challenges of training ML on 14 classes, we switched to a dataset with just three classes. Due to the change I have updated our existing sql databses. 

We moved away from having the actual dataset held in the cloud/AWS due to the cost associated with hosting and the time it takes to pull images from the cloud. Instead the images will be kept locally and interface directly with the model being developed. 

Our database approach then will be to use databases to store model output, performance indicators, etc and to interface with a postgres database to build visualizations using tableau and plotly. To this end our "connection strings" are completed using Falcon (for plotly) and the Tableau GUI. I have added SQL syntax to join the actual condition with the prediction output for each image. 

Our intent is to take the data collected from the model performance and to display this using plotly to replicate the tensor flow playground visualization. I'm struggling with this but included my work so far under the viusalization folder. 

I have also uploaded a png of preliminary database diagrams. 
![DatabaseDiagram](https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model/blob/main/Resources/Prelim_Database_Diagram.png)

### Dashboard - Stuti Budwar
  * Detailed and meticulous performance analysis of each machine
learning model in terms of loss and accuracy. The models included 4 basic models, 3 pretrained VGG16 models and 3 pretrained Resnet-50 Models.
  * Finalized on the the visualizations starting from begining to the
Final Dashboard. Although I will be working on bringing a few charts on 1 tableau workbook which are now in two of them.
  * Worked on the interactive elements of the dashboard
This included some reasearch to go beyond the regular interactive elements of tooltip, highlighting and using filters to using advanced ones like animations.
  * Prepared the Dashboard and Story in Tableau for the purpose of
analysis, visulalization and concluding our results. Please refer the following tableau public link for Main Dahshboard and stories and other visualizations: (https://public.tableau.com/profile/stuti.budhwar#!/vizhome/Covid_Prediction_Model_Dashboard/ACCURACY?publish=yes)
  * Visualizing every model in chronological order for 'Loss per Epoch', 'Accuracy per Epoch' using Tableau animation.
Please visit the link refernces for each model in the Visualization_Storyboard_Segment_3_StutiBudhwar.ppt, click Model No. and press play button to see the animated trail of 'Loss and Accuracy per Epoch' for all of the models.
  * Comparative analysis and conclusion of ML strategy and models in chronological order.
Please refer to the link references  in the Visualization_Storyboard_Segment_3_StutiBudhwar.ppt.
  * Prepared a draft of the final presentation and final Dashboard for
the purpose of presentation.

