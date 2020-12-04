# Technologies Used
## Data Cleaning and Analysis
The images are already augmented using the Augmentator Python library. We will use different methods form the imblearn python library to balance the dataset, including SMOTE, Cluster Centroid and SMOTEEN.

## Database Storage
Images are stored in AWS S3 and the labels in AWS RDB with PostgreSQL flavour. We will integrate Flask to display the data.

## Machine Learning
We'll be using the Tensorflow ML library to create a Multi-Class CNN classifier of different respiratory syndromes. We will try different pretrained models including VGG, ResNet and AlexNet and add layers at the end to adjust for our needs.

## Dashboard
In addition to using a Flask template, we will also integrate Tableau for a fully functioning and interactive dashboard. It will be published on the public tableau server.