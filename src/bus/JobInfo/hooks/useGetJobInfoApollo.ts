import { useApolloClient } from "@apollo/client";
import { useParams } from "react-router-dom";

import GET_JOB_INFO from "../schemes/GetJobInfo";
import { IJobs } from "../interfaces";

interface RouteParams {
  id: string;
  param2?: string;
}

const useGetJobInfoApollo = () => {
  const { id } = useParams<RouteParams>();

  const client = useApolloClient();

  const { jobs } = client.readQuery({
    query: GET_JOB_INFO
  });

  const job = jobs.filter((job: IJobs) => job.id === id)[0];

  return {
    job
  };
};

export default useGetJobInfoApollo;
