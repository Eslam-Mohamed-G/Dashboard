import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";

import React from "react";
import { world_countries } from "../../11-geography/world_countries";
import { MapData } from "../../11-geography/MapData";

const GeoMap = () => {
  const theme = useTheme();
  return (
    <ResponsiveChoropleth
      data={MapData}
      features={world_countries.features}
      margin={{ top: -35, right: 0, bottom: 0, left: 0 }}
      colors="blues"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionType="naturalEarth1"
      projectionScale={115}
      projectionTranslation={[0.5, 0.65]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={false}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      theme={{
        text: {
          fontSize: 11,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        axis: {
          domain: {
            line: {
              stroke: "#777777",
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 12,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          ticks: {
            line: {
              stroke: "#777777",
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        grid: {
          line: {
            stroke: "#dddddd",
            strokeWidth: 1,
          },
        },
        legends: {
          title: {
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          ticks: {
            line: {},
            text: {
              fontSize: 10,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        annotations: {
          text: {
            fontSize: 13,
            fill: theme.palette.text.primary,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          link: {
            stroke: "#000000",
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          outline: {
            stroke: "#000000",
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          symbol: {
            fill: "#000000",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
        },
        tooltip: {
          wrapper: {},
          container: {
            background: theme.palette.background.default,
            color: theme.palette.text.secondary,
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
    />
  );
};

export default GeoMap;
