# UCB_COVID_Prediction_Model
Final Project

# Overview 
Our project came from a collective effort in determining that we want to do some analysis on COVID-19. 
With further research we came up with this Chest X-Ray image dataset that has multiple biological issues along with COVID-19.
For our machine learning model, we are going to make a multi-class classification neural network using transfer learning with 
previous scaled weights optimized for images, such as VGG16 and ResNet18. 

# Preprocessing
This week I had to import the csv file with the labels of the file names of the images from the dataset , upload the images, then check if our images are balanced. 
I started off by downloading our original data onto my local computer because when we have our final model ready we will use AWS S3 but for now we are just using our local computers for trainig. 
I then checked the folders and how all then images were placed. I manipulated how the folders looked so my code would not take as long. 
I made my file path to hold all the folers in their respective categories. 'Resources/data_uploadV2/images'
After finally uploading the file names and the images I began to make the preliminary model for training. 


The complete dataset of 5000 images can be found at the following dropbox link: (https://www.dropbox.com/s/09b5nutjxotmftm/data_upload_v2.zip?dl=0)

The 2 sources used to create this data set are:
- Covid-Chestxray-Dataset, for COVID-19 X-ray samples (https://github.com/ieee8023/covid-chestxray-dataset)
- ChexPert Dataset, for Non-COVID samples (https://stanfordmlgroup.github.io/competitions/chexpert)

# Feauture Engineering 
This first model I created is just and initial test to make sure our data and images were being imported. This is an image dataset so the features are just the images from the dataset. 
These are the following classes with the number of photos in total: 
- No_Finding                    1898
- Covid                          184
- Pneumothorax                   164
- Lung_Opacity                   156
- Edema                          155
- Support_Devices                154
- Consolidation                  145
- Atelectasis                    143
- Enlarged_Cardiomediastinum     143
- Fracture                       142
- Lung_Lesion                    127
- Pneumonia                      118
- Pleural_Other                   99

# Training and Testing Split 
Code for training:

data_dir = "./Resources/images/images/"
train_ds = tf.keras.preprocessing.image_dataset_from_directory(
  data_dir,
  validation_split=0.2,
  subset="training",
  seed=123,
  image_size=(img_height, img_width),
  batch_size=batch_size)

val_ds = tf.keras.preprocessing.image_dataset_from_directory(
  data_dir,
  validation_split=0.2,
  subset="validation",
  seed=123,
  image_size=(img_height, img_width),
  batch_size=batch_size)

We decided on a 80/20 split to analyze as a team to start for this model. We used the function image_dataset_from_directory() then include all the rest of the inputs as needed.

# Model
The model I created was very simple and basic for a start. I simply wanted to create a basic neural network without any transfer learning involved to make sure my data was being imported correctly. 
I used Conv2D because from research this is optimal for image datasets. Maxpooling2D was as well which Downsamples the input representation by taking the maximum value over the window defined by pool_size for each dimension along the features axis
This model was not good at all and will be further improved upon with Transfer Learning specifically for images (VGG16)

# Results
As you can see can I got terrible results for this model thus I decided for the next weeks deliverable I will work on optimizing the model and generating better results for my multi class classification neaural network. 
This model was just a starting point. I was mostly coding on how to import the photos and have the model put correct labels on each of them. I am brand new to image datasets so I spent some time learning and which ways to 
go about this. After the knowledge I gained for this first deliverable, my optimized model for next week will be a major improvement. 

<img width="1067" alt="Screen Shot 2020-12-06 at 8 22 20 PM" src="https://user-images.githubusercontent.com/67808057/101311382-22d0ca80-3806-11eb-94b0-e757d38769ac.png">

