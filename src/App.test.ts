import App from "@/App.svelte";
import { render } from "@testing-library/svelte";

test("renders learn svelte link", () => {
  const { getByText } = render(App);
  const linkElement: HTMLElement = getByText(/learn svelte/i);
  expect(linkElement).toBeInTheDocument();
});
