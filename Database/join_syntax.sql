/* Our join's purpose is to take the condition identified 
in the original image and then to join with the predictions using the image name as the primary key*/ 

 CREATE TABLE ouptut_joined_original_actual( 
 ML_model_history.model_no VARCHAR, 
 ML_model_history.file_name VARCHAR, 
 ML_model_history.likelihood_covid numeric,
 ML_model_history.likelihood_pneumonia numeric, 
 ML_model_history.likelihood_no_finding numeric, 
original_image_data.condition_actual VARCHAR 
FROM ML_model_history 
LEFT JOIN img_results ON ML_model_history.file_name = original_image_data.file_name;
 )


