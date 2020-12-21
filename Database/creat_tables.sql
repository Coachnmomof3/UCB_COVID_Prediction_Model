CREATE TABLE ML_output_table(
    model_no varchar, 
    file_name varchar, 
    likelihood_covid int, 
    likelihood_pneumonia int, 
    likelihood_no_finding int, 
)

CREATE TABLE original_image_data (
    file_name  varchar, 
    condition_actual varchar, 
    test_or_train varchar, 
)

CREATE Table original_image_record (
  model_no varchar, 
  Epochs int, 
  loss int, 
  val_loss int, 
  val_categorical_accuracy int, 
)
