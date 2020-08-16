import { gql } from "apollo-boost";
/***
 * LOGIN
 */
export const USER_LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      ok
      error
      data {
        id
      }
    }
  }
`;