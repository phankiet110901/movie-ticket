import axios from "axios";
import { Config } from "./../common/setting/Config";

export class UserServices{
    Login = (username, password) => {
        return axios({
            url: `${Config.domain}/QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data: {
                taikhoan: username,
                matkhau: password
            }
        });
    }
}


export default new UserServices();