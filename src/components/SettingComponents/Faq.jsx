import React from 'react';
import Accordian from '../accordian/Accordian';

const faqData = [
  
  { category: 'Your Account', 
    questions: [
      { question: 'How do I create my account', answer: 'abcd' },
      { question: 'How can I update my profile information', answer: 'To update your profile information, go to the "Your Account" section and click on "Edit Profile." Make the necessary changes and save them to keep your details up to date' },
      { question: 'What should I do if I forget my password?', answer: 'abcd' }
    ]
  },

  { category: 'Common User Questions (FAQ Style)',
     questions: [
      { question: 'How do I set up news alerts for new updates?', answer: 'abcd' },
      { question: 'How do I customize my news feed?', answer: 'abcd' },
      { question: 'How do I delete my search history?', answer: 'abcd' },
      { question: 'Can I filter news based on my interests?', answer: 'abcd' },
      { question: 'How do I enable/disable notifications for breaking news?', answer: 'abcd' }
    ]
  }
];

const Faq = () => {
  return (
    <>
      {faqData.map((section, index) => (
        <div key={index} className='flex flex-col justify-center items-center p-2'>
          <h2 className='p-5 text-xl font-semibold'>{section.category}</h2>
          <div>
            {section.questions.map((item, idx) => (
              <Accordian key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
