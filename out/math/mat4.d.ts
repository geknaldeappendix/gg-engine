import { Quat } from "./quat";
import { Vec3 } from "./vec3";
export type Mat4 = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
export declare function mat4_identity(): Mat4;
export declare function mat4_translate_rotate_scale(out: Mat4, t: Vec3, r: Quat, s: Vec3): Mat4;
export declare function mat4_create_translation([x, y, z]: Vec3): Mat4;
export declare function mat4_translate(out: Mat4, mat: Mat4, vec3: Vec3): Mat4;
export declare function mat4_create_rotation([x, y, z, w]: Quat): Mat4;
export declare function mat4_rotate(out: Mat4, mat: Mat4, quaternion: Quat): Mat4;
export declare function mat4_scale_by(mat: Mat4, [x, y, z]: Vec3): Mat4;
