import React from 'react'

const About = () => {
  return (
    <>
                    <div className="accordion container" id="accordionExample ">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze your text
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Analyzing your text involves carefully examining its content, structure, and context to derive meaningful insights or conclusions. 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    The term "free to use" typically refers to resources or content that can be accessed or utilized without any cost or restrictions. It implies that users can employ the material for various purposes, such as personal, educational, or commercial, without having to pay fees or obtain specific permissions.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser compatible
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    When something is described as "browser compatible," it means that it is designed to work and display correctly in various web browsers. Web browsers, such as Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari, can render web content differently due to variations in their rendering engines and support for web standards.
                    </div>
                    </div>
                </div>
                </div>

    </>
  )
};

export default About;