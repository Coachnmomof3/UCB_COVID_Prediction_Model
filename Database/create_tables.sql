CREATE TABLE ML_model_history(
    model_no varchar,
    Basic_Model_Name varchar,
    Epochs int, 
    loss numeric,
    categorical_accuracy numeric, 
    val_loss numeric, 
    val_categorical_accuracy numeric 
);

CREATE TABLE original_image_data (
    file_name  varchar, 
    condition_actual varchar
);


CREATE Table final_img_results (
  file_name varchar, 
  predicted_covid numeric,
	predicted_normal numeric, 
	predicted_no_finding numeric
	); 

 
CREATE TABLE final_img_results_joined_with_actual( 
 final_img_results.file_name VARCHAR, 
 final_img_results.prdecited_likelihood_covid numeric,
 final_img_results.prdecited_likelihood_pneumonia numeric, 
 final_img_results.likelihood_no_finding numeric, 
 original_image_data.condition_actual VARCHAR 
FROM final_img_results 
LEFT JOIN final_img_results ON final_img_results.file_name = original_image_data.file_name;
 ); 
