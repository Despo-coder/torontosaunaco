import connectDB from "@/config/db";
import Heater from "@/models/Heaters"; // or however your model is defined
import { NextResponse } from "next/server";

// GET API Handler - /api/heaters/:id
export const GET = async (request, context) => {
  const { params } = await context;
  const interimId = await params;
  const id = interimId.id;

  try {
    await connectDB();
    const heater = await Heater.findById(id);

    if (!heater) {
      return NextResponse.json({ error: "Heater not found" }, { status: 404 });
    }

    return NextResponse.json(heater);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch heater" },
      { status: 500 }
    );
  }
};
