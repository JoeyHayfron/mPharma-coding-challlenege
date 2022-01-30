import DrugsList from "../../DrugsList";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { drugs } from "../../../shared/data";
import Root from "../../../Root";
import { within } from "@testing-library/dom";

describe("Fetching a list products", () => {
  const server = setupServer(
    rest.get(
      "http://www.mocky.io/v2/5c3e15e63500006e003e9795",
      (req, res, ctx) => {
        return res(ctx.json(drugs));
      }
    )
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders a list of seven products", async () => {
    render(
      <Root>
        <DrugsList />
      </Root>
    );

    const products = await screen.findAllByTestId("drugs-list-item");
    await waitFor(() => expect(products.length).toBe(7));
  });

  it("renders correct content list items", async () => {
    render(
      <Root>
        <DrugsList />
      </Root>
    );

    const products = await screen.findAllByTestId("drugs-list-item");
    const firstItemDrugName = within(products[0]).queryByTestId("item-name");
    const firstItemDrugPrice = within(products[0]).queryByTestId("item-price");
    const lastItemDrugName = within(products[6]).queryByTestId("item-name");
    const lastItemDrugPrice = within(products[6]).queryByTestId("item-price");
    await waitFor(() =>
      expect(firstItemDrugName).toHaveTextContent("Exforge 10mg")
    );
    await waitFor(() =>
      expect(firstItemDrugPrice).toHaveTextContent("GHS 10.99")
    );
    await waitFor(() =>
      expect(lastItemDrugName).toHaveTextContent("Paracetamol 20MG")
    );
    await waitFor(() =>
      expect(lastItemDrugPrice).toHaveTextContent("GHS 13.20")
    );
  });
});
