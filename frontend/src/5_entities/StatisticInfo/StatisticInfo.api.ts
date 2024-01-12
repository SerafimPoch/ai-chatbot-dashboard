import redaxios from "redaxios";
import { z } from "zod";
import { useQuery } from "react-query";

const StatisticItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  value: z.number(),
  percent: z.number(),
});

const UseStatisticsSchema = z.array(StatisticItemSchema);

export type IUseStatistics = z.infer<typeof UseStatisticsSchema>;

export const useStatistics = () => {
  return useQuery<IUseStatistics>("statistic", async () => {
    const { data } = await redaxios.get(`http://localhost:3001/statistic`);

    if (!UseStatisticsSchema.safeParse(data).success) {
      console.log("Invalid useStatistics api response structure");
      return [] as IUseStatistics;
    }

    return data;
  });
};
