import { ShallowSegmentArray, DeepSegmentArray, ParseDepth, SubSegmentArray } from "../types/hl7Message"

const getSubSegments = (segment: string): SubSegmentArray => segment.split("|")

// does a skeletal parse - divides the message into segments and subgements
const skeletalParse = (hl7Message: string, depth: ParseDepth = 1): ShallowSegmentArray | DeepSegmentArray => {

    // split by newline
    let segments: ShallowSegmentArray = hl7Message.split(/\r\n|\r|\n/);

    if(depth === 1) return segments;
    // split by subsegment separator '|'
    else if(depth === 2) return segments.map(segment => getSubSegments(segment));
}

export default skeletalParse;