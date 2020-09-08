import gql from "graphql-tag";

const GET_JOBS = gql`
  query {
    jobs {
      id
      title
      description
      applyUrl
      slug
      company {
        name
        slug
        logoUrl
      }
      locationNames
      userEmail
    }
  }
`;

export default GET_JOBS;
