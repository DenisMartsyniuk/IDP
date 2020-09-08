import gql from "graphql-tag";

const GET_JOBS = gql`
  query GetJobs {
    jobs {
      id
      title
      description
      commitment {
        title
      }

      locationNames
      userEmail
      applyUrl
      company {
        name
      }
    }
  }
`;

export default GET_JOBS;
