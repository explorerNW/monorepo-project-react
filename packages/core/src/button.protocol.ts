// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buttonTypes = ['primary', 'secondary', 'default'] as const;
type ButtonTypes = (typeof buttonTypes)[number];
export type ButtonProtocol = {
  type: ButtonTypes;
};
