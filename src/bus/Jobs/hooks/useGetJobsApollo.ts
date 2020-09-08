import { useQuery } from "@apollo/react-hooks";
import get from "lodash/get";

import GET_JOBS from "../schemes/GetJobs";

const useGetJobsApollo = () => {
  const { loading, error, data } = useQuery(GET_JOBS);

  const jobs = get(data, ["jobs"], []);

  return {
    loading,
    error,
    data: jobs
  };
};

export default useGetJobsApollo;
