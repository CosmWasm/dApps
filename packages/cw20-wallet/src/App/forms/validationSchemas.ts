import * as Yup from "yup";
import { config } from "../../config";

const regexStartsWithPrefix = new RegExp(`^${config.addressPrefix}`);

const addressField = Yup.string()
  .matches(regexStartsWithPrefix, `"${config.addressPrefix}" prefix required`)
  .length(39 + config.addressPrefix.length, "Address invalid");
const requiredAddressField = addressField.required("An address is required");
const amountField = Yup.number().required("An amount is required").positive("Amount should be positive");

export const contractValidationSchema = Yup.object().shape({
  contract: Yup.lazy((value) => {
    switch (typeof value) {
      case "number":
        return Yup.number().positive();
      case "string":
        return requiredAddressField;
      default:
        return Yup.mixed().required("A contract address or codeID is required");
    }
  }),
});
export const searchAddressValidationSchema = Yup.object().shape({ address: addressField });
export const sendAddressValidationSchema = Yup.object().shape({ address: requiredAddressField });
export const setAllowanceValidationSchema = Yup.object().shape({ newAmount: amountField });
export const addAllowanceValidationSchema = Yup.object().shape({
  address: requiredAddressField,
  amount: amountField,
});
