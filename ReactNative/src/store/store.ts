import { gql } from '@apollo/client'

const GET_TODOS = gql`
  query {
    todos {
      data {
        attributes {
          job
          description
          done
        }
      }
    }
  }
`

export { GET_TODOS }
