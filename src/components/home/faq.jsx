import FaqAccordion from '../common/accordion';

const Faq = () => {
  const faqs = [
    {
      question: 'How do I create an account?',
      answer:
        'To create an account, click on the “Sign Up” button on the homepage. Fill in your details, including your name, email address, and a secure password. You will receive a verification email to confirm your registration. Once verified, you can log in and start using the app.',
    },
    {
      question: ' How do I start a video call?',
      answer:
        'After logging into your account, click the "New Meeting" button on your dashboard. You can either invite participants by sharing the meeting link or send them an invitation through email. Once everyone joins, the video call will start.',
    },
    {
      question: 'How many participants can join a video call?',
      answer:
        'Our service supports up to 50 participants in a single video call for basic accounts. For premium users, the limit increases to 100 participants.',
    },
    {
      question: ' Is there a time limit for video calls?',
      answer:
        'Free users can host video calls up to 40 minutes in duration. Premium users enjoy unlimited call time without any interruptions.',
    },
    {
      question: 'Can I share my screen during a video call?',
      answer:
        'Yes, you can share your screen during any video call. Click the "Share Screen" button in the call interface and choose whether you want to share your entire screen, a specific application window, or a browser tab.',
    },
  ];

  return (
    <div className='py-20 px-40'>
      <div className='text-5xl font-thin text-zinc-200 text-center py-16'>
        Frequently asked questions
      </div>
      {faqs.map((faq, index) => (
        <FaqAccordion key={index} faq={faq} />
      ))}
    </div>
  );
};

export default Faq;
