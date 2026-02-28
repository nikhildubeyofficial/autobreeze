import React from "react";
import FaqItem from "./faqitem";
import { faq } from "../../utility";

const Faq = ({ data }) => {

  return (
    <div className="bg-theme-dark pb-5 pb-5">
      <div>
        <h1 className="text-center text-theme">FAQ's</h1>
      </div>
      <div className="container mt-4 bg-theme-dark">
        <div className="accordion bg-theme-dark" id="accordionExample">
          {faq?.map((item, index) => {
            return (
              <FaqItem
                id1={`x${index}`}
                id2={`y${index}`}
                qua={item.qua}
                ans={item.ans}
              />
            );
          })}

          <div className="accordion-item bg-theme-dark">
            <h2 className="accordion-header" id={"y"}>
              <button
                className="accordion-button bg-theme-dark text-theme fw-semibold border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#x`}
                aria-expanded="true"
                aria-controls={"x"}
              >
                How can I pick up a rental car?
              </button>
            </h2>
            <div
              id={"x"}
              className="accordion-collapse collapse show"
              aria-labelledby={"y"}
              data-bs-parent="#accordionExample"
            >
          <div className="accordion-body">
          <ul className="text-theme fw-lighter custom-bullets">
  <li className="ps-3 pt-2">
    <b className="fw-bold">Booking Confirmation:</b> Make sure you have your booking confirmation handy. This might be an email or a text message that includes details like your reservation number, pick-up address, and any special instructions.
  </li>
  <li className="ps-3 pt-2">
    <b className="fw-bold">Identification:</b> Have your driver's license and a credit card ready. Most rental agencies require a valid driver's license and a credit card for the security deposit.
  </li>
  <li className="ps-3 pt-2">
    <b className="fw-bold">Pick-Up Time:</b> Be aware of your scheduled pick-up time. AutoBreeze’s door-to-door service means they’ll come to you, so make sure you’re available at the agreed time.
  </li>
  <li className="ps-3 pt-2">
    <b className="fw-bold">Inspect the Vehicle:</b> When the car arrives, take a moment to inspect it for any existing damage and confirm that it’s clean and in good condition. It’s always a good idea to document any issues with photos.
  </li>
  <li className="ps-3 pt-2">
    <b className="fw-bold">Sign the Agreement:</b> You’ll likely need to sign a rental agreement. This will outline the terms of your rental, including the return policy, insurance coverage, and any other relevant details.
  </li>
  <li className="ps-3 pt-2">
    <b className="fw-bold">Payment:</b> Ensure that you understand the payment process. With AutoBreeze’s no hidden fees promise, there shouldn’t be any surprises, but it’s still a good idea to clarify any charges before you confirm.
  </li>
  <li className="ps-3 pt-2">
    <b className="fw-bold">Vehicle Overview:</b> Familiarize yourself with the car’s features and controls. The driver or representative might give you a quick overview of the vehicle.
  </li>
  <li className="ps-3 pt-2">
    <b className="fw-bold">Contact Information:</b> Keep the contact information for AutoBreeze handy in case you have any questions or need assistance during your rental period.
  </li>
</ul>

           <p className="ps-3 pt-2">Enjoy your rental! If you have any specific questions about AutoBreeze’s process, reaching out to their customer service directly could provide more tailored information.</p>
           </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
