import fs from 'fs';
import process from 'process';
import path from 'path';

export function getNewsAssetsData(): any[] {
    const   dataPath: string = '/public/data/newAssets.json';
    const   FulldataPath = path.join(process.cwd(), dataPath);

    const   dataContent = fs.readFileSync(FulldataPath, 'utf8');
    const   dataObj = JSON.parse(dataContent);
    return dataObj.newAssets;
}