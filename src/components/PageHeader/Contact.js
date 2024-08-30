import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Label,
    FormGroup,
    Form,
    Input,
    FormText,
    NavItem,
    CardTitle,
    NavLink,
    Nav,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCarousel,
  } from "reactstrap";



const ContactApi = () => {

    return (

        <>
            <section className="section">
                <div className="squares square2" />
                <div className="squares square3" />

                <div className="squares square7" />

                <Container>

                    <div className="mx-auto max-w-2xl py-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">

                        <h3 className=" sm:text-5xl font-semibold text-black text-center my-3" style={{ fontSize: 40, fontWeight: "bold", }}>Contact </h3>

                    </div>
                    <Row>
                        <Col md="6">
                            <Card className="card-plain">
                                <CardHeader>

                                    <h1 className="profile-title text-left"> </h1>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Your Name</label>
                                                    <Input defaultValue="Betty" type="text" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label classname="text-white">Email address</label>
                                                    <Input placeholder="Betty@email.com" type="email" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Phone</label>
                                                    <Input defaultValue="0712345678" type="text" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>Message</label>
                                                    <Input placeholder="Hello there!" type="text" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            className="btn-round float-right"
                                            color="primary"
                                            data-placement="right"
                                            id="tooltip341148792"
                                            type="button"
                                        >
                                            Send text
                                        </Button>
                                        <UncontrolledTooltip
                                            delay={0}
                                            placement="right"
                                            target="tooltip341148792"
                                        >
                                            Can't wait for your message
                                        </UncontrolledTooltip>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto" md="4">

                            <div className=" info-horizontal "  >
                                <div className="icon icon-primary  ">
                                    <i className="tim-icons icon-square-pin" />
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Find us at the office</h4>
                                    <p>
                                        Chi-Send Offices  <br />
                                        Mon - Sat, 8:00-22:00 <br />
                                        Nairolbi,  Kenya <br />
                                    </p>
                                </div>
                            </div>

                            <div className="info info-horizontal ">
                                <div className="icon icon-primary">
                                    <i className="tim-icons icon-mobile" />
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Connect with us </h4>
                                    <p>
                                        Chi-send contact <br />
                                        +254794410921 <br />
                                        trentbrian007@gmail.com
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    )


}


export default ContactApi