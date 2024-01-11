<template>
  <nav class="text-sm sm:text-base bg-white p-4 md:p-6 lg:p-6 rounded-md shadow-lg">
    <ol class="list-none p-0 inline-flex space-x-2">
      <li class="flex items-center">
        <svg
          onclick="window.location.href='/';"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
          class="cursor-pointer hover:fill-blue-500 transition-colors duration-300"
          fill="#4b5563"
        >
          <path
            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
          />
        </svg>
        <span class="mx-2">/</span>
      </li>
      <li class="flex items-center">
        <a href="#" class="text-gray-600 hover:text-blue-500 transition-colors duration-300">Ev</a>
        <span class="mx-2">/</span>
      </li>
      <li class="flex items-center">
        <span class="text-gray-800">Əlaqə</span>
      </li>
    </ol>
  </nav>
  <div class="flex justify-center items-center w-screen h-100 bg-second">
    <div class="container mx-auto my-4 px-4 lg:px-20">
      <div
        class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"
      >
        <div class="flex">
          <h1 class="font-bold uppercase text-5xl">
            ESAZDER'lə <br />
            Əlaqə
          </h1>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            class="w-full bg-primary text-text-primary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Ad*"
          />
          <input
            class="w-full bg-primary text-text-primary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Soyad*"
          />
          <input
            class="w-full bg-primary text-text-primary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
          />
          <input
            class="w-full bg-primary text-text-primary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Telefon Nömrəsi*"
          />
        </div>
        <div class="my-4">
          <textarea
            placeholder="Mesaj*"
            class="w-full h-32 bg-primary text-text-primary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div class="my-2 w-1/2 lg:w-1/4">
          <button
            type="submit"
            class="uppercase text-sm font-bold tracking-wide bg-success text-second transition duration:100 hover:bg-second hover:text-success p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
          >
            Göndər
          </button>
        </div>
      </div>

      <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-success rounded-2xl">
        <div class="flex flex-col text-second">
          <h1 class="font-bold uppercase text-4xl my-4">Digər Əlaqə Məlumatları</h1>
          <p class="text-second">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam, eu
            feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque
            ex.
          </p>

          <div class="flex my-4 w-2/3 lg:w-1/2">
            <div class="flex flex-col">
              <i class="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Ümumi Ofis</h2>
              <p class="text-second">inönü XXX Küçəsi EvXX MənzXX</p>
            </div>
          </div>

          <div class="flex my-4 w-2/3 lg:w-1/2">
            <div class="flex flex-col">
              <i class="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Call Us</h2>
              <p class="text-second">Tel: xxx-xxx-xxx</p>
              <p class="text-second">Fax: xxx-xxx-xxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
