import React, { Component } from 'react'
import './../assets/sass/main.scss';
export default class footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <h3 className="footer__title">Cybersoft - Trung tâm đào tạo lập trình</h3>
                        <p className="footer__info">Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                        <p className="footer__info">Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                        <p className="footer__info">đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                        <p className="footer__info">Số Điện Thoại (Hotline): 1900 545 436</p>
                        <p className="footer__info">Email: support@tix.vn</p>
                    </div>
                </footer>
            </div>
        )
    }
}
