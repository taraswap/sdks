import { REACTOR_ADDRESS_MAPPING } from "./constants";

describe("REACTOR_ADDRESS_MAPPING", () => {
  it("matches the existing reactor mapping snapshot", () => {
    expect(REACTOR_ADDRESS_MAPPING).toMatchInlineSnapshot(`
      Object {
        "1": Object {
          "Dutch": "0x6000da47483062A0D734Ba3dc7576Ce6A0B645C4",
          "Dutch_V2": "0x00000011F84B9aa48e5f8aA8B9897600006289Be",
          "Relay": "0x0000000000A4e21E2597DCac987455c48b12edBF",
        },
      }
    `);
  });
});
