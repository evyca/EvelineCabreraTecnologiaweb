import { gql } from '@apollo/client';

const ADD_PROGRAMMER = gql`
  mutation AddProgrammer(
    $name: String!
    $email: String!
    $cargo: String!
    $projectId: ID!
  ) {
    addProgrammer(
      name: $name
      email: $email
      cargo: $cargo
      projectId: $projectId
    ) {
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

const DELETE_PROGRAMMER = gql`
  mutation DeleteProgrammer($id: ID!) {
    deleteProgrammer(id: $id) {
      id
    }
  }
`;

const UPDATE_PROGRAMMER = gql`
  mutation UpdateProgrammer(
    $id: ID!
    $name: String!
    $email: String!
    $cargo: String!
  ) {
    updateProgrammer(
      id: $id
      name: $name
      email: $email
      cargo: $cargo
    ) {
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

export { ADD_PROGRAMMER, DELETE_PROGRAMMER, UPDATE_PROGRAMMER };
