import { CloudUpload, DoneAll, East, Email, Person } from '@mui/icons-material'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './dashboard.css'




function Dashboard() {
 


  return (
    <>
      <div className='card1'>
        <h4 className='ms-5 p-5'>Choose a plan that's just right for you  !</h4>


        {/* monthly-anuually */}




        

        <Row className='ms-5 p-3'>



          {/* card1 */}

          <Col lg={4}>
            <Card style={{ width: '22rem', height: '27rem',  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '1rem' }}>
              <Card.Title style={{ marginLeft: '25px', marginTop: '10px' }}>Basic</Card.Title>
              <p style={{ marginLeft: '25px' }}>$89.99/mon</p>
              <h6 style={{ marginLeft: '25px' }}>$9.99/mo</h6>
              <span style={{ marginLeft: '25px' }} > <Button variant="warning">Get Started <East /> </Button></span>
              <hr />
              <Card.Body>

                <Card.Text>
                  <p>What you'll get:</p>
                  <p><Person /><span class='p-3'>Upto 25 Users</span></p>
                  <p><CloudUpload /><span class='p-3'>Upto 25gb Storage</span></p>
                  <p><Email /><span class='p-3'>Email Support</span></p>
                  <p style={{ textAlign: 'center' }}><u>EXPLORE FEATURES</u></p>
                </Card.Text>

              </Card.Body>
            </Card>
            {/* card2 */}
          </Col>

          <Col lg={4}>
            <Card style={{ width: '22rem', height: '27rem',  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '1rem' }}>
              <Card.Title style={{ marginLeft: '25px', marginTop: '10px' }}>Standard</Card.Title>
              <p style={{ marginLeft: '25px' }}>$189.99/mon</p>
              <h6 style={{ marginLeft: '25px' }}>$99.99/mo</h6>
              <span style={{ marginLeft: '25px' }} > <Button style={{ color: 'black' }} variant="danger">Get Started <East /> </Button></span>
              <hr />
              <Card.Body>

                <Card.Text>
                  <p>What you'll get:</p>
                  <p><Person /><span class='p-3'>Upto 50 Users</span></p>
                  <p><CloudUpload /><span class='p-3'>Upto 60gb Storage</span></p>
                  <p><Email /><span class='p-3'>Email+Chat Support</span></p>
                  <p style={{ textAlign: 'center' }}><u>EXPLORE FEATURES</u></p>
                </Card.Text>

              </Card.Body>
            </Card>

          </Col>

          {/* card3 */}


          <Col lg={4}>
            <Card style={{ width: '22rem', height: '27rem',  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '1rem' }}>
              <Card.Title style={{ marginLeft: '25px', marginTop: '10px' }}>Premium</Card.Title>
              <p style={{ marginLeft: '25px' }}>$389.99/mon</p>
              <h6 style={{ marginLeft: '25px' }}>$199.99/mo</h6>
              <span style={{ marginLeft: '25px' }} > <Button style={{ backgroundColor: 'violet', borderColor: 'violet', color: 'black' }}>Get Started <East /> </Button></span>
              <hr />
              <Card.Body>

                <Card.Text>
                  <p>What you'll get:</p>
                  <p><Person /><span class='p-3'>Upto 75 Users</span></p>
                  <p><CloudUpload /><span class='p-3'>Upto 100gb Storage</span></p>
                  <p><Email /><span class='p-3'>Email+Chat+Whatsapp Support</span></p>
                  <p style={{ textAlign: 'center' }}><u>EXPLORE FEATURES</u></p>
                </Card.Text>

              </Card.Body>
            </Card>

          </Col>



        </Row>








      </div>

      {/* 2 card set */}

      <div className='row ms-5 p-3 '>





        <div className='col-6 '  >

          <Card style={{ width: '35rem', height: '22.5rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
            <Card.Body>

              <div className='row p-4  '>
                <div className='col-6 ' >

                  <h5 style={{ backgroundColor: 'rgba(137, 247, 104, 0.705)', borderRadius: '5px 5px 5px 5px', width: '95px', fontSize: '15px', alignItems: 'center' }}>Free Forever</h5>



                  <h2>Free Starter</h2>

                  <p>The quickest and easiest wa to try protocols with basic functionalities</p>

                  <button style={{ backgroundColor: 'rgba(137, 247, 104, 0.705)' }} type="button" class="btn  btn-sm">Get Started <East/> </button>

                </div>

                <div className='col-6'>

                  <p>What you'll get:</p>

                  <p> <Person/> Upto 8 Users</p>

                  <p> <CloudUpload/> Upto 3GB Storage  </p>

                  <p> <Email/>Email Support </p>

                  <p><DoneAll/> Basics of documents,TaskFlow,Voting,Accounting,Banking,Notes,Investor,Director, and team mangement include </p>

                </div>
              </div>

            </Card.Body>
          </Card>

        </div>



        <div className='col-6  '  >

          <Card style={{ width: '35rem', height: '22.5rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
            <Card.Body>

              <div className='row p-4 '>
                <div className='col-6' >

                  <h5 style={{ backgroundColor: 'rgba(119, 183, 255)', borderRadius: '5px 5px 5px 5px', width: '95px', fontSize: '15px', alignItems: 'center' }}>Lets Connect</h5>

                  <h2>Enterprice Plan</h2>

                  <p>Effortlessly customise and fine-tune services as your needs shift,ensuring the perfect tools for success</p>

                  <button style={{ backgroundColor: 'rgba(119, 183, 255)' }} type="button" class="btn  btn-sm">Contact Us <East/></button>

                </div>

                <div className='col-6'>

                  <p>What You'll Get:</p>

                  <p> <Person/> More than 75 Users</p>

                  <p><DoneAll/> Customisation of all other Features</p>
                </div>
              </div>

            </Card.Body>
          </Card>

        </div>



      </div>




    </>
  )
}

export default Dashboard