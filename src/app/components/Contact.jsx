import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GitHubIcon from "../../../public/images/contact/github-mark.svg"
import LinkedInIcon from "../../../public/images/contact/linkedin-mark.svg"
import TreehouseIcon from "../../../public/images/contact/treehouse-mark.svg"

const Contact = () => {
  return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div>
        {/* SUMMARY */}
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I am looking for opportunities as a full stack software developer! My inbox is open for any inquiries, questions, or even if you'd just like to chat! Email me at <strong>SEAN.CROOKS.P@GMAIL.COM</strong>
        </p>

        {/* SOCIAL MEDIA LINKS */}
        <div className='socials flex flex-row gap-2'>
          <Link
            href='https://github.com/crooks-s'
            target="_blank"
          >
            <Image src={GitHubIcon} alt='github icon' width={50} height={50} />
          </Link>
          <Link href='https://www.linkedin.com/in/crookss/'
            target="_blank"
          >
            <Image src={LinkedInIcon} alt='linkedin icon' className='relative bottom-1.5 left-1' width={100} height={100} />
          </Link>
          <Link href='https://teamtreehouse.com/profiles/crookss'
            target="_blank"
          >
            <Image src={TreehouseIcon} alt='treehouse icon' className='relative top-0.5' width={50} height={50} />
          </Link>
        </div>
      </div>

      {/* PITCH VIDEO */}
      <div id='intro-video' className='flex flex-col gap-4'>
        <iframe
          width="460"
          height="256"
          src="https://www.youtube.com/embed/xlzXcWdf4o0?si=2_sx28Ma0MLWiiQn"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{maxWidth: "420px"}}
        />
      </div>
    </section>
  )
}

export default Contact