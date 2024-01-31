import Video, { VideoCompressorType } from './Video';
import Audio from './Audio';
import Image from './Image';
import { getDetails, uuidv4, generateFilePath, getRealPath, getVideoMetaData } from './utils';
export { Video, Audio, Image, VideoCompressorType, getDetails, uuidv4, generateFilePath, getRealPath, getVideoMetaData, };
declare const _default: {
    Video: VideoCompressorType;
    Audio: import("./utils").AudioType;
    Image: {
        compress(value: string, options?: import("./Image").CompressorOptions | undefined): Promise<string>;
    };
    getDetails: (mediaFullPath: string, extesnion?: "mp3" | "mp4") => Promise<any>;
    uuidv4: () => string;
    generateFilePath: any;
    getRealPath: any;
    getVideoMetaData: any;
};
export default _default;
