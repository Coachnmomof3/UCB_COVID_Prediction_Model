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
  
  
#### Week One Deliverable 

My first week has been spent largely understanding the ways in which image data can be held in a server online and then eventually related to a dataset for machine learing analysis. Our original dataset has a somewhat clunky structure: each image was originally stored under "test--> covid/non-covid" and "train -->covid/non-covid". This is insufficient for our purposes. One of my teammates restructured the data such that all images are in a single directory. To allow this directory to function, I went through each of the folders in terminal and created a CSV (Resources/connect_core_data_set_csv.csv) to hold the image name and which disease was identified in the x-ray. This file will allow us to eventually relate the file file names to their identified diseases without relying on the name of their folder. 

Additionally, I have included draft code for: 

1. Creating the AWS server and its schema. 
2. Draft code to connect the AWS server to postgres. 
3. Our eventual schema for our results display. 
