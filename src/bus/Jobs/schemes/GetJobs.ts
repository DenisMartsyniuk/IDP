import gql from "graphql-tag";

const GET_JOBS = gql`
  query GetJobs {
    jobs {
      id
      title
      description
      checked @client
      company {
        name
      }
    }
  }
`;

export default GET_JOBS;
