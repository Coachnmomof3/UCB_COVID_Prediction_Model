CREATE TABLE ML_model_history(
    model_no varchar,
    Basic_Model_Name varchar,
    Epochs int
    loss numeric,
    categorical_accuracy numeric, 
    val_loss numeric, 
    val_categorical_accuracy numeric 
);

CREATE TABLE original_image_data (
    file_name  varchar, 
    condition_actual varchar
);


CREATE Table img_results (
  model_no varchar, 
  file_name varchar, 
  prdecited_likelihood_covid numeric,
  prdecited_likelihood_pneumonia numeric,
  prdecited_likelihood_no_finding numeric
	); 