import React, {useState} from "react";

const styles = {
  faqList: {
    borderTop: "1px solid #fff",
    backgroundColor: '#E0F3EF',
    borderRadius: 10,
  },
  faqItem: {
    borderBottom: "1px solid #fff",
    padding: "30px",
  },
  question: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  answer: {
    marginTop: "10px",
    fontSize: 15,
    color: "#555",
  },
  icon: {
    marginLeft: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "What if I don't get the choice I want if I take CIP?",
      answer: "Changes can be made once results are released, you are required to go through an interview process.",
    },
    {
      question: "How do I get to Republic Polytechnic?",
      answer: "From Woodlands interchange take bus 902 (Last Bus at 9am) or 169.",
    },
    {
      question: "What must I bring for Orientation?",
      answer: "Pack light and more information will be shared during OP25.",
    },
    {
      question: "Must I purchase a laptop?",
      answer: "Yes. All diplomas require a laptop for IHLs.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="container">
      <h1>
        Frequently Asked Questions
      </h1>
      <div style={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <div
              onClick={() => toggleFAQ(index)}
              style={styles.question}
            >
              {faq.question}
              <span style={styles.icon}>
                {activeFaq === index ? "−" : "+"}
              </span>
            </div>
            {activeFaq === index && (
              <div style={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
