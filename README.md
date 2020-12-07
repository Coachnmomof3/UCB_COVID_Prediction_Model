# UCB_COVID_Prediction_Model
## Branch Purpose
The purpose of this branch is to build the ML model and support my teammates in whatever is obstructing our progress.

## Role definition
The definition of roles was joint decision where every member declared their preferences and it is specified in the *Planning/Roles.xlsx* file. 

## Technologies
The election of technologies and the project roadmap was largely decided on the group's strengths and experience and it is detailed in the *Planning/technology.md* file.

## Image folder structure
The image folder was reestructured to the following, in order to fulfill the criteria required by tensorflow's method *image_dataset_from_directory*.
![](Resources/folder_structure.png)

## Preprocessing
The images were resized to 180x180 and rescaled to 1-255. In the future, data augmentation will be used.

## ML Model
A simple base model and the first of the pre-trained models were created and trained for 3 epochs without obtaining better results:
|Base Model|VGG16|
|:---------------------------:|:----:|
|![](Resources/base_model.png)|![](Resources/VGG16_model.png)|