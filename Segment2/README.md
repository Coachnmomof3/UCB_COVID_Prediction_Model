# RESPONSIBILITIES FOR SEGMENT 2: STUTI BUDHWAR

### Evolution of tools and technology (as a team)
#### Change in Dataset
We changed our dataset from a **5000 chest X-ray images dataset with 14 medical conditions** to a **3829 + 128 images dataset with just 3 medical conditions** (Covid, Viral Pneumonia Normal). The number of chest X-ray images after balancing the data turned out too less for 14 medical conditions that they had to be trained for. This created a model that did not perform well at all. Thus the change.

#### We changed our data storage plan (as a team)
**Started with** - We had earlier planned that the images would be stored in Amazon Webservices S3 bucket and the labels for the same in AWS RDB with PostgreSQL flavor. 
**Moved to** - Then we were using Amazon SageMaker to save our image data that integrates with Jupyter Notebook to build our ML models which is free and integrates with other tools as required.
**Finally** - Now we have our image dataset saved on our local machines and are using jupyter notebook and Google collab to train our models.

### Finalised on the visualization techniques that would be used
I am working on the visualizations that are not very common and bring more insight and clarity about the ML models we are using. The main tools, I will be using are:
* Tableau- for stories and Dashboard
* It will be published on the public tableau server.
* Matplotlib to analyse performance of individual ML models.

### Finalized on the specific visualizations starting from begining to the Final Dashboard

### Finalized the specific visulaizations for the final Dashboard

### Worked on the interactive elements of the dashboard
* This included some reasearch to go beyond the regular intercative elements of tooltip, highlighting to using parameters and animation.
* I would be working on improvizing the animation for better representation of data in the coming segments.

### Detailed and meticulous performance analysis of each models as it evolved in terms of loss and accuracy and what changes in the models helped improvise.
* The models included 4 basic models, 2 pretraines VGG16 models and 2 pretrained Resnet Models.

### Visualizing every model in chronological order for loss per Epoch, Accuracy per Epoch using Tableau animation.
* Please visit the link refernce at each animation in the Visualization_Storyboard_Segment_2_StutiBudhwar.ppt, click Model No. and press play button to see the animated trail of Loss and Accuracy per Epoch for each of the 9 models.

### Comparative analysis of models in chronological order.
* Please refer visit the link reference at each animation in the Visualization_Storyboard_Segment_2_StutiBudhwar.ppt.

### Strategy for next segment based on the previous analysis and visulaizations.

### Files to refer on my repository (https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model/tree/Stuti_Budhwar/Segment2)
* Visualization_Storyboard_Segment_2_StutiBudhwar.ppt
* README.md (For my Deliverables for Segement2)
* AccuracyPerEpoch_Model_1_to_9.twbx (tableau Workbook)
* Annexure_Model_Details.md
* ML_Models_Chronological - Tableau.xlsx
* ML_Models_Chronological.xlsx
* MODEL_1To9_history.csv
* NewDataset_MedicalConditionsCount.xlsx
	
### Tableau public links to refer:
 
* https://public.tableau.com/profile/stuti.budhwar#!/vizhome/Covid_Prediction_Model_New_Dataset_Medical_Conditions_Count/Medical_Conditions_Count?publish=yes
* https://public.tableau.com/profile/stuti.budhwar#!/vizhome/Covid_Prediction_Model_New_Dataset_Covid_vs_NonCovid_Count/CovidVsNonCovid?publish=yes
* https://public.tableau.com/profile/stuti.budhwar#!/vizhome/LossPerEpoch_Model_1_to_9/MODEL1-Loss?publish=yes
* https://public.tableau.com/profile/stuti.budhwar#!/vizhome/AccuracyPerEpoch_Model_1_to_9/MODEL1-Accuracy?publish=yes
* https://public.tableau.com/profile/stuti.budhwar#!/vizhome/Loss_from_Model1_to_Model9/Loss-Model1to9?publish=yes
* https://public.tableau.com/profile/stuti.budhwar#!/vizhome/Accuracy_from_Model1_to_Model9/Accuracy-Model1to9?publish=yes






