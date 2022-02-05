import { SkeletalParseDigest } from "./types/hl7Message";
import { depthSeparators } from "./depthSeparators";

const skeletalParse = (
  hl7Message: string,
  depth: number
): SkeletalParseDigest =>
  parseMessage(hl7Message, depthSeparators.slice(0, depth));

const parseMessage = (
  segment: string,
  depthSeparators: RegExp[]
): SkeletalParseDigest => {
  if (!depthSeparators.length) return segment;
  return segment
    .split(depthSeparators[0])
    .map((subSegment) => parseMessage(subSegment, depthSeparators.slice(1)));
};

export default skeletalParse;
