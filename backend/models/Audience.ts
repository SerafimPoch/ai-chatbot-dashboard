import mongoose, { Schema } from "mongoose";

export interface IAudience {
  id: number;
  percent: number;
  info: [
    {
      name: string;
      color: string;
      percent: number;
    },
    {
      name: string;
      color: string;
      percent: number;
    }
  ];
}

const AudienceSchema: Schema = new Schema<IAudience>({
  id: { type: Number, required: true, unique: true },
  percent: { type: Number, required: true, unique: true },
  info: {
    name: { type: String, required: true },
    color: { type: String, required: true },
    percent: { type: Number, required: true, unique: true },
  },
});

const Audience = mongoose.model<IAudience>("Audience", AudienceSchema);

export default Audience;
