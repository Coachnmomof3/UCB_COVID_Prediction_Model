CREATE TABLE ML_model_history(
    model_no varchar,
    Basic_Model_Name varchar,
    Epochs intloss float,
    categorical_accuracy float, 
    val_loss float, 
    val_vategorical_accuracy float 
);

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
