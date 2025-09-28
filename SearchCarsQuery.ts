import { graphql } from "react-relay";

export const SearchCarsQuery = graphql`
  query SearchCarsQuery($filter: CarFilter) {
    searchCars(filter: $filter) {
      id
      type
      model
      location
    }
  }
`;
