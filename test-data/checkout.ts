export type CheckoutInfo = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export const defaultCheckoutInfo: CheckoutInfo = {
  firstName: "John",
  lastName: "Doe",
  postalCode: "34000",
};

export function createCheckoutInfo(
  overrides: Partial<CheckoutInfo> = {},
): CheckoutInfo {
  return { ...defaultCheckoutInfo, ...overrides };
}
