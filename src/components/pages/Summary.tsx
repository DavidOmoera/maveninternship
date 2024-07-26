import notification from "assets/notification.svg";
import message from "assets/message.svg";
import profilePicture from "assets/profile_picture.png";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import senmat from "assets/senmat.svg";

export function Summary() {
  return (
    <div className="w-full h-screen p-4 bg-gray-100">
      <div className="bg-white rounded-xl px-9 py-6 mb-4 mx-9 mt-5 flex items-center justify-between">
        <h1 className="text-neutral950 font-extrabold text-4xl">← H.RES.964</h1>

        <div className="row gap-6">
          <div className="row gap-3">
            <img src={message} alt="messageicon" className="cursor-pointer" />
            <img
              src={notification}
              alt="notificon"
              className="cursor-pointer"
            />
          </div>
          <div className="row gap-3 items-center">
            <img src={profilePicture} />

            <article className="col gap-1">
              <h6 className="text-neutral950 font-bold">Anita Lever</h6>
              <p>
                <span className="text-neutral600 text-sm font-medium">
                  Coterie
                </span>{" "}
                <span className="text-primary text-sm font-extrabold">Pro</span>
              </p>
            </article>
            <ExpandMoreOutlinedIcon />
          </div>
        </div>
      </div>

      <div className="flex mx-9">
        {/* Left Column */}
        <div className="w-1/3 bg-white rounded-xl p-6 mr-4">
          <h2 className="text-xl font-bold">Secure the Border Act of 2023</h2>
          <p className="text-gray-600">May 29, 2023</p>
          <div className="flex gap-2 my-2">
            <span className="bg-gray-200 px-3 py-1 rounded-full">Security</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">
              Immigration
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Borders</span>
          </div>
          <div className="mt-4">
            <p>
              <strong>Legislative Type:</strong> Joint Resolution
            </p>
            <p>
              <strong>Bill Status:</strong> Passed
            </p>
            <p>
              <strong>Current Status:</strong> House Passage Report
            </p>
            <p>
              <strong>Amendments:</strong> <a href="#">2 Views</a>
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold">34</h3>
            <p className="text-gray-600">Votes for bill:</p>
            <ul className="list-none mt-2">
              <li className="text-green-600">
                Votes for <span className="text-black">25</span>
              </li>
              <li className="text-red-600">
                Votes against <span className="text-black">9</span>
              </li>
              <li className="text-orange-600">
                Abstained <span className="text-black">2</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 flex items-center">
            <img
              src={senmat}
              alt="Author"
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p>
                <strong>Author:</strong>
              </p>
              <p>
                Sen. Mat Adams
                <br />
                Senator
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/3 bg-white rounded-xl p-6">
          <nav className="flex gap-6 mb-4">
            <a href="#" className="text-gray-600">
              About
            </a>
            <a href="#" className="text-gray-600">
              Ask AI
            </a>
            <a href="#" className="text-black border-b-2 border-black">
              Summary
            </a>
            <a href="#" className="text-gray-600">
              Similar Bills
            </a>
            <a href="#" className="text-gray-600">
              Voting
            </a>
          </nav>
          <h2 className="text-2xl font-bold">
            Summary of “Secure the Border Act of 2023”
          </h2>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in
            ad suscipit, exercitationem ea temporibus, ipsam illo, similique
            laudantium voluptatum praesentium commodi ipsa odio! Vel qui libero
            at nulla sequi ratione voluptas eius ducimus debitis ipsam. Nihil
            ut, quaerat iste quos quisquam quam ipsa maxime sed praesentium,
            optio amet provident.
          </p>
          <ol className="list-decimal ml-6 mt-4">
            <li>Maecenas dapibus, arcu at fringilla ornare,</li>
            <li>est libero viverra dui, quis imperdiet sem ex ac lectus.</li>
            <li>Suspendisse auctor interdum finibus...</li>
            <li>id tincidunt dolor ornare at...</li>
            <li>libero congue consectetur.</li>
          </ol>
          <p className="mt-4 text-gray-700">
            Sed id augue felis. Morbi nec ultrices dolor...
          </p>
        </div>
      </div>
    </div>
  );
}
