import * as Yup from "yup";
import { config } from "../../config";

const regexStartsWithPrefix = new RegExp(`^${config.addressPrefix}`);

const addressShape = {
  address: Yup.string()
    .required("An address is required")
    .matches(regexStartsWithPrefix, `"${config.addressPrefix}" prefix required`)
    .length(39 + config.addressPrefix.length, "Address invalid"),
};

export const searchValidationSchema = Yup.object().shape(addressShape);

export const sendAddressValidationSchema = Yup.object().shape(addressShape);
