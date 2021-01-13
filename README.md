# UCB_COVID_Prediction_Model
Final Project

# Overview 
Our project came from a collective effort in determining that we want to do some analysis on COVID-19. 
With further research we came up with this Chest X-Ray image dataset that has multiple biological issues along with COVID-19.
For our machine learning model, we are going to make a multi-class classification neural network using transfer learning with 
previous scaled weights optimized for images, such as VGG16 and ResNet18. 

# Preprocessing

## Week 1
### Roles
The definition of roles was joint decision where every member declared their preferences and it is specified in the *Planning/Roles.xlsx* file. 

### Technologies
The election of technologies and the project roadmap was largely decided on the group's strengths and experience and it is detailed in the *Planning/technology.md* file.

### Image folder structure
The image folder was reestructured to the following, in order to fulfill the criteria required by tensorflow's method *image_dataset_from_directory*.

## Week 2
### Technologies
This week I imported the images database from my teammate Bijan Samimi. He rearranged the folder structure to make it easier for us to work with it. 
First, I tried using my local environments, but could not make my GPU work with Tensorflow. Then I uploaded the files to an AWS S3 bucket to use with Sagemaker, but I ran out of the free tier storage capacity very quickly, so I connected our github to a Sagemaker jupyter notebook, but it took too long to train the models. After that, I tried Kaggle's notebooks but it still took too long to train. Finally, I opted for a combination of google drive for storage and google colab for training.
Using a CPU did not help and just changing the environment configuration to GPU did not make the GPU train the models. It took me a day to realize that in order to use the GPU I needed to run the models inside a *with tf.device('/device:GPU:0'):* block.

## Week 3 and 4
We keep using the same dataset and training using Google Colab.

# Feauture Engineering
## Week 1
The complete dataset of 5000 images can be found at the following dropbox link: (https://www.dropbox.com/s/09b5nutjxotmftm/data_upload_v2.zip?dl=0)

The 2 sources used to create this data set are:
- Covid-Chestxray-Dataset, for COVID-19 X-ray samples (https://github.com/ieee8023/covid-chestxray-dataset)
- ChexPert Dataset, for Non-COVID samples (https://stanfordmlgroup.github.io/competitions/chexpert)

These are the original classes with their number of photos in total: 
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

## Week 2
As can be seen, the dataset is heavily imbalanced towards the No_Finding class andafter a lot of experimenting with different models and getting very low accuracy scores, we decided to simplify the problem and combine another dataset with only 3 classes Normal, Covid and Viral_Pneumonia.

These are the number of images per class:
- Covid images: 1327
- Normal images: 1341
- Viral_Pneumonia: 1463

## Week 3 and 4
Different images sizes and data augmentation parameters were tried to obtain a better result, but it did not work out.

# Training and Testing Split 
## Week 1
Code for training:

data_dir = "./Resources/images/images/" train_ds = tf.keras.preprocessing.image_dataset_from_directory( data_dir, validation_split=0.2, subset="training", seed=123, image_size=(img_height, img_width), batch_size=batch_size)

val_ds = tf.keras.preprocessing.image_dataset_from_directory( data_dir, validation_split=0.2, subset="validation", seed=123, image_size=(img_height, img_width), batch_size=batch_size)

We decided on a 80/20 split to analyze as a team to start for this model. We used the function image_dataset_from_directory() then include all the rest of the inputs as needed.

## Week 2, 3 and 4
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

# Model
## Week 1
 The first model I created is a simple SVM-inspired model to compare the pretrained models against. This week I used transfer learning to train VGG16 and added some layers at the end to adjust the output to our needs. Due to the limited capacities of my local environment, the models were trained for only 3 epochs and no difference was found between this 2 models.
|Model     |Architecture                               |Performance                                |
|:--------:|:-----------------------------------------:|:-----------------------------------------:|
|Base_model|<img src="Resources/Base_model/architecture.png" alt="drawing" width="50"/> |![](Resources/Base_model/Base_model1.png)  |
|VGG16     |<img src="Resources/VGG16_model/architecture.png" alt="drawing" width="50"/>|![](Resources/VGG16_model/VGG16_model1.png)|

## Week 2
This week, thanks to the ability to run the models in Google Colab's GPU environment, I was able to train 3 models for 50 epochs and with the reduction of classes we saw great improvement in the accuracy scores.
|Model     |Architecture                                  |Performance                            | Confusion Matrix                   |
|:--------:|:--------------------------------------------:|:-------------------------------------:|:----------------------------------:|
|Base_model|![](Resources/Base_model/architecture.png)    |![](Resources/Base_model/score.png)    |![](Resources/Base_model/conf.png)  |
|VGG16     |![](Resources/VGG16_model/architecture.png)   |![](Resources/VGG16_model/score.png)   |![](Resources/VGG16_model/conf.png) |
|ResNet50|![](Resources/ResNet50_model/architecture.png)|![](Resources/ResNet50_model/score.png)|![](Resources/ResNet50_model/conf.png)|

## Week 3 and 4
Two more models were trained, a simplified version of the previous ResNet50, and a VGG16 with a dropout layer to reduce overfitting.
|Model     |Architecture                                  |Performance                            | Confusion Matrix                   |
|:--------:|:--------------------------------------------:|:-------------------------------------:|:----------------------------------:|
|VGG16 2 |![](Resources/VGG16_model2/architecture.png)  |![](Resources/VGG16_model2/score.png)    |![](Resources/VGG16_model2/conf.png)|
|ResNet50|![](Resources/ResNet50_model2/architecture.png)|![](Resources/ResNet50_model2/score.png)|![](Resources/ResNet50_model2/conf.png)| 

# Results
## Week 1
As can be seen, I got terrible results for this models, so we decided that for the next weeks we will be working on improving the dataset and optimizing the models to obtain better results.
This models are just the beggining and sets us on a good path towards developing more robust models and datasets.

## Week 2
This week we saw a huge improvement in the model's performance, mostly because of the new dataset we generated. Reducing the number of classes to predict from 14 to 3 was a great move and complementing with images from other datasets helped a lot.
The most important insight is provided by the confusion matrix which shows that all the models are misclassifying Viral_Pneumonia more than any other class. The next step should be to increase the models' complexity and improve on feature engineering.

## Week 3 and 4
After trying many data augmentation combinations, different architectures and training the models for 100 epochs instead of 50, we did not get better scores, but we had a big breakthrough in understanding why the accuracy was not improving. The likelihood of each column represent different classes for each model. For example, for the VGG16_model the labels for each column are COVID-19, Viral_Pneumonia and NORMAL while for the ResNet50, they are COVID-19, NORMAL and Viral_Pneumonia. Another important aspect is the fact that the validation accuracy score fluctuates randomly during the training. This is due to the class ratio between the validation minibatches. Meaning that if a validation batch has a higher ratio of a missclassified class, the validation accuracy score will decrease. So after about 11 to 14 epochs, the validation score was not improving, even though the training score was. For future iterations, we should try unfreezing the last layers of the transfer learning models.