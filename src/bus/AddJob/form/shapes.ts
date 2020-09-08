import { object, string } from "yup";
import { ID_USER, APPLY_URL } from "../../../constants";

const addJobShape = {
  shape: {
    title: "",
    userEmail: "",
    companyName: "",
    description: "",
    locationNames: "",
    commitmentId: ID_USER,
    applyUrl: APPLY_URL
  },
  schema: object().shape({
    title: string()
      .min(3, "Must be 3 or more letters")
      .max(20, "Must be 20 or less letters")
      .required("Title is required"),
    userEmail: string()
      .email("Add correct email")
      .required("Email is required"),
    companyName: string()
      .min(3, "Must be 3 or more letters")
      .max(20, "Must be 20 or less letters")
      .required("Company name is required"),
    description: string()
      .min(3, "Must be 3 or more letters")
      .max(1000, "Must be 1000 or less letters")
      .required("Description is required"),
    locationNames: string()
      .min(3, "Must be 3 or more letters")
      .max(20, "Must be 20 or less letters")
      .required("Location name is required")
  })
};

export default addJobShape;
