import fs = require ("fs");
import { TFlashSegmen } from "./hextypes";
import { getResourses } from "./resourses";
import { Settings } from "./utils/config";

console.log('Start CONFIG2RESBIN');

const Areas: Array<TFlashSegmen> = [...getResourses(Settings.resources || undefined)];
/*TODO to write the Array binary data to res.bin file*/
