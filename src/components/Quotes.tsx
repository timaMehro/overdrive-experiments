import { Box, Text, SelectInput, Button } from "@autoguru/overdrive";
// import { ChevronDownIcon } from "@autoguru/icons";

import { usePreloadedQuery, useQueryLoader } from "react-relay";
import {
  LOCATIONS,
  MODELS,
  SearchCarsQuery,
  TYPES,
} from "./queries/SearchCarsQuery";
import { useEffect, useState } from "react";

function Results({ queryRef }: { queryRef: any }) {
  const data = usePreloadedQuery<any>(SearchCarsQuery, queryRef);
  if (!data.searchCars.length) {
    return (
      <Text as="p" colour="muted" marginTop="4">
        No results{" "}
      </Text>
    );
  }

  return (
    <Box as="ul" marginTop="4">
      {data.searchCars.map((car: any) => (
        <Box
          as="li"
          key={car.id}
          borderWidth="1"
          borderRadius="md"
          borderColour="light"
          padding="3"
          marginBottom="2"
        >
          <Text as="p">
            <b>{car.type}</b> — {car.model}{" "}
            <Text as="span">({car.location})</Text>{" "}
          </Text>{" "}
        </Box>
      ))}{" "}
    </Box>
  );
}

export default function FormStatic() {
  const [type, setType] = useState("");
  const [model, setModel] = useState("");
  const [location, setLocation] = useState("");

  const [queryRef, loadQuery, dispose] = useQueryLoader<any>(SearchCarsQuery);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    loadQuery(
      {
        filter: {
          type: type || null,
          model: model || null,
          location: location || null,
        },
      },
      { fetchPolicy: "network-only" }
    );
  }

  useEffect(() => () => dispose(), [dispose]);

  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      backgroundColour="white"
      borderColour="light"
      borderRadius="lg"
      borderWidth="3"
      colour="primary"
      display="inline-flex"
      padding="8"
      flexDirection="column"
      style={{ width: 400 }}
    >
      <Text as="p" marginBottom="4">
        Enter your details to get started
      </Text>
      <Box display="flex" flexDirection="column" gap="4" marginBottom="4">
        <SelectInput
          name="text"
          placeholder="What do you drive?"
          value={type}
          onChange={(e: any) => setType(e.target.value)}
        >
          <option value=""></option>
          <option value="" />
          {TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </SelectInput>

        <SelectInput
          name="text"
          placeholder="which model?"
          value={model}
          onChange={(e: any) => setModel(e.target.value)}
        >
          <option value="audi"></option>
          {MODELS.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </SelectInput>

        <SelectInput
          name="text"
          placeholder="postcode"
          value={location}
          onChange={(e: any) => setLocation(e.target.value)}
        >
          <option value="audi"></option>
          {LOCATIONS.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </SelectInput>

        <Button
          type="submit"
          variant="primary"
          size="medium"
          onClick={onSubmit}
        >
          Get my quote
        </Button>
      </Box>
      // Results
      {queryRef ? (
        <Results queryRef={queryRef} />
      ) : (
        <Text as="p" colour="muted">
          {" "}
          Submit to search.{" "}
        </Text>
      )}
    </Box>
  );
}
