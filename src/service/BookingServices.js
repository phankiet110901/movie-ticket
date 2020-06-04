import axios from "axios";
import { Config } from "./../common/setting/Config";

export class BookingServices {
    LayDanhSachPhongVe = (maLichChieu) => {
        return axios({
            url: `${Config.domain}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method: "GET"
        });
    }

    DatVe = (ThongTinDatVe) => {
        return axios({
            url: `${Config.domain}/QuanLyDatVe/DatVe`,
            method: "POST",
            data: ThongTinDatVe,
            headers: {
                Authorization: "Bearer  " + sessionStorage.getItem(Config.userLogin)
            }
        });
    }
}

export default new BookingServices();