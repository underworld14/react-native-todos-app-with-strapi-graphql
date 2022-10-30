import {gql} from '@apollo/client';

export const GET_TODOS = gql`
  query {
    todos {
      data {
        id
        attributes {
          job
          done
          description
          createdAt
          updatedAt
        }
        __typename
      }
      meta {
        pagination {
          page
          total
          pageSize
        }
        __typename
      }
    }
  }
`;

export const ADD_TODOS = gql`
  mutation addTodo($data: TodoInput!) {
    createTodo(data: $data) {
      data {
        id
        attributes {
          job
          done
        }
      }
    }
  }
`;
