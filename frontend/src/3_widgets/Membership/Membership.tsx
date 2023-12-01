import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  MembershipContainer,
  MembershipTitle,
  CustomBarComponent,
} from "./Membership.styles";
import { CHART_DATA } from "./constants";

export default function Membership() {
  return (
    <MembershipContainer>
      <MembershipTitle>Membership</MembershipTitle>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={CHART_DATA} margin={{ left: -20 }}>
          <Bar
            dataKey="uv"
            shape={<CustomBarComponent fill="#FFCC6F" />}
            barSize={72}
          />
          <Bar
            dataKey="amt"
            shape={<CustomBarComponent fill="#EA7465" />}
            barSize={72}
          />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fill: "#A0A5A9" }}
          />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#A0A5A9" }}
            tickFormatter={(value) => (value === 0 ? "" : value)}
          />
        </BarChart>
      </ResponsiveContainer>
    </MembershipContainer>
  );
}
