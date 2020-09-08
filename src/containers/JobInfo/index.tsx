import React, { FC } from "react";
import { Link } from "react-router-dom";

import useGetJobInfoApollo from "../../bus/JobInfo/hooks/useGetJobInfoApollo";
import { book } from "../../navigation/book";

import styles from "./styles.module.scss";

const JobInfo: FC = () => {
  const { job } = useGetJobInfoApollo();

  return (
    <div className={styles.wrapper}>
      <Link to={`${book.jobs.index}` as string} className={styles.link}>
        Go Back
      </Link>
      <div className={styles.title}>JobInfo</div>
      <div className={styles.titleWork}>{job.title}</div>
      {job.company && (
        <div className={styles.wrapperCompany}>Company: {job.company.name}</div>
      )}
      <div className={styles.description}>{job.description}</div>
    </div>
  );
};

export default JobInfo;
