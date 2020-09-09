import { useApolloClient } from "@apollo/client";
import get from "lodash/get";

import { selectAndSortJobs } from "../helpers";
import GET_JOBS from "../schemes/GetJobs";

const useSelectJobApollo = () => {
  const client = useApolloClient();

  const data = client.readQuery({
    query: GET_JOBS
  });

  const jobs = get(data, ["jobs"], []);

  const selectActualJob = (checked: boolean, id: any) => {
    const updatedJobs = selectAndSortJobs(jobs, id, checked);

    client.writeQuery({
      query: GET_JOBS,
      data: {
        jobs: updatedJobs
      }
    });
  };

  return {
    selectActualJob
  };
};

export default useSelectJobApollo;
