import { Environment, Network, RecordSource, Store } from "relay-runtime";
async function fetchGraphQL(
  params: { text?: string | null },
  variables: Record<string, unknown>
) {
  const resp = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });
  return await resp.json();
}


export function makeEnvironment() {
  return new Environment({
    network: Network.create(fetchGraphQL),
    store: new Store(new RecordSource()),
  });
}
