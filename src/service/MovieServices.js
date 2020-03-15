import axios from 'axios';
import { Config } from '../common/setting/Config';

export class MovieService{
    layDanhSachPhim = () => {
        return axios({
            url: `${Config.domain}/LayDanhSachPhim?maNhom=${Config.groupID}`,
            method: 'GET'
        })
    }
}

export default new MovieService(); 