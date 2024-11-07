import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers($options: PageQueryOptions) {
    users(options: $options) {
      data {
        id
        name
        email
      }
      meta {
        totalCount
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
      username
    }
  }
`;
