import { useMutation } from "@apollo/react-hooks";

import ADD_JOB from "../schemes/AddJob";
import { IJobs } from "../../Jobs/interfaces";
import GET_JOBS from "../../Jobs/schemes/GetJobs";

interface IDataJobs {
  jobs: IJobs[];
}

const useAddJobApollo = () => {
  const [postJob] = useMutation(ADD_JOB, {
    update(cache, { data: { postJob } }) {
      const data: IDataJobs = cache.readQuery({ query: GET_JOBS });

      cache.writeQuery({
        query: GET_JOBS,
        data: { jobs: [postJob, ...data.jobs] }
      });
    }
  });

  return {
    postJob
  };
};

export default useAddJobApollo;
