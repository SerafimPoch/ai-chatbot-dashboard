import mongoose, { Schema, Document } from "mongoose";

interface IChart extends Document {
  id: number;
  date: string;
  uv: number;
  amt: number;
}

const ChartSchema: Schema = new Schema<IChart>({
  id: { type: Number, required: true },
  date: { type: String, required: true, unique: true },
  uv: { type: Number, required: true },
  amt: { type: Number, required: true },
});

const Chart = mongoose.model<IChart>("Chart", ChartSchema);

export default Chart;
