# UCB_COVID_Prediction_Model
Final Project   
                                                            <p align="center">
<img width="753" alt="Screen Shot 2021-01-15 at 9 11 40 AM" src="https://user-images.githubusercontent.com/67808057/104757314-c2d91800-5711-11eb-86ac-9b3b530c6767.png">
  
                          Covid19                     Normal                          Viral_Pneumonia
                                      
# Overview 
Our project came from a collective effort in determining that we want to do some analysis on COVID-19. 
With further research we came up with this Chest X-Ray image dataset that has multiple biological issues along with COVID-19.
For our machine learning model, we are going to make a multi-class classification neural network using transfer learning with 
previous scaled weights optimized for images, such as VGG16 and ResNet50. 

# Preprocessing


### Week 1
This week I had to import the csv file with the labels of the file names of the images from the dataset , upload the images, then check if our images are balanced. 
I started off by downloading our original data onto my local computer because when we have our final model ready we will use AWS S3 but for now we are just using our local computers for trainig. 
I then checked the folders and how all then images were placed. I manipulated how the folders looked so my code would not take as long. 
I made my file path to hold all the folers in their respective categories. 'Resources/data_uploadV2/images'
After finally uploading the file names and the images I began to make the preliminary model for training. 


The complete dataset of 5000 images can be found at the following dropbox link: (https://www.dropbox.com/s/09b5nutjxotmftm/data_upload_v2.zip?dl=0)

The 2 sources used to create this data set are:
- Covid-Chestxray-Dataset, for COVID-19 X-ray samples (https://github.com/ieee8023/covid-chestxray-dataset)
- ChexPert Dataset, for Non-COVID samples (https://stanfordmlgroup.github.io/competitions/chexpert)

### Week 2 
This week for Data Preprocessing I have decided that our previous project model of 14 classes did not have enough photos for our neural network to learn. I was getting very low accuracy scores which led to the decision of having 3 classes which are now COVID19, Normal, and Viral_Pneumonia. I combined the covid pictures from the dropbox dataset into this new dataset we found from Kaggle, which has been verified by real sources. This new dataset only had COVID, Normal, and Pneumonia chest x-ray images for analysis. 

I tried using Amazons SageMaker which is supposed to be optimized for Machine Learning but its runtime for my models was still very slow compared to by local computers runtime so I decided to keep running my models on my local computer compared to SageMaker and GoogleColab.

**OUR NEW DATASET:**
- COVID-19 Radiography Database, https://www.kaggle.com/tawsifurrahman/covid19-radiography-database

### Week 3 and 4 
We are still using this dataset as for the final model. We have not made any further changes to this.

# Feature Engineering 
### Week 1
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


### Week 2/3/4
With our new Dataset, and from our models we have made in the past we have determined that we did not have enough photos for the neural network to learn. I decided to only have three classes with more photos more ability of the neural network to learn. 
These are the following classes with the number of photos in total: 
  - Covid images: 1327
  - Normal images: 1341
  - Viral_Pneumonia: 1463



# Training and Testing Split 

### Week 1
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

### Week 2 
 
Code for Training:


batch_size=128

data_dir = "Database/"

**rescale images**


datagen= ImageDataGenerator(rescale=1/255,validation_split=.3,rotation_range=20,
                           shear_range=.2,width_shift_range=0.1,height_shift_range=0.1,zoom_range=0.2,
                           preprocessing_function=preprocess_input)




**train_generator**= datagen.flow_from_directory(
                data_dir,
                target_size=(64,64),
                batch_size=batch_size,
                subset="training",
                class_mode="categorical", 
                classes= ["COVID19", "NORMAL","Viral_Pneumonia"],
                shuffle=True, seed=30)


datagen2=ImageDataGenerator(rescale=1/255,validation_split=.3,
                            preprocessing_function=preprocess_input)




**test_generator**=datagen2.flow_from_directory(
                data_dir,
                target_size=(64,64),
                batch_size=batch_size,
                classes= ["COVID19", "NORMAL","Viral_Pneumonia"],
                class_mode="categorical", subset="validation", shuffle=True, seed=30)
                
I decided on a 70/30 split to analyze as a team to start for this model. We used the function image_dataset_from_directory() then include all the rest of the inputs as needed.I began to use photo augemntation for training to use as a class balancer for the neural network to learn. You can look at what inputs I did with the ImageDataGenerator()

### Week 3/4/

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
                shuffle=False, seed=30)


datagen2=ImageDataGenerator(rescale=1/255,validation_split=.3,
                            preprocessing_function=preprocess_input)




**test_generator**=datagen2.flow_from_directory(
                data_dir,
                target_size=(200,200),
                batch_size=batch_size,
                classes= ["COVID19", "NORMAL","Viral_Pneumonia"],
                class_mode="categorical", subset="validation", shuffle=False, seed=30)
                
I decided on a 70/30 split to analyze as a team to start for this model. We used the function image_dataset_from_directory() then include all the rest of the inputs as needed.I began to use photo augemntation for training to use as a class balancer for the neural network to learn. You can look at what inputs I did with the ImageDataGenerator(). But notice how on weeks 3/4 i used shuffle= False. This was giving our team lots of trouble with our predictions for the final table join. Setting Shuffle=False we were now able to correctly predict individual photos.


# Models

### Week 1
The model I created was very simple and basic for a start. I simply wanted to create a basic neural network without any transfer learning involved to make sure my data was being imported correctly. 
I used Conv2D because from research this is optimal for image datasets. Maxpooling2D was as well which Downsamples the input representation by taking the maximum value over the window defined by pool_size for each dimension along the features axis
This model was not good at all and will be further improved upon with Transfer Learning specifically for images (VGG16)

### Week 2 
I created many model for this deliverable to determine which was the most efficient going forward to train. My main goal for this weeks Models was to minimize the loss metric and to obviously increase accuracy scores from last weeks extremely low scores. 

**Base Models**
I began by making three base models by my own creation which kept improving over time. The first model I made had 6 hidden layers and used the activation functions relu and softmax. Unsatisfied by the results I used 6 hidden layers but with different Dropout() options and various neurons at different layers.The best base model that I made had only 3 hidden layers and way less neurons resulting in lower accuracy scores and more loss. All these models were done at 30 epochs for consistency.

**Transfer Learning Models**
Unsatisfied by my results from my base models, I tried to build on top of what I had already made. From the precious weeks I stated that I would use transfer learning to improve its accuracy scores and that I have done drastically! I began with VGG16 transfer learning model pretrained for image datasets. On top of the VGG16 Model I added another dense layer for the number of classes and flattened the images. I ran this model at 100 epochs then after I determined it could be improved with more runtime I set it at 200 epochs and the scores did improve as predicted! I will be going forward with VGG16 and going to be training this model more by adding more layers to this neural network for future deliverables.

My second transfer learning model was the ResNet50 model which gave me the best results so far out of all my models. I did the same with ResNet where i only added a Dense layer with the number of classes and to flatten the images. This transfer learning compared to VGG16 preformed better but its runtime was very long which brings me hesitation to train in the future. I ran this model at 50 epochs and 100 epochs which did improve the results. 

### Week 3/4 

**Base Models**
I began by making one base model by my own creation which kept improving over time. This base model I made was 5 layers but this time I used increasing neurons from 16, 32, 64, 128, back to 64 then I finished off with a flatten and the dense layers with the classes. These base models we not learning as a proper machine learning algorithm due to the fact that our training set had a lower accuracy than our validation. This means that our model was underfitted so we did not pursure these in spite of the great scores. 

**Transfer Learning Models**
Unsatisfied by my results from my base models, I tried to build on top of what I had already made. I began with VGG16 transfer learning model pretrained for image datasets. On top of the VGG16 Model I added another dense layer for the number of classes and flattened the images.We continued by using various drouputs functions on VGG16 and adding more complexity but we still saw no improvement in our scores. But it seemed that the best results for these models was to keep it simple and barely add anything to it and just add the Dense layer with the class names.


My second transfer learning model was the ResNet50 model gave similar results so far out of all my models. I did the same with ResNet where i only added a Dense layer with the number of classes and to flatten the images. We again added more complexity just as with VGG16 but again we saw little improvement on these models so we decided to keep it simple because it was giving the best results.

With my tranfer learning models I used another parameter called callback which allowed me to have EarlyStopping which in entails that our model be stopped when essentially there is no improvement in this case "val_loss". This is what led me to have only 22 epochs for our final model.

# Results

### Week 1
As you can see can I got terrible results for this model thus I decided for the next weeks deliverable I will work on optimizing the model and generating better results for my multi class classification neaural network. 
This model was just a starting point. I was mostly coding on how to import the photos and have the model put correct labels on each of them. I am brand new to image datasets so I spent some time learning and which ways to 
go about this. After the knowledge I gained for this first deliverable, my optimized model for next week will be a major improvement. 

<img width="1067" alt="Screen Shot 2020-12-06 at 8 22 20 PM" src="https://user-images.githubusercontent.com/67808057/101311382-22d0ca80-3806-11eb-94b0-e757d38769ac.png">


### Week 2

**Base Model Results**


**MODEL 1**

<img width="1067" alt="Screen Shot 2020-12-20 at 8 19 42 AM" src="https://user-images.githubusercontent.com/67808057/102718292-39623180-429c-11eb-9bef-0984c4ed9de3.png">



**MODEL 2**

<img width="857" alt="Screen Shot 2020-12-20 at 8 21 21 AM" src="https://user-images.githubusercontent.com/67808057/102718326-6a426680-429c-11eb-9836-47869e7a4153.png">



**MODEL 3**


<img width="912" alt="Screen Shot 2020-12-20 at 8 31 18 AM" src="https://user-images.githubusercontent.com/67808057/102718582-cb1e6e80-429d-11eb-8f5b-3663d9532489.png">


  
  
**Transfer Learning Models**

**VGG16**

At 100 epochs

<img width="940" alt="Screen Shot 2020-12-20 at 8 22 42 AM" src="https://user-images.githubusercontent.com/67808057/102718361-9b229b80-429c-11eb-9d22-f17b08a7eabd.png">


At 200 epochs

<img width="1117" alt="Screen Shot 2020-12-20 at 8 23 53 AM" src="https://user-images.githubusercontent.com/67808057/102718398-c1e0d200-429c-11eb-94ec-d743d990c666.png">


**ResNet50**

At 50 epochs

<img width="1024" alt="Screen Shot 2020-12-20 at 8 27 12 AM" src="https://user-images.githubusercontent.com/67808057/102718492-36b40c00-429d-11eb-9c6b-58175a78f951.png">


At 100 epochs

<img width="934" alt="Screen Shot 2020-12-20 at 8 32 42 AM" src="https://user-images.githubusercontent.com/67808057/102718626-f739ef80-429d-11eb-9d59-c1392d6a9426.png">

### Week 3/4 

**BASE_MODEL SCORES** 

Training:
        Loss=0.1841008216
        Accuracy=0.9359369874
         
Validation:
        Loss=0.1820759922
        Accuracy=0.9359999895
        
**ResNet MODEL**

Training:
        Loss=0.4442575076
        Accuracy=0.8325042823
         
Validation:
        Loss=0.4181249711
        Accuracy=0.8417360008

        
**VGG_16 MODEL- FINAL MODEL PROPOSED**

**Training:**
        Loss=0.2025
        Accuracy=0.9356
         
**Validation:**
        Loss=0.3186
        Accuracy=0.8736
        
<img width="329" alt="Screen Shot 2021-01-15 at 8 54 49 AM" src="https://user-images.githubusercontent.com/67808057/104755722-ab992b00-570f-11eb-95d2-76b5dfc45747.png">



<img width="439" alt="Screen Shot 2021-01-11 at 10 29 21 PM" src="https://user-images.githubusercontent.com/67808057/104755828-d3888e80-570f-11eb-91a9-73a198d6bded.png">


**Confusion Matrix of Final Model**


<img width="757" alt="Screen Shot 2021-01-11 at 10 55 00 PM" src="https://user-images.githubusercontent.com/67808057/104756288-7b9e5780-5710-11eb-941e-bdac39f95fe8.png">

Here we can see that we had a problem with our Normal and Viral_Pneumonia classes and it was our last hurdle before getting to that above 90% validation accuracy score and minimal validation loss which is most important! In the future we would have individually preprocess that Virual_Pneumonia class for more accurate results. Overall we were satisfied with the recall (sensitvity) of our Covid19 and Normal classes thus this led to a higher average.


As a reminder for looking at this confusion matrix: 

**Precision** answers the question, “When it predicts the positive result, how often is it correct?”
  
**Recall** answers the question, “When it is actually the positive result, how often does it predict correctly?”

My branch has all the information needed to look into this final model if desired!
