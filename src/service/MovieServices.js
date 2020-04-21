import axios from 'axios';
import { Config } from '../common/setting/Config';

export class MovieService{
    LayDanhSachPhim = () => {
        return axios({
            url: `${Config.domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${Config.groupID}`,
            method: 'GET'
        })
    }

    LayThongTinChiTietPhim = (idPhim) => {
        return axios({
            url: `${Config.domain}/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`,
            method: 'GET'
        })
    }

}

export default new MovieService(); 