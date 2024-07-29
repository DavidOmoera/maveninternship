import sendIcon from "assets/send_icon.svg";
import chatboxicon from "assets/chatbox_icon.svg";

export function BillDetailsMessageBox() {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-center">
      <img
        src={chatboxicon}
        alt="User"
        className="w-10 h-10 rounded-full mr-3"
      />
      <input
        type="text"
        placeholder="Message Coterie"
        className="flex-1 p-2 bg-white border rounded-lg outline-none"
        style={{ paddingRight: "3rem" }}
      />
      <button className="absolute right-3">
        <img src={sendIcon} alt="Send" className="h-6 w-6" />
      </button>
    </div>
  );
}
