'use client';

import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer: FC = () => {
  const [copyright, setCopyright] = useState<any>();

  useEffect(() => {
    const dataCopyright = (): any => {
      fetch(
        `https://cms-evalue-test-ac976666bf1a.herokuapp.com/api/all-content/652ebc173e84d2c547c36bf6`,
      )
        .then((res) => res.json())
        .then((data) => {
          setCopyright(data);
        })
        .catch((err) => console.log(err));
    };

    dataCopyright();
  }, []);

  return (
    <div className="container mx-auto w-3/4 pt-10">
      <div className="border border-zinc-300 rounded" />
      <div className="flex justify-between items-center py-7">
        <div>
          <p
            className="text-slate-500"
            dangerouslySetInnerHTML={{ __html: copyright?.Copyright }}
          ></p>
        </div>
        <div className="flex items-center">
          <Link href="/">
            <BsLinkedin className="mr-5 rounded" size={24} color="blue" />
          </Link>
          <Link href="/">
            <BsGithub className="mr-5" size={24} color="black" />
          </Link>
          <Link href="/">
            <BsInstagram size={24} color="purple" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
