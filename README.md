# `react-timer-input`

A versatile timer input component for React. This component allows users to input time in various formats (years, days, hours, minutes, seconds) and parses it into a structured format.

## [Live Demo](https://liambickett.github.io/react-timer-input/)

## Installation

```bash
WORK IN PROGRESS / npm install --save react-timer-input


## Props

| Prop Name      | Description                                                | Type                               | Default Value |
|----------------|------------------------------------------------------------|------------------------------------|---------------|
| `style`        | CSS properties for styling the component.                  | `React.CSSProperties`               | -             |
| `maxMinutes`   | Maximum minutes allowed.                                   | `number`                           | -             |
| `onTimeChange` | Callback function executed when time changes.              | `(minutes: number) => void`        | -             |
| `setSeconds`   | Set the seconds value.                                     | `(seconds: number) => void`        | -             |
| `setMinutes`   | Set the minutes value.                                     | `(minutes: number) => void`        | -             |
| `setHours`     | Set the hours value.                                       | `(hours: number) => void`          | -             |
| `setDays`      | Set the days value.                                        | `(days: number) => void`           | -             |
| `setYears`     | Set the years value.                                       | `(years: number) => void`          | -             |
| `className`    | Add custom classes to the component.                       | `string`                           | -             |
| `seconds`      | Determines if seconds are visible.                         | `boolean`                          | `false`       |

```
