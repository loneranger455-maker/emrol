import { gql } from "@apollo/client";
export const Load_Users=gql`
query{
    allEmployee{
      firstName,
      dateHired,
      id
    }
  }
`