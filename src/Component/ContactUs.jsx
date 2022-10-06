import { Fragment } from "react";
import {
  faPhone,
  faMap,
  faFax,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ContactUs() {
  return <Fragment>
     <div className="item w-40">
            <div>
              <span className="green u-text-sup">CONTACT US</span>
              <h2>Feel Free To Contact Us</h2>
            </div>

            <div className="flex ">
              <div className="item contact-info mt-30">
                <div className="flex">
                  <div className="item">
                    <i>
                      <FontAwesomeIcon icon={faPhone} />
                    </i>
                    <a href="tel:00 7625 98626">00 7625 98626</a>
                  </div>
                  <div className="item">
                    <i>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                    <a href="mainto:00 7625 98626">info@info.com</a>
                  </div>
                </div>

                <div className="flex mt-30">
                  <div className="item">
                    <i>
                      <FontAwesomeIcon icon={faMap} />
                    </i>
                    <a href="">adress of caompany can be here</a>
                  </div>
                  <div className="item">
                    <i>
                      <FontAwesomeIcon icon={faFax} />
                    </i>
                    <a href="">00 7625 98626</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </Fragment>

}