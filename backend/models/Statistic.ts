import mongoose, { Schema, Document } from "mongoose";

interface IStatistic extends Document {
  id: number;
  name: string;
  value: number;
  percent: number;
}

const StatisticSchema: Schema = new Schema<IStatistic>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  value: { type: Number, required: true },
  percent: { type: Number, required: true },
});

const Statistic = mongoose.model<IStatistic>("Statistic", StatisticSchema);

export default Statistic;
