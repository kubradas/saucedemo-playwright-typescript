/**
 * SauceDemo test users — typed test data.
 *
 * Every user shares the same password: 'secret_sauce'.
 * Usernames are one of four fixed values, enforced at the type level with a
 * literal union so a typo fails at compile time instead of at runtime.
 */

export type Username =
  | "standard_user"
  | "locked_out_user"
  | "problem_user"
  | "performance_glitch_user";

export type User = {
  username: Username;
  password: string;
};

/**
 * `satisfies` validates each entry against User without widening the object's
 * own narrow type, and `as const` freezes the values as readonly literals.
 */
export const users = {
  standard: { username: "standard_user", password: "secret_sauce" },
  lockedOut: { username: "locked_out_user", password: "secret_sauce" },
  problem: { username: "problem_user", password: "secret_sauce" },
  performanceGlitch: {
    username: "performance_glitch_user",
    password: "secret_sauce",
  },
} as const satisfies Record<string, User>;
