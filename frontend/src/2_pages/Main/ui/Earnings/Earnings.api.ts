import { z } from "zod";
import redaxios from "redaxios";
import { useQuery } from "react-query";

const LifetimeSchema = z.object({
  price: z.number(),
  percent: z.number(),
});

const StorageSchema = z.object({
  used: z.number(),
  color: z.string(),
});

const SpaceSchema = z.object({
  used: z.number(),
  all: z.number(),
});

const EarningsItemSchema = z.object({
  lifetime: LifetimeSchema,
  storage: StorageSchema,
  space: SpaceSchema,
  id: z.number(),
  version: z.number(),
  pledge: z.number(),
});

const UseEarningsSchema = z.array(EarningsItemSchema);

type IUseEarnings = z.infer<typeof UseEarningsSchema>;

export const useEarnings = () => {
  return useQuery<IUseEarnings>("earnings", async () => {
    const { data } = await redaxios.get("http://localhost:3001/earnings");

    if (!UseEarningsSchema.safeParse(data).success) {
      console.log("Invalid useEarnings api response structure");
      return [] as IUseEarnings;
    }

    return data;
  });
};
