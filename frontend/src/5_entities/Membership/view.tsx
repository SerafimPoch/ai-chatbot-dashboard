import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  MembershipContainer,
  MembershipTitle,
  CustomBarComponent,
} from "./styles";
import { useChart } from "./api";

export default function Membership() {
  const { data, isLoading } = useChart();

  return (
    <MembershipContainer>
      {isLoading ? (
        <MembershipTitle>Loading...</MembershipTitle>
      ) : (
        <>
          <MembershipTitle>Membership</MembershipTitle>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={data} margin={{ left: -2 }}>
              <Bar
                dataKey="uv"
                shape={<CustomBarComponent fill="#FFCC6F" />}
                barSize={65}
              />
              <Bar
                dataKey="amt"
                shape={<CustomBarComponent fill="#EA7465" />}
                barSize={65}
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
        </>
      )}
    </MembershipContainer>
  );
}
