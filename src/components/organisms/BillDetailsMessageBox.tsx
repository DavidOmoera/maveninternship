import sendIcon from "assets/send_icon.svg";
import chatboxicon from "assets/chatbox_icon.svg";
import coterieBot from "assets/coterie_bot.svg";

export function BillDetailsMessageBox() {
  return (
    <div className="px-9 pt-9 pb-32 mt-6 bg-accent800 rounded-xl w-full">
      <div className="row items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-accent100 rounded-full row items-center justify-center">
          <img
            src={coterieBot}
            alt="Coterie Bot"
            className="w-7 h-6 rounded-full"
          />
        </div>
        <h3 className="text-white font-extrabold">Ask Coterie AI</h3>
      </div>

      <div className="mt-6 py-9 px-6 bg-gray-50 rounded-lg flex items-center">
        <img
          src={chatboxicon}
          alt="User"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex items-center rounded-full p-2 h-12 basis-2/3 bg-white gap-3">
          <input
            type="text"
            placeholder="Message Coterie"
            className="flex-grow p-2 rounded-full bg-white focus:outline-none"
          />
          <button className="p-2 rounded-full text-white ml-2 bg-white">
            <img src={sendIcon} alt="Send" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
