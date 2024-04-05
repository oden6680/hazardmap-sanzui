import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Map = () => {
  const japanUrl = "path/to/japan-topojson.json";
  const specialAreas = ["東京都", "大阪府", "京都府"]; // さんずいを含む地名の都道府県リスト

  return (
    <ComposableMap projection="geoMercator" width={800} height={600}>
      <Geographies geography={japanUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isSpecialArea = specialAreas.includes(geo.properties.name);
            const fillColor = isSpecialArea ? "#ff0000" : "#d6d6d6";
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fillColor}
                stroke="#ffffff"
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
