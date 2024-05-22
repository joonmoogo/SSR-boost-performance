import { atom } from "recoil";
/**
 * @description 
 * 1) write창에서 어느 페이지인지 알아야 될 때 사용함
 */
export const writeState = atom({
    key: 'writeState',
    default: ''
})