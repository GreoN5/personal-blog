'use client';

import React, { FC } from 'react';

const ContactPage: FC = () => {
  // const [messageSent, setMessageSent] = useState<any>();

  // const onSubmit = (e: any): void => {
  //   e.preventDefault();
  //
  //   // fetch(
  //   //   'https://cms-evalue-test-ac976666bf1a.herokuapp.com/api/email-sender/652ebc173e84d2c547c36bf6',
  //   //   {
  //   //     method: 'POST',
  //   //   },
  //   // )
  //   //   .then((res) => res.json())
  //   //   .then((data) => setMessageSent(data))
  //   //   .catch((err) => console.log(err));
  // };

  return (
    <div className="bg-white px-20 py-16 mt-5 h-full rounded-md">
      <form
        action="https://cms-evalue-test-ac976666bf1a.herokuapp.com/api/email-sender/652ebc173e84d2c547c36bf6"
        // onSubmit={onSubmit}
        method="POST"
        className="flex flex-col"
      >
        <h1>Send email</h1>
        <div className="my-3 flex flex-col">
          <label htmlFor="sender">Sender</label>
          <input name="sender" type="email" required className="outline" />
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="subject">Subject</label>
          <input name="subject" type="text" required className="outline" />
        </div>
        <div className="my-3 flex w-full">
          <textarea
            className="outline w-full"
            name="body"
            placeholder="Message"
            id="userMessage"
            required
          ></textarea>
        </div>
        <input type="hidden" name="origin" value="https://personal-blog-alpha-eight.vercel.app/" />
        <input type="submit" value="Submit" />
      </form>
      {/*<div className="my-5 font-bold text-xl accent-green-800">{messageSent?.message}</div>*/}
    </div>
  );
};

export default ContactPage;
