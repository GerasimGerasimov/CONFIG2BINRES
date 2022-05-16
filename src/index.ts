import fs = require ("fs");
import { TFlashSegmen } from "./hextypes";
import { getResourses } from "./resourses";
import { Settings } from "./utils/config";

console.log('Start CONFIG2RESBIN');

const Areas: Array<TFlashSegmen> = [...getResourses(Settings.resources || undefined)];
//write the Array binary data to res.bin file
fs.writeFileSync("./res.bin",new Uint8Array(Areas[0].code));

console.log('Complete CONFIG2RESBIN');