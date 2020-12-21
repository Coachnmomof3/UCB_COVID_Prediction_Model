# UCB_COVID_Prediction_Model

## Branch Purpose
The original, unprocessed, untransformed dataset for this project [can be found here.](https://www.dropbox.com/s/09b5nutjxotmftm/data_upload_v2.zip?dl=0&file_subpath=%2Fdata_upload_v2%2Ftest%2Fnon)

The purpose of this branch is to house the coding and documents necessary to: 

### Handle Dataset

  1. Hold code needed to create a database of our dataset on the cloud
  2. Hold the code needed to connect a postgres database to AWS and pull this dataset into a jupyter notebook 
  
### Handle Machine Learning Model Output 

  1. Hold code to create a database that will hold our machine learning model's output 
  2. Hold code to connect this database to the visualization software we eventually will decide to use (likely tableau). 
  
  
#### First Deliverable 

My first week has been spent largely understanding the ways in which image data can be held in a server online and then eventually related to a dataset for machine learing analysis. Our original dataset has a somewhat clunky structure: each image was originally stored under "test--> covid/non-covid" and "train -->covid/non-covid". This is insufficient for our purposes. One of my teammates restructured the data such that all images are in a single directory. To allow this directory to function, I went through each of the folders in terminal and created a CSV (Resources/connect_core_data_set_csv.csv) to hold the image name and which disease was identified in the x-ray. This file will allow us to eventually relate the file file names to their identified diseases without relying on the name of their folder. 

Additionally, I have included draft code for: 

1. Creating the AWS server and its schema. 
2. Draft code to connect the AWS server to postgres. 
3. Our eventual schema for our results display. 


### Second Deliverable

My second deliverable is happening in the context of big shifts in our approach. Due to the computational challenges of training ML on 14 classes, we switched to a dataset with just three classes. Due to the change I have updated our existing sql databses. 

We moved away from having the actual dataset held in the cloud/AWS due to the cost associated with hosting and the time it takes to pull images from the cloud. Instead the images will be kept locally and interface directly with the model being developed. 

Our database approach then will be to use databases to store model output, performance indicators, etc and to interface with a postgres database to build visualizations using tableau and plotly. To this end our "connection strings" are completed using Falcon (for plotly) and the Tableau GUI. I have added SQL syntax to join the actual condition with the prediction output for each image. 

Our intent is to take the data collected from the model performance and to display this using plotly to replicate the tensor flow playground visualization. I'm struggling with this but included my work so far under the viusalization folder. 

I have also uploaded a PDF of preliminary database diagrams. 



