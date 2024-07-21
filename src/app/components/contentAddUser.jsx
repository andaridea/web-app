import { userAgent } from "next/server";

export default async function ContentAddUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    maidenName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    birthDate: "",
    image: "",
    bloodGroup: "",
    height: "",
    weight: "",
    eyeColor: "",
    hair: {
      color: "",
      type: "",
    },
    ip: "",
    address: {
      address: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    macAddress:"",
    university: "",
    bank: {
      cardExpire: "",
      cardNumber: "",
      cardType: "",
      currency: "",
      iban: "",
    },
    company: {
      department: "",
      name: "",
      title: "",
      address: {
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
    },
    ein: "",
    ssn: "",
    userAgent: "",
    crypto: {
        coin: "",
        wallet: "",
        network: ""
    },
    role: ""
  });
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Add New User</h2>
          <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
            <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
              Personal Information
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="maidenName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Maiden Name
                </label>
                <input
                  type="text"
                  id="maidenName"
                  name="maidenName"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700"
                >
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Birth Date
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="bloodGroup"
                  className="block text-sm font-medium text-gray-700"
                >
                  Blood Group
                </label>
                <input
                  type="text"
                  id="bloodGroup"
                  name="bloodGroup"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="height"
                  className="block text-sm font-medium text-gray-700"
                >
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  step="0.01"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="weight"
                  className="block text-sm font-medium text-gray-700"
                >
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  step="0.01"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="eyeColor"
                  className="block text-sm font-medium text-gray-700"
                >
                  Eye Color
                </label>
                <input
                  type="text"
                  id="eyeColor"
                  name="eyeColor"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="hairColor"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hair Color
                </label>
                <input
                  type="text"
                  id="hairColor"
                  name="hairColor"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="hairType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hair Type
                </label>
                <input
                  type="text"
                  id="hairType"
                  name="hairType"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="block w-full mb-16 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
              <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                Contact Information
              </p>
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="cityAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="cityAdress"
                  name="cityAddress"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="StateAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  id="stateAdress"
                  name="stateAddress"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="stateCodeAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  State Code
                </label>
                <input
                  type="text"
                  id="stateCodeAdress"
                  name="stateCodeAddress"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="postalCodeAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCodeAdress"
                  name="postalCodeAddress"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="countryAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="countryAdress"
                  name="countryAddress"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="username"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="pt-10 pb-2">
              <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Career & Educational Information
                </p>
              </div>
            </div>
            <div>
              <label
                htmlFor="university"
                className="block text-sm font-medium text-gray-700"
              >
                University
              </label>
              <input
                type="text"
                id="university"
                name="university"
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700"
                >
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="companyAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Company Address
              </label>
              <textarea
                id="companyAddress"
                name="companyAddress"
                rows="3"
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="cityAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="cityAdress"
                  name="cityAddress"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="StateAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  id="stateAdress"
                  name="stateAddress"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="stateCodeAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  State Code
                </label>
                <input
                  type="text"
                  id="stateCodeAdress"
                  name="stateCodeAddress"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="postalCodeAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCodeAdress"
                  name="postalCodeAddress"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="countryAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="countryAdress"
                  name="countryAddress"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="pt-10 pb-2">
              <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Bank Information
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="cardType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Type
                </label>
                <input
                  type="text"
                  id="cardType"
                  name="cardType"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="cardExpire"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Expire
                </label>
                <input
                  type="text"
                  id="cardExpire"
                  name="cardExpire"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="currency"
                  className="block text-sm font-medium text-gray-700"
                >
                  Currency
                </label>
                <input
                  type="text"
                  id="currency"
                  name="currency"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="iban"
                className="block text-sm font-medium text-gray-700"
              >
                IBAN
              </label>
              <input
                type="text"
                id="iban"
                name="iban"
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
              />
            </div>
            <div className="pt-10 pb-2">
              <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Crypto Information
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="coin"
                  className="block text-sm font-medium text-gray-700"
                >
                  Crypto Coin
                </label>
                <input
                  type="text"
                  id="coin"
                  name="coin"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="wallet"
                  className="block text-sm font-medium text-gray-700"
                >
                  Wallet Address
                </label>
                <input
                  type="text"
                  id="wallet"
                  name="wallet"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="network"
                className="block text-sm font-medium text-gray-700"
              >
                Crypto Network
              </label>
              <input
                type="text"
                id="network"
                name="network"
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
              />
            </div>
            <div className="pt-10 pb-2">
              <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Other Information
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="ein"
                  className="block text-sm font-medium text-gray-700"
                >
                  EIN
                </label>
                <input
                  type="text"
                  id="ein"
                  name="ein"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="ssn"
                  className="block text-sm font-medium text-gray-700"
                >
                  SSN
                </label>
                <input
                  type="text"
                  id="ssn"
                  name="ssn"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="userAgent"
                  className="block text-sm font-medium text-gray-700"
                >
                  User Agent
                </label>
                <input
                  type="text"
                  id="userAgent"
                  name="userAgent"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="macAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mac Address
                </label>
                <input
                  type="text"
                  id="macAddress"
                  name="macAddress"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label
                  htmlFor="ip"
                  className="block text-sm font-medium text-gray-700"
                >
                  IP Address
                </label>
                <input
                  type="text"
                  id="ip"
                  name="ip"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg shadow hover:bg-primary-700 focus:outline-none focus:bg-primary-700"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
