import { TextContainer, Text, Box } from "@autoguru/overdrive";

export default function BrandMessage() {
  return (
    <Box marginBottom="8" textAlign="left">
    <TextContainer
      heading={<h1 >Car servicing made easy</h1>}
    >
      <Text as="p" colour="muted">
        Get instant quotes and book
      </Text>
    </TextContainer>
    </Box>
  );
}
