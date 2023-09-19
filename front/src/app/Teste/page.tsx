"use client";
import Layout from "@/components/layout/layout";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import ShapeFile from "@/components/shapefile/ShapeFile";

const { BaseLayer, Overlay } = LayersControl;

export default function Teste() {
  const [state, setState] = useState({ geodata: null, increment: 0 });
  const [shapeLayer, setShapeLayer] = useState<React.ReactElement>(<></>);
  const props: object = {
    propTopBar: {
      mode: 3,
      title: undefined,
    },
    propMain: {
      className: styles.mainContainer,
      mode: 1,
      icon: false,
    },
    propMenu: {
      mode: 1,
      className: "",
    },
  };

  const handleFile = async () => {
    var reader = new FileReader();
    const file: Promise<Blob> = (await fetch("./vegs.zip")).blob()
    reader.readAsArrayBuffer(await file);
    reader.onload = function (buffer: any) {
      setState({ geodata: buffer.target.result, increment: state.increment});
    }
  };

  return (
    <Layout {...props}>
      <div style={{width: "100%", height: "100%"}}>
        <MapContainer
          center={[42.09618442380296, -71.5045166015625]}
          zoom={2}
          style={{
            width: "100%",
            height: "100%",
          }}
          zoomControl={true}
        >
          <LayersControl position="topright">
            <BaseLayer checked name="Origina-Token">
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
            </BaseLayer>
          </LayersControl>
        </MapContainer>
      </div>
    </Layout>
  );
}
