import { Tree, flattenTree } from "./ex-2";

describe("exercise 2", () => {
  it("should flatten tree and sort alphabetically by name", () => {
    const input: Tree = [
      {
        name: "robert",
        children: [
          {
            name: "james",
            children: [
              { name: "thomas" },
              { name: "bob", children: [{ name: "norah" }] },
            ],
          },
          {
            name: "andrew",
            children: [
              {
                name: "cris",
                children: [{ name: "jane" }],
              },
              {
                name: "alice",
                children: [{ name: "jack" }, { name: "bryce" }],
              },
            ],
          },
          { name: "jackson" },
        ],
      },
      { name: "janis" },
    ];

    const result = flattenTree(input);
    const expectedOutput = [
      { name: "alice", parent: "andrew" },
      { name: "andrew", parent: "robert" },
      { name: "bob", parent: "james" },
      { name: "bryce", parent: "alice" },
      { name: "cris", parent: "andrew" },
      { name: "jack", parent: "alice" },
      { name: "jackson", parent: "robert" },
      { name: "james", parent: "robert" },
      { name: "jane", parent: "cris" },
      { name: "janis" },
      { name: "norah", parent: "bob" },
      { name: "robert" },
      { name: "thomas", parent: "james" },
    ];
    expect(result).toEqual(expectedOutput);
  });
});
