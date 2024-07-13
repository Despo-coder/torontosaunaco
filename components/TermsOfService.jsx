import React from 'react'

const TermsOfService = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 md:px-12 lg:px-24 py-8">
          <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>
            <p className="mb-6">
              By placing an order with The Toronto Sauna Co., you agree to our terms and conditions. Please note that once an order is placed and manufacturing begins, the purchase is non-refundable. Additionally, our products are not CSA or WETT certified.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-center">Refund Policy for Custom Saunas</h2>
            <p className="mb-6 text-center">Effective Date: July 2024</p>
            
            <p className="mb-6">
              At The Toronto Sauna Co., we are committed to providing high-quality custom saunas tailored to your specific needs. Due to the personalized nature of our products, we have established the following refund policy:
            </p>
            
            <ol className="list-decimal list-inside mb-6 space-y-4">
              <li>
                <strong>Order Confirmation:</strong>
                <p className="ml-4">
                  Once your order for a custom sauna is confirmed and payment is received, we will begin the process of designing and planning your custom sauna.
                </p>
              </li>
              <li>
                <strong>Cancellation Before Manufacturing:</strong>
                <p className="ml-4">
                  You may cancel your order and request a full refund anytime before the manufacturing process begins. To cancel your order, please contact our customer service team at (416) 662-0984.
                </p>
              </li>
              <li>
                <strong>No Refunds After Manufacturing Begins:</strong>
                <p className="ml-4">
                  Once the manufacturing of your custom sauna has commenced, no refunds will be issued. Manufacturing typically begins within 7-10 business days after order confirmation. You will be notified via email when manufacturing begins.
                </p>
              </li>
              <li>
                <strong>Manufacturing Notification:</strong>
                <p className="ml-4">
                  We will provide you with an estimated timeline for the manufacturing process upon order confirmation. Additionally, you will receive an email notification once manufacturing starts.
                </p>
              </li>
              <li>
                <strong>Exceptions:</strong>
                <p className="ml-4">
                  In the unlikely event that there is a defect or issue with the sauna upon delivery, we will work with you to resolve the problem. Please refer to our Warranty Policy for more information on handling defects and repairs.
                </p>
              </li>
              <li>
                <strong>Contact Information:</strong>
                <p className="ml-4">
                  For any questions or concerns regarding your order or this refund policy, please contact our customer service team at:
                </p>
                <ul className="ml-8 list-disc">
                  <li>Email: <a href="mailto:thetorontosaunaco@gmail.com" className="text-blue-500 hover:underline">thetest@gmail.com</a></li>
                  <li>Phone: (416) 662-0984</li>
                </ul>
              </li>
            </ol>
            
            <p className="text-center mt-6">
              We appreciate your understanding and cooperation in this matter. Thank you for choosing The Toronto Sauna Co. for your custom sauna needs.
            </p>
            
            <p className="text-center mt-6">
              The Toronto Sauna Co.<br />
              A subsidiary of Pathways to Perennials Inc.
            </p>
          </div>
        </div>
      );
    
  
}

export default TermsOfService
