import React, { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import shp from "shpjs";

const ShapeFile = ({ data, ...geoJSONProps }: any) => {
  const [geoJSONData, setGeoJSONData] = useState<any>(null);

  useEffect(() => {
    async function geoJsonGenerate() {
      return setGeoJSONData(await shp(data));
    }
    geoJsonGenerate();
  }, [data]);

  return <GeoJSON key={Math.random()} data={geoJSONData} {...geoJSONProps} />;
};

export default ShapeFile;
