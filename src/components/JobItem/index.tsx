import React, { FC } from "react";
import { Link } from "react-router-dom";

import { IJobs } from "../../bus/Jobs/interfaces";
import { book } from "../../navigation/book";

import styles from "./styles.module.scss";

const JobItem: FC<{
  job: IJobs;
  onSelect: (checked: boolean, id: string) => void;
}> = ({ job, onSelect }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperTitle}>
        <input
          type="checkbox"
          checked={job.checked}
          className={styles.checkbox}
          onChange={event => onSelect(event.target.checked, job.id)}
        />
        {job.checked && <div className={styles.actual}>Actual For Me</div>}
        <Link
          to={`${book.jobs.index}/${job.id}` as string}
          className={styles.title}
        >
          {job.title}
        </Link>

        {job.company && (
          <div className={styles.company}>in {job.company.name}</div>
        )}
      </div>

      <div className={styles.description}>{job.description}</div>
    </div>
  );
};

export default JobItem;
