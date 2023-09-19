import fs from 'fs';
import process from 'process';
import path from 'path';

export function getNewsData(): any[] {
    const   dataPath: string = '/public/data/news.json';
    const   FulldataPath = path.join(process.cwd(), dataPath);

    const   dataContent = fs.readFileSync(FulldataPath, 'utf8');
    const   dataObj = JSON.parse(dataContent);
    return dataObj.news;
}

