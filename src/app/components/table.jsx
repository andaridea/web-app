import React, { useEffect, useState } from "react";
import ModalDetailUser from "./modal";

export default function Table({ searchQuery }) {
  const [dataUsers, setDataUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users/search", {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-type": "application/json",
        },
      });
      const result = await res.json();
      setDataUsers(result.users);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredUsers = dataUsers.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleSeeDetail = (id) => {
    const user = dataUsers.find((user) => user.id === id);
    setSelectedUser(user)
  }

  return (
    <>
      <div className="relative pt-8 overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={user.id}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {`${user.firstName} ${user.lastName}`}
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => handleSeeDetail(user.id)}
                    href
                  >
                    See Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <ModalDetailUser 
          user = {selectedUser}
          onClose = {() => setSelectedUser(null)}
        />
      )}
    </>
  );
}
