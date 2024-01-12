import { z } from "zod";
import redaxios from "redaxios";
import { useQuery } from "react-query";

const InfoItemSchema = z.object({
  name: z.string(),
  color: z.string(),
  percent: z.number(),
  id: z.string(),
});

const AudienceItemSchema = z.object({
  id: z.number(),
  percent: z.number(),
  info: z.array(InfoItemSchema),
});

const UseAudienceSchema = z.array(AudienceItemSchema);

type IUseAudience = z.infer<typeof UseAudienceSchema>;

export const useAudience = () => {
  return useQuery<IUseAudience>("audience", async () => {
    const { data } = await redaxios.get("http://localhost:3001/audience");

    if (!UseAudienceSchema.safeParse(data).success) {
      console.log("Invalid useAudience api response structure");
      return [] as IUseAudience;
    }

    return data;
  });
};
