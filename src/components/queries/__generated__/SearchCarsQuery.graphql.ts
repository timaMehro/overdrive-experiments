/**
 * @generated SignedSource<<8590ecf8692e7fd856fe8817daa63679>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CarFilter = {
  location?: string | null | undefined;
  model?: string | null | undefined;
  type?: string | null | undefined;
};
export type SearchCarsQuery$variables = {
  filter?: CarFilter | null | undefined;
};
export type SearchCarsQuery$data = {
  readonly searchCars: ReadonlyArray<{
    readonly id: string;
    readonly location: string;
    readonly model: string;
    readonly type: string;
  }>;
};
export type SearchCarsQuery = {
  response: SearchCarsQuery$data;
  variables: SearchCarsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      }
    ],
    "concreteType": "Car",
    "kind": "LinkedField",
    "name": "searchCars",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "model",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "location",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchCarsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchCarsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7674a72705757720e6e5dc7328e3343b",
    "id": null,
    "metadata": {},
    "name": "SearchCarsQuery",
    "operationKind": "query",
    "text": "query SearchCarsQuery(\n  $filter: CarFilter\n) {\n  searchCars(filter: $filter) {\n    id\n    type\n    model\n    location\n  }\n}\n"
  }
};
})();

(node as any).hash = "7a1648994c2e8abae3edbde3356b1900";

export default node;
