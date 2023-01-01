
import {Button , Checkbox , Form , Input , Row , Col , Radio , Select } from 'antd'

const {Option} = Select;

export function App() {
    return <Form name='basic'  wrapperCol={{span:24}}>
        <Row gutter={16}>
            <Col span={8} offset={2} >
                <Form.Item label="Email"  name="email" rules={[{required: true , message: "Please input your email!"}]}>
                    <Input />
                </Form.Item>
            </Col>

            <Col span={8} offset={2}>
                <Form.Item label="Username"  name="username" rules={[{required: true , message: "Please input your username!"}]}>
                    <Input />
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col span={5} offset={2}>
                <Form.Item label="Gender" name="Radiogroup" rules={[{required: true , message: "Please Choose a gender!"}]}>
                    <Radio.Group>
                        <Radio value="female" >Female</Radio>
                        <Radio value="male" >Male</Radio>
                    </Radio.Group>
                </Form.Item>
            </Col>
            <Col span={6} offset={7}>
                <Form.Item name="select" label="Select" rules={[{required: true , message: "Please Choose an Option!"}]}>
                    <Select placeholder="Select an option" allowClear>
                        <Option value="Benz" >Benz</Option>
                        <Option value="Porsche" >Porsche</Option>
                        <Option value="BMW" >BMW</Option>
                    </Select>
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={22} offset={2}>
                <Form.Item name="Checkbox" rules={[{required: true , message: "You must accept to proceed"}]} > 
                    <Checkbox>Agree with page <a href='#' >Privacy Policy</a></Checkbox>
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={8} offset={2}>
                <textarea name="textarea" id="textarea" cols="30" rows="5"></textarea>
            </Col>
        </Row>
        <Row>
            <Col offset={11}>
                <Form.Item>
                    <Button type='primary' htmlType='submit' >Submit</Button>
                </Form.Item>
            </Col>
        </Row>
    </Form>
}   