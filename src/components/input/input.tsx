import { TextField, TextFieldProps } from "@material-ui/core";
import { useField } from "formik";

export const Input = (props: TextFieldProps) => {
  const [field, meta] = useField(props.name);
  const { touched, error } = meta;

  return (
    <TextField
      error={touched && !!error}
      helperText={touched && error}
      variant="outlined"
      fullWidth
      {...field}
      {...props}
    />
  );
};
