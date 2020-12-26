import React from "react";
import { Dimensions } from "react-native";
import { Rect, Circle, Path } from "react-content-loader/native";

const { width } = Dimensions.get("window");

const SCALE = width / 360;

export const ScaleRect = ({ x, y, rx, ry, width, height }) => (
  <Rect
    x={x * SCALE}
    y={y * SCALE}
    rx={rx * SCALE}
    ry={ry * SCALE}
    width={width * SCALE}
    height={height * SCALE}
  />
);

export const ScaleCircle = ({ cx, cy, r }) => (
  <Circle cx={cx * SCALE} cy={cy * SCALE} r={r * SCALE} />
);
