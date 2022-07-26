import { gql } from '@apollo/client';

const GET_PROGRAMMERS = gql`
  query getProgrammers {
    programmers {
      id
      name
      cargo
      email
      project {
        name
      }
    }
  }
`;

const GET_PROGRAMMER = gql`
  query getProgrammer($id: ID!) {
    programmer(id: $id) {
      id
      name
      email
      cargo
      project {
        id
        name
        description
        status
      }
    }
  }
`;

export { GET_PROGRAMMERS, GET_PROGRAMMER };
