import axios from 'axios';
import {Config} from './../common/setting/Config';

export class CinemaServices{

    LayDanhSachHeThongRap = () => {
        return axios({
            url: `${Config.domain}/QuanLyRap/LayThongTinHeThongRap`,
            method: "GET"
        });
    }

     async  LayDanhSachCumheThongRap(maHeThongRap){
        return axios({
            url: `${Config.domain}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
            method: "GET"
        });
    }

}

export default new CinemaServices();