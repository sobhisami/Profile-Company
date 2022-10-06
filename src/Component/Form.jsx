import { Fragment, useRef } from 'react';
import ContactUs from './ContactUs';
import { Input } from './Input';
export const Form = () => {
  let ONSubmit=(event)=>{
event.preventDefault();
  SavaObjext();
  }
  let SavaObjext=()=>{
    let NewObject={
      id:Math.random(),
      text1:TextRef.current.value,
      text2:Text2Ref.current.value,
      tel:TelRef.current.value,
      textarea:TextareaRef.current.value,
    }
    console.log(NewObject);
  }
let TextRef=useRef();
let Text2Ref=useRef();
let TelRef=useRef();
let TextareaRef=useRef();
  return (
    <Fragment>
      <section id="contactus">
        <div className="flex ">
         <ContactUs/>

          <div className="item w-60">
            <div className="">
              <div>
                <span className="green u-text-sup"> Get in touch</span>
                <h2>
                  Please submit your request so that one of our consultants will
                  contact you soon!
                </h2>
              </div>
              <form onSubmit={ONSubmit}>
                <Input type="text"  placeholder="Your name.." ref={TextRef}/>
                 <Input type="text"    placeholder="Your Subject.." ref={Text2Ref} />
                  <Input type="tel"    placeholder="Your phone.." ref={TelRef}/>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.." ref={TextareaRef} ></textarea>
                 <Input type="submit"  value="Submit"  />
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
