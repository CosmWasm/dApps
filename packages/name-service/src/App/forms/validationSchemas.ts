import * as Yup from "yup";
import { config } from "../../config";

export const SearchValidationSchema = Yup.object().shape({
  name: Yup.string().min(4, "Name can not be less than 4 characters").required("A Name is required"),
});

const regexStartsWithPrefix = new RegExp(`^${config.addressPrefix}`);

export const TransferValidationSchema = Yup.object().shape({
  address: Yup.string()
    .required("An address is required")
    .matches(regexStartsWithPrefix, `"${config.addressPrefix}" prefix required`)
    .length(39 + config.addressPrefix.length, "Address invalid"),
});
