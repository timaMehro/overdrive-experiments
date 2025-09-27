import {
  OverdriveProvider,
  Box,
  Text,
  SelectInput,
  TextInput,
  Button,
} from "@autoguru/overdrive";
import { ChevronDownIcon } from "@autoguru/icons";

export default function FormStatic() {
  return (
    <Box
      as="form"
      method="POST"
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
        <SelectInput name="text" placeholder="What do you drive?" value="">
          <option value=""></option>
          <option value="bmw">BMW</option>
          <option value="ford">Ford</option>
          <option value="honda">Honda</option>
          <option value="mercedes">Mercedes</option>
        </SelectInput>

        <SelectInput name="text" placeholder="which model?" value="">
          <option value="audi"></option>
          <option value="bmw">ix3</option>
          <option value="ford">I5</option>
        </SelectInput>

        <SelectInput name="text" placeholder="postcode" value="">
          <option value="audi"></option>
          <option value="bmw">3428</option>
          <option value="ford">3042</option>
        </SelectInput>

        <Button type="submit" variant="primary" size="medium">
          Get my quote
        </Button>
      </Box>
    </Box>
  );
}
