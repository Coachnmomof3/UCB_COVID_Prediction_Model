/* Our join's purpose is to take the condition identified 
in the original image and then to join with the predictions using the image name as the primary key*/ 

 CREATE TABLE ouptut_joined_original_actual( 
 ML_output_table.model_no VARCHAR, 
 ML_output_table.file_name VARCHAR, 
 ML_output_table.likelihood_covid int,
 ML_output_table.likelihood_pneumonia int, 
 ML_output_table.likelihood_no_finding int, 
original_image_record.condition_actual int 
FROM ML_output_table 
LEFT JOIN original_image_record ON ML_output_table.model_no=original_image_record.file_name;
 )


