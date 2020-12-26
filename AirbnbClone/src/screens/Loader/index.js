// 제품 상세
import React from "react";
import { Dimensions } from "react-native";
import ContentLoader, { Circle, Path } from "react-content-loader/native";
import { ScaleRect, ScaleCircle } from "./helper";

const { width, height } = Dimensions.get("window");
const SCALE = width / 360;

const Loader = (props) => (
  <ContentLoader
    speed={1}
    width={Math.round(width * SCALE)}
    height={height * SCALE}
    viewBox={`0 0 ${width * SCALE} ${height * SCALE}`}
    backgroundColor="#eeeeee"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <ScaleRect x={18} y={68} rx={5} ry={5} width={90} height={20} />
    <ScaleRect x={135} y={68} rx={5} ry={5} width={90} height={20} />
    <ScaleRect x={252} y={68} rx={5} ry={5} width={90} height={20} />

    <ScaleRect x={18} y={132} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={117} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={122} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={144} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={198} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={183} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={188} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={210} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={264} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={249} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={254} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={276} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={330} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={315} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={320} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={342} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={396} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={381} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={386} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={408} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={462} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={447} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={452} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={474} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={528} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={513} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={518} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={540} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={594} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={579} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={584} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={606} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={660} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={645} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={650} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={672} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={726} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={711} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={716} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={738} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={792} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={777} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={762} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={804} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={858} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={843} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={848} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={870} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={924} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={909} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={914} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={936} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={990} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={975} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={980} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={1002} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={1056} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={1041} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={1046} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={1068} rx={5} ry={5} width={138} height={18} />

    <ScaleRect x={18} y={1122} rx={5} ry={5} width={20} height={20} />
    <ScaleRect x={48} y={1107} rx={5} ry={5} width={90} height={50} />
    <ScaleRect x={148} y={1112} rx={5} ry={5} width={170} height={20} />
    <ScaleRect x={148} y={1134} rx={5} ry={5} width={138} height={18} />
  </ContentLoader>
);

export default Loader;
