import React, { Component } from 'react';
import { Select, Button } from 'antd';
import './../assets/sass/main.scss';


// nhan du lieu thay doi cua select 
function handleChange(value) {
    console.log(`selected ${value}`);
}

const { Option } = Select;
export default class booking extends Component {
    render() {
        return (
            <div className="booking container">
                <div className="booking__content">
                    <Select defaultValue="Phim" style={{ width: 200 }} onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Select defaultValue="Rạp" style={{ width: 200 }} onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Select defaultValue="Ngày xem" style={{ width: 200 }} onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Select defaultValue="Suất chiếu" style={{ width: 200 }} onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Button type="primary" style={{ width: 200 }}>Mua vé ngay</Button>
                </div>
            </div>
        )
    }
}
