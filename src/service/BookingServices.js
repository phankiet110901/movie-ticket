import axios from "axios";
import {Config} from "./../common/setting/Config";

export class BookingServices{
    LayDanhSachPhongVe = (maLichChieu) => {
        return axios({
            url: `${Config.domain}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method: "GET"
        });
    }
}

export default new BookingServices();