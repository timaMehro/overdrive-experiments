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

export const TYPES = ["SUV", "Sedan", "Hatch"];
export const MODELS = ["Rav4", "Camry", "i30", "CX-5", "Model 3"];
export const LOCATIONS = ["Sydney", "Brisbane", "Melbourne"];
