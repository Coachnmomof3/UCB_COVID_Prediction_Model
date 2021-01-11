# UCB_COVID_Prediction_Model *3rd Deliverable

## Overview
Our project came from a collective effort in determining that we want to do some analysis on COVID-19. With further research we came up with this Chest X-Ray image dataset that has multiple biological issues along with COVID-19. For our machine learning model, we are going to make a multi-class classification neural network using transfer learning with previous scaled weights optimized for images, such as VGG16 and ResNet50.

## Role in Project
As the floater of the group, I will assist when I am needed in different areas and I am designated as the primary GitHub owner. For this weeks deliverable I taken on the role of presentation coordinator. 

## Purpose
The purpose of my role as the Repository Administrator this week was to make sure majority of our elements from the projects deliverables were included on the main branch. To make sure the main branch only contained the nessessary deliverables for the Teams final product for our presentation. I have also assumed the position of the presentation coordinator. In the hustle and bustle of the preperation to finalize our end results for our project I ensured our team was reminded of the requirements that may go overlooked. Little details such as little staying within time alloted for each presentation, key speaking points to focus on and items needed for final submission.   

## Analysis and Challenges
The challenges for this deliverable was removing items commited by the mass. I only knew of how to removed from the GitHub repo with limits users to deleting each item one by one and it would leave a remaining shell with a status of deleted tagged on it. In majority of my research the options sited did not include a how to guide just the code to remove files in a group. All of the searched possibilities led me to turned to youtube for visual direction. I was successful with removing groups of images via GitBash.

In a prior module going through the Branching exercises I became well versed with this process. In experiencing frustrations with ensuring the code generated to submit deliverables for my branch, rather than the main branch, I realized that step was not covered. There may be many ways to generate that code the option I chose was to copy the URL when on my branch. Here in deliverable 3 I have gained the knowledge of where to locate that code and will be submitting it for this deliverable.

I also created an outline via power point presentation. The power point contains the structure in which we will present the presentation by teammate, speaking points and the time frame for our dry run. 

## Challenges and Difficulties Encountered
As a GitHub Administrator I will need to make sure that the main branch does not contain duplicate documentation, all push requests do not contain conflicts within the items. We are also experiancing a little communication disconnect due to major time zone differences. This was recently ironed out and we are now back on the same page. 

## Results
I've been successful with the challenge of being dual hatted knowing that my attention to detail with the presentations outline is apprectiated. The outline of our live presenation and key speaking points along with preperation have become a starting point for the team to collaborate while finalizing our delivery. We are on track for scheduled dry runs in preperation for presentation day. 

## Roles explanation and description

### Presentation 
The Presenation initially started as a role that was assigned to a teammate taking on multipule roles. It has become a role that each teammate would take on when their primary tasking did not require a deliverable. The team has now established that we would all work together to in a collaborative effort to finalize the finished product.

- ### Machine Learning Model - Bijan Samimi
We are still using this dataset as for the final model. We have not made any further changes to this. With our new Dataset, and from our models we have made in the past we have determined that we did not have enough photos for the neural network to learn. I decided to only have three classes with more photos more ability of the neural network to learn. 
These are the following classes with the number of photos in total: 
   - Covid images: 1327
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

- ### Machine Learning Model - Gabriel Cuchacovich
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

- ### Database -James De Mott - No requirement for Deliverable 3

- ### Dashboard - Stuti Budwar
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