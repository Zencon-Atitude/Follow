import process from "process";
import fs from "fs";
import path from 'path';

export default function getBuyAssets() {
	const fileFullPath = path.join(process.cwd(), "src/lib/fakedata.json");
	const fileContent = fs.readFileSync(fileFullPath, "utf-8");
	return (JSON.parse(fileContent));
}

export function getSellAssets() {
	const fileFullPath = path.join(process.cwd(), "src/lib/fakedata.json");
	const fileContent = fs.readFileSync(fileFullPath, "utf-8");
	return (JSON.parse(fileContent));
}
