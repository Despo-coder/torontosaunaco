import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
    try {
        // Define the path to the JSON file inside the `public` folder
        const filePath = path.join(process.cwd(), "public", "blogs.json");

        // Read the JSON file
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const blogs = JSON.parse(jsonData);

        // Return the JSON response
        return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to load blogs" },
            { status: 500 }
        );
    }
}
