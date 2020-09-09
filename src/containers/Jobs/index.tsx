import React, { FC, useState } from "react";

import AddJob from "../AddJob";
import Button from "../../components/Button";
import { IJobs } from "../../bus/Jobs/interfaces";
import JobItem from "../../components/JobItem/index";
import useGetJobsApollo from "../../bus/Jobs/hooks/useGetJobsApollo";
import useSelectJobApollo from "../../bus/Jobs/hooks/useSelectJobApollo";

import styles from "./styles.module.scss";

const Jobs: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data } = useGetJobsApollo();
  const { selectActualJob } = useSelectJobApollo();

  const onSelectActualJob = (checked: boolean, id: any) =>
    selectActualJob(checked, id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Jobs</div>

      <div className={styles.wrapperButton}>
        <Button
          type="button"
          title="Add New Job"
          onClick={() => setOpenModal(!openModal)}
        />
      </div>

      {data.map((job: IJobs) => (
        <JobItem job={job} key={job.id} onSelect={onSelectActualJob} />
      ))}

      {openModal && (
        <AddJob title="Add Job" onClose={() => setOpenModal(!openModal)} />
      )}
    </div>
  );
};

export default Jobs;
