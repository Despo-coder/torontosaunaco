import connectDB from "@/config/db";
import Heaters from "@/models/Heaters";

// GET all heaters
export const GET = async () => {
  try {
    await connectDB();
    const heaters = await Heaters.find({});
    return new Response(JSON.stringify(heaters), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch heaters", { status: 500 });
  }
};

// POST new heater
export const POST = async (request) => {
  try {
    const body = await request.json();
    await connectDB();

    const heater = await Heaters.create(body);
    return new Response(JSON.stringify(heater), { status: 201 });
  } catch (error) {
    console.error("Error creating heater:", error);
    return new Response(
      error.name === "ValidationError"
        ? `Validation error: ${Object.values(error.errors)
            .map((err) => err.message)
            .join(", ")}`
        : error.message || "Failed to create heater",
      { status: 500 }
    );
  }
};

// DELETE all heaters
export const DELETE = async () => {
  try {
    await connectDB();
    await Heaters.deleteMany({});
    return new Response("All heaters deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete heaters", { status: 500 });
  }
};
