# RESPONSIBILITIES FOR THE FINAL PROJECT: STUTI BUDHWAR

### **Evolution of tools and technology** (as a team)
## We changed our dataset from a **5000 chest X-ray images dataset with 14 medical conditions** to a **3829 images dataset with just 3 medical conditions** (Covid, Viral Pneumonia Normal).
* The number of chest X-ray images after balancing the data turned out too less for 14 medical conditions that they had to be trained for. This created a model that did not perform well at all.
* The imbalanced data however performed better giving an accuracy of about 50%, which was due to almost 50% of the images belonging to “No finding” category. This model would have been a biased ML model.
## We changed our data storage plan (as a team)
* We had earlier planned that the images would be stored in Amazon Webservices S3 bucket and the labels for the same in AWS RDB with PostgreSQL flavor. We would integrate Flask to display the data.
* We are using Amazon SageMaker to save our image data that integrates with Jupyter Notebook to build our ML models which is free and integrates with other tools as required.

### **Finalised on the visualization techniques that would be used** 
I am working of some very cool visualizations that are not very common and bring more indight and clarity about the ML models we are using. The main tools, I will be using are:
* Tableau- for stories and Dashboard
* Matplotlib to anayse performance of individual ML models
* Javascript: Parallel Categories Diagram to plot performance of the model over epochs. (Well have to see if this wold work in our case, it woul be really cool to have a visulaization representing every epoch of thje model used)

### **Finalized on the specific visualizations starting from begining to the Final Dashboard** 
* Visualizing original dataset (before analysis)
* Analysis after every ML model is applied
* Analysis of accuracy and loss for 1 particular model for the medical conditions for original vs augmented image data set.
* Final performance analysis of the model

### **Finalized the storyboard for final Dashboard"
* ML Model* vs model accuracy for the chest X-ray images having one of the 2 medical conditions* or images with no finding/Normal. (using confusion matrix)
* ML Model* vs loss for the chest X-ray images having one of the for the 2 medical onditions* or images with no finding/Normal.
* Model accuracy and loss for 1 particular model for the medical conditions for original vs augmented image data set.
* Plot all models vs accuracy to conclude most optimal model.
* Plot all models vs loss to conclude most optimal model.

### **Worked on the interactive elements of the dashboard** 
* This included some reasearch to go beyong the regular intercative elements of tooltip and highlighting.

### **Analysis of performance of models as they evolve for beterment wrt loss and accuracy and what changes helped improvise**

### Files to refer on main repository (https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model) 
	i. (Main Repository)
	ii. (Main Repository)
	iii. (Main Repository)
	iv. (Main Repository)
 	v. (Main Repository)
### Files to refer on my repository (https://github.com/Coachnmomof3/UCB_COVID_Prediction_Model/tree/Stuti_Budhwar)
	i. Deliverables_Stuti_Budhwar_Segment2.md (My branch)

		
