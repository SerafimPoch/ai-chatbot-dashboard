import { z } from "zod";
import redaxios from "redaxios";
import { useQuery } from "react-query";

const ChartItemSchema = z.object({
  id: z.number(),
  date: z.string(),
  uv: z.number(),
  amt: z.number(),
});

const UseChartSchema = z.array(ChartItemSchema);

export type IUseChart = z.infer<typeof UseChartSchema>;

export const useChart = () => {
  return useQuery<IUseChart>("chart", async () => {
    const { data } = await redaxios.get("http://localhost:3001/chart");

    if (!UseChartSchema.safeParse(data).success) {
      console.log("Invalid useChart api response structure");
      return [] as IUseChart;
    }

    return data;
  });
};
