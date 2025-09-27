import { Button, FlexInline, Text } from "@autoguru/overdrive";

export default function AutoGuruNavbar() {
  return (
    <nav>
      <FlexInline data-custom-attr="flex-inline-story" align="end" gap="6">
        <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
          <li>
            <Text as="label" size="3">
              Help
            </Text>
          </li>
          <li>
            <Text as="label" size="3">
              Contact Us
            </Text>
          </li>
        </ul>

        <Button size="small" variant="secondary">
          Home
        </Button>
        <Button size="small" variant="primary">
          About Us
        </Button>
      </FlexInline>
    </nav>
  );
}
