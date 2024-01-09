import mongoose, { Schema, Document } from "mongoose";

interface IEarnings extends Document {
  id: number;
  version: number;
  pledge: number;
  lifetime: {
    price: number;
    percent: number;
  };
  storage: {
    used: number;
    color: string;
  };
  space: {
    used: number;
    all: number;
  };
}

const EarningsSchema: Schema = new Schema<IEarnings>({
  id: { type: Number, required: true, unique: true },
  version: { type: Number, required: true, unique: true },
  pledge: { type: Number, required: true, unique: true },
  lifetime: {
    price: { type: Number, required: true, unique: true },
    percent: { type: Number, required: true, unique: true },
  },
  storage: {
    used: { type: Number, required: true, unique: true },
    color: { type: Number, required: true, unique: true },
  },
  space: {
    used: { type: Number, required: true, unique: true },
    all: { type: Number, required: true, unique: true },
  },
});

const Earnings = mongoose.model<IEarnings>("Earnings", EarningsSchema);

export default Earnings;
