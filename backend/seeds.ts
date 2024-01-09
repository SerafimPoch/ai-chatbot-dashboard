import { IAudience } from "./models/Audience";
import { IChart } from "./models/Chart";
import { IStatistic } from "./models/Statistic";

export const STATISTIC_INITIAL_DATA: IStatistic[] = [
  { id: 0, name: "Active user", value: 678, percent: 32 },
  { id: 1, name: "New", value: 256, percent: 48 },
  { id: 2, name: "Cancelled", value: 12, percent: -48 },
];

export const CHART_INITIAL_DATA: IChart[] = [
  {
    id: 0,
    date: "18 Jul",
    uv: 4000,
    amt: 2400,
  },
  {
    id: 1,
    date: "25 Jul",
    uv: 3000,
    amt: 2210,
  },
  {
    id: 2,
    date: "1 Aug",
    uv: 2500,
    amt: 2290,
  },
];

export const AUDIENCE_INITIAL_DATA: IAudience[] = [
  {
    id: 0,
    percent: 68,
    info: [
      {
        name: "New",
        color: "#5D74F1",
        percent: 8,
      },
      {
        name: "Subscribed",
        color: "#8EC9DB",
        percent: 2,
      },
    ],
  },
  {
    id: 1,
    percent: 40,
    info: [
      {
        name: "New",
        percent: 4,
        color: "#5D74F1",
      },
      {
        name: "Subscribed",
        color: "#8EC9DB",
        percent: 1,
      },
    ],
  },
  {
    id: 2,
    percent: 75,
    info: [
      {
        name: "New",
        color: "#5D74F1",
        percent: 16,
      },
      {
        name: "Subscribed",
        color: "#8EC9DB",
        percent: 8,
      },
    ],
  },
  {
    id: 3,
    percent: 37,
    info: [
      {
        name: "New",
        color: "#5D74F1",
        percent: 22,
      },
      {
        name: "Subscribed",
        color: "#8EC9DB",
        percent: 14,
      },
    ],
  },
];
