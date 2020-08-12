import * as Yup from "yup";

export const SearchValidationSchema = Yup.object().shape({
  name: Yup.string().min(4, "Name can not be less than 4 characters").required("A Name is required"),
});

export const TransferValidationSchema = Yup.object().shape({
  address: Yup.string().min(45, "Address invalid").required("An address is required"),
});
