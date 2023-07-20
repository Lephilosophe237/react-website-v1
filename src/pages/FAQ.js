
import '../App.css';
import Video from '../components/Headervid';
import Partner from '../components/Partner';
import Bots from '../components/bots';
import '../components/Cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "What is GoKart?",
            content: `GoKart is a leading provider of high-quality go-karts and related accessories. We offer a wide range of go-karts suitable for all ages and skill levels, from kids to adults.`,
        },
        {
            title: "Are your go-karts safe for children?",
            content:
                "Yes, we prioritize safety, and many of our go-karts are designed with safety features such as seat belts, roll cages, and speed limiters. However, parental supervision and adherence to safety guidelines are essential for ensuring a safe riding experience for children.",
        },
        {
            title: "What is the recommended age for using your go-karts?",
            content: `Our go-karts are designed for various age groups. We have options suitable for kids as young as 5 years old up to adults. Please check the specific product details for age recommendations. `,
        },
        {
            title: "Do you offer delivery and shipping services?",
            content: <p>Yes, we offer delivery and shipping services to most locations. Shipping costs and delivery times may vary depending on your location. During the checkout process, you'll be able to see the available shipping options and costs.</p>,
        },
        {
            title: "How can I track my order?",
            content: <p>Once your order is shipped, you will receive a tracking number via email or SMS, depending on the contact information provided during checkout. You can use this tracking number to monitor the status and progress of your delivery.</p>,
        },
        {
            title: "What payment methods do you accept?",
            content: <p>We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and other online payment options. Availability may vary based on your location.</p>,
        },
        {
            title: "Do you offer returns and refunds?",
            content: <p>Yes, we have a return and refund policy. If you encounter any issues with your order or product, please contact our customer support within 30 days of receiving your purchase. We'll be happy to assist you with returns and refunds, subject to our terms and conditions.</p>,
        },
        {
            title: "Can I assemble the go-kart myself, or do you offer assembly services?",
            content: <p>Some of our go-karts may require assembly, while others come fully assembled. The product description will specify whether assembly is required. For certain models, we offer assembly services for an additional fee. Please check the product details or contact our support team for more information.</p>,
        },
        {
            title: "Are spare parts available for your go-karts?",
            content: <p>Yes, we stock a variety of spare parts for our go-karts. If you need a replacement part or accessory, please contact our customer support, and we'll assist you in finding the right component.</p>,
        },
        {
            title: "How can I contact customer support?",
            content: <p>You can reach our customer support team through the "Contact Us" page on our website, where you'll find a form to submit your inquiry. Alternatively, you can use the provided contact information during business hours for direct communication.</p>,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "grey",
    rowTitleColor: "grey",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};

function FAQ() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
      <>
        <Video videoUrl={'/videos/gallery.mp4'} speech={"Best Services in the region"} btntxt={"Reserve Free Pratice"} />
        <div className='cards'>
            <h1>FAQ</h1>
            <div className='cards__container'>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
            
            <div className='cards'>
            We hope these FAQs answered your questions. If you have any other concerns or inquiries, don't hesitate to contact us. Happy go-karting!
            </div>
            
            </div>
            
        </div>
        <Partner />
        <Bots />
      
      </>
    );
  }
  
  export default FAQ;


