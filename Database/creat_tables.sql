CREATE TABLE ML_model_history(
    model_no varchar,
    Basic_Model_Name varchar,
    Epochs intloss numeric,
    categorical_accuracy numeric, 
    val_loss numeric, 
    val_vategorical_accuracy numeric 
);

CREATE TABLE original_image_data (
    file_name  varchar, 
    condition_actual varchar, 
    test_or_train varchar 
);

CREATE Table original_image_record (
  model_no varchar, 
  Epochs int, 
  loss int, 
  val_loss int, 
  val_accuracy int
); 


CREATE Table img_results (
model_no varchar, 
file_name varchar, 
prdecited_likelihood_covid numeric,
prdecited_likelihood_pneumonia numeric,
prdecited_likelihood_no_finding numeric
	); 

