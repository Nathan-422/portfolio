/** @type {import('tailwindcss').Config} */

export const content = ['./src/**/*.{html,tsx}']
export const theme = {
  extend: {
    gridTemplateColumns: {
      wrapper:
        '[full-start] minmax(var(--wrapper-padding-inline), 1fr) [main-start] minmax(0, var(--wrapper-max-width)) [main-end] minmax(var(--wrapper-padding-inline), 1fr) [full-end]',
      splitwrapper:
        '[full-start] minmax(var(--wrapper-padding-inline), 1fr) [main-left] minmax(0, calc(var(--wrapper-max-width) / 2)) [middle] minmax(0, calc(var(--wrapper-max-width) / 2)) [main-end] minmax(var(--wrapper-padding-inline), 1fr) [full-end]',
    },
  },
}
export const plugins = []
