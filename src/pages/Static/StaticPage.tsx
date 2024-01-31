import DefaultCardLayout from "@/layout/DefaultCardLayout";

import { FaCheck } from "react-icons/fa";

function StaticPage() {
  return (
    <div className="px-5 mx-auto mt-5 max-w-7xl">
      <DefaultCardLayout>
        <h4 className=" text-primaryDark">
          Hello <span className="font-semibold">Brittany Carpenter,</span>
        </h4>
        <div className="mt-5">
          <p className="text-sm text-gray-500">
            Everyone owns an email address each and every hour, for everything
            from connecting at work, with business prospects, reaching out to
            friends and colleagues using the email address as an online
            passport. Nearly 99% of all apps and services we sign-up today
            required an email address, likewise to most shoppers loyalty cards,
            contest and offer entries, and more.
          </p>
          <br />
          <p className="text-sm text-gray-500">
            We all enjoy having an email address, but getting tons of spam
            emails each day doesn’t feel comfortable. Furthermore, it’s entirely
            common for stores to have their databases hacked, leaving your
            business email address at risk and more likely to end up on spam
            lists. Still, nothing done online is 100% private. Thus you need to
            protect your email contact identity and best done using disposable
            emails address.Disposable email address (DEA) technically means an
            approach where a user’s with a unique email address gets a temporary
            email address for your current contact. The DEA allow the creation
            of an email address that passes validity need to sign-up for
            services and website without having to show your true identity.
          </p>
          <br />
          <p className="text-sm text-gray-500">
            Everyone owns an email address each and every hour, for everything
            from connecting at work, with business prospects, reaching out to
            friends and colleagues using the email address as an online
            passport. Nearly 99% of all apps and service.
          </p>
        </div>
      </DefaultCardLayout>
      <br /> <br /> <br />
      <div>
        <h4 className=" text-primaryDark">
          Hello <span className="font-semibold">Brittany Carpenter,</span>
        </h4>
        <div className="mt-5">
          {[1, 2, 3, 4].map((item, index) => (
            <div className="flex mb-3 gap-x-3" key={index}>
              <div className="text-primary">
                <FaCheck size={26} />
              </div>
              <p className="text-sm">
                Everyone owns an email address each and every hour, for
                everything from connecting at work, with business prospects,
                reaching out to friends and colleagues using the email address
                as an online passport. Nearly 99% of all apps and service.
              </p>
            </div>
          ))}
        </div>
      </div>
      <br /> <br />
      <div className="mb-10">
        {[1, 2, 4, 5].map((item, index) => (
          <div className="mt-5" key={index}>
            <h4 className=" text-primaryDark">
              <span className="font-semibold">What is Lorem Ipsum?</span>
            </h4>
            <div className="mt-5">
              <p className="text-sm text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default StaticPage;
