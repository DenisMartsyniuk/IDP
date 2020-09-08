import gql from "graphql-tag";

const ADD_JOB = gql`
  mutation PostJob($input: PostJobInput!) {
    postJob(input: $input) {
      id
      title
      description
      company {
        name
      }
    }
  }
`;

export default ADD_JOB;
