import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ReactPrint from 'react-to-print';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';


const BLog = () => {
    const ref = useRef();
    return (
        <div className='py-5'>
            <Container>
                <Row className='mx-auto text-center'>
                    <Col md='8'  className='mx-auto'>
                        <h2 className='text-dark'>Differences between uncontrolled and controlled components.</h2>
                        <p>
                        <b>Uncontrolled Components:</b> <br />

                                    In an uncontrolled component, the form data is handled by the DOM itself.
                                    The data is managed by the form elements themselves rather than through state in the component.
                                    The initial state of the form is set by the default values of the input elements.
                                    The form elements are accessed using a ref attribute and the data is retrieved using the DOM API.
                                    Controlled Components:

                            <b>controlled component</b> <br />

                            the form data is handled by the component itself.
                            The form elements are controlled by the component's state and changes are handled by onChange event handlers.
                            The initial state of the form is set in the component's constructor or state hook.
                            The data is retrieved from the component's state using the value attribute on each input element.
                        </p>


                        <br /> <br /> <br />


                        <h2 className='text-dark'> How to validate React props using PropTypes ?</h2>
                        <p>
                            PropTypes is a built-in package in React that allows you to validate the type of props that are passed to a component. To use PropTypes, you need to import it from the 'prop-types' package:

                            javascript
                            Copy code
                            import PropTypes from 'prop-types';
                            Then, you can define the PropTypes for a component by adding a propTypes object to the component:

                            In this example, we have defined PropTypes for prop1, prop2, prop3, and prop4. Each PropTypes is defined as a property of the propTypes object, with the name of the prop as the key and the PropTypes validator as the value.

                            The PropTypes validators are available as properties on the PropTypes object. In this example, we have used PropTypes.string, PropTypes.number, PropTypes.arrayOf, and PropTypes.shape to define the PropTypes for the different props.

                            By setting isRequired on a PropTypes, we indicate that the prop is required and will throw a warning in the console if it's not passed to the component.

                            Using PropTypes can help catch errors early in development and make your code more robust.</p>


                                    <br /> <br /><br />

                            <h2 className='text-dark'>Tell us the difference between nodejs and express js. </h2>
                            <p>
                                <b>Node.js </b> <br />
                                is a runtime environment that allows developers to use JavaScript on the server-side. It is built on the V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it well-suited for building scalable network applications.

                            <b>Express.js</b> <br /> on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools that make it easier to build web applications with Node.js. Express.js provides a routing system for defining URL endpoints and handling HTTP requests, middleware for adding functionality to request/response handling, and support for template engines for rendering HTML.</p>

                            <br /><br /> <br />

                            <h2 className='text-dark'>What is a custom hook, and why will you create a custom hook?</h2>

                    <p>
                        A custom hook is a JavaScript function that utilizes built-in React hooks or other custom hooks to provide a reusable piece of functionality in a React application. Custom hooks enable developers to extract logic from components and reuse it in other parts of the application.

                        Custom hooks can be created for a variety of use cases, such as handling forms, managing state, fetching data, and handling animations. They can also help reduce code duplication and improve code readability.

                        To create a custom hook, you can define a function that uses built-in or custom hooks and returns an object with the required state and functions. You can then import and use this custom hook in any component within your application.</p>
                    </Col>
                </Row>
                    <div className="print py-5 mt-5 text-center">
                        <h2 className='text-dark py-2'>Simple Interview question PDf </h2>
                        <div className="ss d-none">
                            <div ref={ref} className="a">
                            <Row className='mx-auto text-center'>
                                    <Col md='8'  className='mx-auto'>
                                        <div className="py-5">
                                            <h2 className='text-dark'>Simple Interview Questions</h2>
                                        </div>
                                        <h2 className='text-dark'>Differences between uncontrolled and controlled components.</h2>
                                        <p>
                                        <b>Uncontrolled Components:</b> <br />

                                                    In an uncontrolled component, the form data is handled by the DOM itself.
                                                    The data is managed by the form elements themselves rather than through state in the component.
                                                    The initial state of the form is set by the default values of the input elements.
                                                    The form elements are accessed using a ref attribute and the data is retrieved using the DOM API.
                                                    Controlled Components:

                                            <b>controlled component</b> <br />

                                            the form data is handled by the component itself.
                                            The form elements are controlled by the component's state and changes are handled by onChange event handlers.
                                            The initial state of the form is set in the component's constructor or state hook.
                                            The data is retrieved from the component's state using the value attribute on each input element.
                                        </p>


                                        <br /> <br /> <br />


                                        <h2 className='text-dark'> How to validate React props using PropTypes ?</h2>
                                        <p>
                                            PropTypes is a built-in package in React that allows you to validate the type of props that are passed to a component. To use PropTypes, you need to import it from the 'prop-types' package:

                                            javascript
                                            Copy code
                                            import PropTypes from 'prop-types';
                                            Then, you can define the PropTypes for a component by adding a propTypes object to the component:

                                            In this example, we have defined PropTypes for prop1, prop2, prop3, and prop4. Each PropTypes is defined as a property of the propTypes object, with the name of the prop as the key and the PropTypes validator as the value.

                                            The PropTypes validators are available as properties on the PropTypes object. In this example, we have used PropTypes.string, PropTypes.number, PropTypes.arrayOf, and PropTypes.shape to define the PropTypes for the different props.

                                            By setting isRequired on a PropTypes, we indicate that the prop is required and will throw a warning in the console if it's not passed to the component.

                                            Using PropTypes can help catch errors early in development and make your code more robust.</p>


                                                    <br /> <br /><br />

                                            <h2 className='text-dark py-5'>Tell us the difference between nodejs and express js. </h2>
                                            <p>
                                                <b>Node.js </b> <br />
                                                is a runtime environment that allows developers to use JavaScript on the server-side. It is built on the V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it well-suited for building scalable network applications.

                                            <b>Express.js</b> <br /> on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools that make it easier to build web applications with Node.js. Express.js provides a routing system for defining URL endpoints and handling HTTP requests, middleware for adding functionality to request/response handling, and support for template engines for rendering HTML.</p>

                                            <br /><br /> <br />

                                            <h2 className='text-dark'>What is a custom hook, and why will you create a custom hook?</h2>

                                    <p>
                                        A custom hook is a JavaScript function that utilizes built-in React hooks or other custom hooks to provide a reusable piece of functionality in a React application. Custom hooks enable developers to extract logic from components and reuse it in other parts of the application.

                                        Custom hooks can be created for a variety of use cases, such as handling forms, managing state, fetching data, and handling animations. They can also help reduce code duplication and improve code readability.

                                        To create a custom hook, you can define a function that uses built-in or custom hooks and returns an object with the required state and functions. You can then import and use this custom hook in any component within your application.</p>
                                    </Col>
                                </Row>
                              
                            </div>
                        </div>
                        <ReactPrint trigger={() => <Button variant='danger'>Print Now </Button> } content={() => ref.current} />
		            </div>
                <Row>
                    
                </Row>
            </Container>
        </div>
    );
};

export default BLog;