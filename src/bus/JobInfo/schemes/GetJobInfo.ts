import gql from "graphql-tag";

const GET_JOB_INFO = gql`
  query GetJobInfo {
    jobs {
      id
      title
      description
      company {
        name
      }
    }
  }
`;

export default GET_JOB_INFO;
