import React, { FC } from "react";
import { Formik } from "formik";

import Input from "../../components/Input";
import Portal from "../../components/Portal";
import Button from "../../components/Button";
import addJobShape from "../../bus/AddJob/form/shapes";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

import styles from "./styles.module.scss";

const AddJob: FC<{ title: string; onClose: () => void }> = ({
  title,
  onClose
}) => {
  return (
    <Portal>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <CloseIcon className={styles.icon} onClick={onClose} />
        </div>

        <div className={styles.wrapperContent}>
          <Formik
            initialValues={addJobShape.shape}
            validationSchema={addJobShape.schema}
            onSubmit={values => console.log(values)}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit
            }) => (
              <form onSubmit={handleSubmit}>
                <div className={styles.wrapperField}>
                  <Input
                    name="title"
                    placeholder="Title"
                    value={values.title}
                    onBlur={handleBlur}
                    error={errors.title}
                    touched={touched.title}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.wrapperField}>
                  <Input
                    name="userEmail"
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.userEmail}
                    error={errors.userEmail}
                    touched={touched.userEmail}
                  />
                </div>

                <div className={styles.wrapperField}>
                  <Input
                    name="companyName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Company name"
                    value={values.companyName}
                    error={errors.companyName}
                    touched={touched.companyName}
                  />
                </div>

                <div className={styles.wrapperField}>
                  <Input
                    name="description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Description"
                    value={values.description}
                    error={errors.description}
                    touched={touched.description}
                  />
                </div>

                <div className={styles.wrapperField}>
                  <Input
                    onBlur={handleBlur}
                    name="locationNames"
                    onChange={handleChange}
                    placeholder="Location names"
                    value={values.locationNames}
                    error={errors.locationNames}
                    touched={touched.locationNames}
                  />
                </div>

                <div className={styles.wrapperButton}>
                  <Button title="Add" type="submit" />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Portal>
  );
};

export default AddJob;
