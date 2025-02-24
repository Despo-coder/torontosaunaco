import fs from "fs";
import path from "path";

export async function GET() {
    try {
        const jsonDir = path.join(process.cwd(), "public", "json");
        const files = fs.readdirSync(jsonDir);
        
        // Read all JSON files and parse them
        const blogs = files
            .filter(file => file.endsWith(".json"))
            .map(file => {
                const filePath = path.join(jsonDir, file);
                const jsonData = fs.readFileSync(filePath, "utf-8");
                return JSON.parse(jsonData);
            });

        return Response.json(blogs, { status: 200 });
    } catch (error) {
        return Response.json({ error: "Failed to load blogs" }, { status: 500 });
    }
}
