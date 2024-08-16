import profilePicture from "assets/profile_picture.webp";
import coterieBot from "assets/coterie_bot.svg";
import sendIcon from "assets/send_icon.svg";
import XAndShare from "assets/X_and_share.svg";
import moreOptions from "assets/more_options.svg";
import classNames from "classnames";

export function ASK_AI() {
  const messages = [
    {
      text: "Vitae purus elementum arcu volutpat nunc ultricies lectus ultricies sit. Dignissim dictumst accumsan vitae senectus maecenas nunc feugiat gravida.",
      time: "14th Dec, 2023 11:22 am",
    },
    {
      text: "Euismod nec dictumst placerat sit ultricies eget morbi. Sapien ut aliquam nibh dapibus dapibus viverra. Arcu convallis et imperdiet egestas. Felis commodo eu egestas tristique. Aliquam aliquam tempor tempus amet sed tristique sed dui. Nec cursus donec dui ut senectus sed platea at arcu.",
    },
    {
      text: "Lacus fermentum enim convallis in non felis interdum. Sit tincidunt aliquet neque sed sed id et aliquam nibh.",
      time: "14th Dec, 2023 11:22 am",
    },
    {
      text: "Enim diam est dui et fames in tellus. Rutrum viverra porta vitae quam duis mauris porta tellus. Dui varius lorem lectus nunc imperdiet venenatis. Magna mi nulla pretium nibh dignissim erat ultricies augue mattis. Varius risus consectetur velit metus. Enim vivamus lectus commodo consectetur commodo fermentum urna. Vestibulum sit cras non porttitor facilisis mi ac tristique urna. Porttitor pellentesque convallis molestie pharetra vestibulum consequat. Laoreet nunc mi enim ornare et dolor fringilla lectus sit. Eu velit sapien non feugiat sodales in eu molestie. Etiam orci morbi neque hendrerit suspendisse interdum eu.",
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-red-600 rounded-lg flex flex-col relative w-full">
        {/** Chat Header */}
        <div className="w-full row justify-between items-center mb-9">
          <div className="row items-center gap-4">
            <div className="w-10 h-10 rounded-full row items-center justify-center bg-red-900">
              <img
                src={coterieBot}
                alt="Coterie Bot"
                className="w-7 h-6 rounded-full"
              />
            </div>
            <h4 className="text-primary">Coterie AI</h4>
          </div>

          <img
            src={moreOptions}
            alt="More Options"
            className="ml-auto cursor-pointer"
          />
        </div>

        <div className="space-y-8 flex-grow">
          {messages.map((message, index) => (
            <div key={index} className="relative">
              {message.time && (
                <div className="flex items-center my-4">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="mx-2 text-gray-500 text-sm">
                    {message.time}
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
              )}
              <div
                className={classNames("row items-end gap-2", {
                  "justify-end": index % 2 === 0,
                  "justify-start": index % 2 !== 0,
                })}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="basis-4/5">
                      <p
                        className="p-6 rounded-xl"
                        style={
                          index === 0 || index === 2
                            ? { background: "#F5F6FB" }
                            : { background: "bg-gray-100" }
                        }
                      >
                        {message.text}
                      </p>
                    </div>
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className="w-10 h-10 object-cover rounded-full flex-shrink-0 mt-1"
                    />
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 bg-accent100 rounded-full row items-center justify-center">
                      <img
                        src={coterieBot}
                        alt="Coterie Bot"
                        className="w-7 h-6 rounded-full"
                      />
                    </div>
                    <div className="basis-4/5">
                      <p
                        className={classNames("p-6 rounded-xl", {
                          "bg-accent50 text-neutral950": index === 1,
                          "bg-accent800 text-white":
                            index === messages.length - 1,
                          "bg-neutral50 text-neutral950":
                            index !== 1 && index !== messages.length - 1,
                        })}
                      >
                        {message.text}
                      </p>
                    </div>
                  </>
                )}
                {index === 1 || index === 3 ? (
                  <img
                    src={XAndShare}
                    alt="X and Share"
                    className="cursor-pointer"
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mt-4">
          <div className="flex items-center rounded-full p-2 h-12 max-w-[742px] bg-[#F5F6FB] gap-3">
            <input
              type="text"
              placeholder="Message Coterie"
              className="flex-grow p-2 rounded-full focus:outline-none"
              style={{ background: "#F5F6FB" }}
            />
            <button className="p-2 rounded-full text-white ml-2 bg-[#F5F6FB]">
              <img src={sendIcon} alt="Send" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
