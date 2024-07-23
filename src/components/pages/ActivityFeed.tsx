import { useState } from "react";

export function ActivityFeed() {
  const [activityFilter, setActivityFilter] = useState("All activity");
  const [timeFilter, setTimeFilter] = useState("Last 180 days");

  return (
    <div className="w-full h-screen p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Activity Feed</h1>
        </div>

        <br></br>

        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="border bg-white border-gray-300 p-2 rounded"
            >
              <option>Last 180 days</option>
              <option>Last 30 days</option>
              <option>Last 7 days</option>
            </select>

            <select
              value={activityFilter}
              onChange={(e) => setActivityFilter(e.target.value)}
              className="border bg-white border-gray p-2 rounded"
            >
              <option>All Activity</option>
              <option>Added a bill</option>
              <option>Removed a bill</option>
              <option>Edited Profile</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Search Activity"
            className="border bg-white border-gray-300 p-2 rounded w-64"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-2">
              <span className="text-gray-500 text-sm">20 mins ago</span>
              <div className="flex items-center gap-2">
                <span className="bg-red-200 p-1 rounded-full">
                  <img src="#" alt="remove" className="w-4 h-4" />
                </span>
                <span className="text-gray-700">
                  You <strong className="text-red-500">Removed</strong> a Bill
                  <a href="#" className="text-blue-500 ml-1">Secure the Border Act of 2023</a>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-2">
              <span className="text-gray-500 text-sm">4 hrs ago</span>
              <div className="flex items-center gap-2">
                <span className="bg-green-200 p-1 rounded-full">
                  <img src="#" alt="add" className="w-4 h-4" />
                </span>
                <span className="text-gray-700">
                  You <strong className="text-green-500">Added</strong> a Bill
                  <a href="#" className="text-blue-500 ml-1">Secure the Border Act of 2023</a>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-2">
              <span className="text-gray-500 text-sm">Yesterday, 5:34 pm</span>
              <div className="flex items-center gap-2">
                <span className="bg-blue-200 p-1 rounded-full">
                  <img src="#" alt="edit" className="w-4 h-4" />
                </span>
                <span className="text-gray-700">
                  You <strong className="text-blue-500">Edited</strong> your Profile
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-2">
              <span className="text-gray-500 text-sm">Yesterday, 2:45 pm</span>
              <div className="flex items-center gap-2">
                <span className="bg-red-200 p-1 rounded-full">
                  <img src="#" alt="remove" className="w-4 h-4" />
                </span>
                <span className="text-gray-700">
                  You <strong className="text-red-500">Removed</strong> a Legislature
                  <a href="#" className="text-blue-500 ml-1">Texas</a>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-2">
              <span className="text-gray-500 text-sm">22/04/2023, 8:22 am</span>
              <div className="flex items-center gap-2">
                <span className="bg-green-200 p-1 rounded-full">
                  <img src="#" alt="add" className="w-4 h-4" />
                </span>
                <span className="text-gray-700">
                  You <strong className="text-green-500">Added</strong> a Legislature
                  <a href="#" className="text-blue-500 ml-1">Alaska</a>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-2">
              <span className="text-gray-500 text-sm">21/04/2023, 8:19 am</span>
              <div className="flex items-center gap-2">
                <span className="bg-gray-200 p-1 rounded-full">
                  <img src="#" alt="login" className="w-4 h-4" />
                </span>
                <span className="text-gray-700">
                  You <strong className="text-gray-500">Logged in</strong> to your account
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-2">
              <span className="text-gray-500 text-sm">20/04/2023, 7:32 am</span>
              <div className="flex items-center gap-2">
                <span className="bg-gray-200 p-1 rounded-full">
                  <img src="#" alt="logout" className="w-4 h-4" />
                </span>
                <span className="text-gray-700">
                  You <strong className="text-gray-500">Logged out</strong> of your account
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
