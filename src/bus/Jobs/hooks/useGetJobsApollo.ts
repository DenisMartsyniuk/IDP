import { useQuery } from "@apollo/react-hooks";

import GET_JOBS from "../schemes/GetJobs";

const useGetJobsApollo = () => {
  const { loading, error, data } = useQuery(GET_JOBS);

  return {
    loading,
    error,
    data
  };
};

export default useGetJobsApollo;
