<script>
export default {
  data() {
    return {
      HolidayItems: [
        {
          name: 'Novruz Bayramı',
          image: `https://imgs.search.brave.com/MyTzcyzpDPmVl262i_yNT40kHtp9Lt1n2aVoqqOWnNE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90ZWhz/aWwuY29tLmF6L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzEw/L05vdnJ1ei1CYXly/YW1pbmEtYWlkLXNl/aXIuanBn`,
          content:
            'Novruz in Azerbaijan (Azerbaijani: Novruz Bayramı) is a traditional holiday which celebrates the Persian New Year and the coming of Spring. When Azerbaijan was part of the Soviet Union, the celebration of Novruz was generally unofficial and at times even prohibited.[1] Currently in Azerbaijan, Novruz is treated as an official public holiday. In accordance with Article 105 of the Labour Code of Azerbaijan passed in 2006, workers receive five days off for Novruz.[2] After neighbouring Iran, Azerbaijan hosts the longest observance and number of public days related to Novruz, with a total (including weekend) of 5 days.[3]'
        },
        {
          name: 'Novruz Bayramı',
          image: `https://imgs.search.brave.com/MyTzcyzpDPmVl262i_yNT40kHtp9Lt1n2aVoqqOWnNE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90ZWhz/aWwuY29tLmF6L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzEw/L05vdnJ1ei1CYXly/YW1pbmEtYWlkLXNl/aXIuanBn`,
          content:
            'Novruz in Azerbaijan (Azerbaijani: Novruz Bayramı) is a traditional holiday which celebrates the Persian New Year and the coming of Spring. When Azerbaijan was part of the Soviet Union, the celebration of Novruz was generally unofficial and at times even prohibited.[1] Currently in Azerbaijan, Novruz is treated as an official public holiday. In accordance with Article 105 of the Labour Code of Azerbaijan passed in 2006, workers receive five days off for Novruz.[2] After neighbouring Iran, Azerbaijan hosts the longest observance and number of public days related to Novruz, with a total (including weekend) of 5 days.[3]'
        }
      ]
    }
  }
}
</script>
<template>
  <!-- component -->
  <section class="bg-second">
    <div class="container px-6 py-10 mx-auto">
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
            <a href="#" class="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              >Ev</a
            >
            <span class="mx-2">/</span>
          </li>
          <li class="flex items-center">
            <span class="text-gray-800">Milli Bayramlar</span>
          </li>
        </ol>
      </nav>

      <div
        v-for="HolidayItem in HolidayItems"
        :key="HolidayItem"
        class="mt-8 lg:-mx-6 lg:flex lg:items-center"
      >
        <img
          class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
          :src="HolidayItem.image"
          alt=""
        />

        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
          <p class="text-sm text-text-primary uppercase">Bayram</p>

          <p class="block mt-4 text-2xl font-semibold text-gray-800 md:text-3xl">
            {{ HolidayItem.name }}
          </p>

          <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            {{ HolidayItem.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
