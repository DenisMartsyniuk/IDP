import { IJobs } from "../interfaces";

export const sortJobs = (data: IJobs[]) =>
  data.sort((a, b) => {
    if (a.checked > b.checked) {
      return -1;
    } else {
      return 1;
    }
  });

export const selectAndSortJobs = (
  data: IJobs[],
  id: string,
  checked: boolean
) => {
  const updatedJobs = data.map((job: IJobs) => {
    if (job.id === id) {
      return {
        ...job,
        checked
      };
    } else {
      return {
        ...job
      };
    }
  });

  return sortJobs(updatedJobs);
};
