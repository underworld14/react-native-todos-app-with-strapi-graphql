import {gql} from '@apollo/client';

const GET_TODOS = gql`
  query {
    todos {
      data {
        attributes {
          job
          done
          description
        }
      }
    }
  }
`;

const TOGGLE_CHECK = gql``;

const DELETE_TODO = gql``;

const CREATE_TODO = gql`
  mutation {
    createTodo(data: {job: $job, done: $boolean}) {
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

export {GET_TODOS, CREATE_TODO, DELETE_TODO, TOGGLE_CHECK};
