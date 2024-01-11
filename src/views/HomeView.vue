<script>
export default {
  data() {
    return {
      NewsItems: [
        {
          name: 'Əskişəhərdə Zəlzələ',
          image: `https://images.unsplash.com/photo-1579777465969-cbdc744a155f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          content:
            'The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos',
          time: '12 gün əvvəl',
          location: 'Eskisehir',
          tag: '#esazder'
        },
        {
          name: 'Əskişəhərdə Zəlzələ',
          image: `https://images.unsplash.com/photo-1579777465969-cbdc744a155f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          content:
            'The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos',
          time: '12 gün əvvəl',
          location: 'Eskisehir',
          tag: '#esazder'
        },
        {
          name: 'Əskişəhərdə Zəlzələ',
          image: `https://images.unsplash.com/photo-1579777465969-cbdc744a155f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          content:
            'The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos',
          time: '12 gün əvvəl',
          location: 'Eskisehir',
          tag: '#esazder'
        },
        {
          name: 'Əskişəhərdə Zəlzələ',
          image: `https://images.unsplash.com/photo-1579777465969-cbdc744a155f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          content:
            'The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos',
          time: '12 gün əvvəl',
          location: 'Eskisehir',
          tag: '#esazder'
        }
      ],
      ActivityItems: [
        {
          name: 'Əskişəhərdə Zəlzələ',
          image: `https://images.unsplash.com/photo-1579777465969-cbdc744a155f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          content:
            'The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos',
          time: '12 gün əvvəl',
          location: 'Eskisehir',
          tag: '#esazder'
        },
        {
          name: 'Əskişəhərdə Zəlzələ',
          image: `https://images.unsplash.com/photo-1579777465969-cbdc744a155f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          content:
            'The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos',
          time: '12 gün əvvəl',
          location: 'Eskisehir',
          tag: '#esazder'
        },
        {
          name: 'Əskişəhərdə Zəlzələ',
          image: `https://images.unsplash.com/photo-1579777465969-cbdc744a155f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          content:
            'The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos',
          time: '12 gün əvvəl',
          location: 'Eskisehir',
          tag: '#esazder'
        },
        {
          name: 'Əskişəhərdə Zəlzələ',
          image: `https://images.unsplash.com/photo-1579777465969-cbdc744a155f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          content:
            'The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos',
          time: '12 gün əvvəl',
          location: 'Eskisehir',
          tag: '#esazder'
        }
      ]
    }
  }
}
</script>
<template>
  <!-- startup start  -->
  <div class="bg-second relative flex items-center justify-center overflow-hidden">
    <div
      class="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl z-40 lg:px-8"
    >
      <div class="flex flex-col items-center justify-between lg:flex-row py-16">
        <div class="relative">
          <div class="absolute top-0 -left-48 z-0 opacity-50">
            <img
              src="https://images.unsplash.com/photo-1579777465969-cbdc744a155f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="w-36 z-0 h-full object-fill fill-y text-y"
            />
          </div>
          <div class="lg:max-w-xl lg:pr-5 relative">
            <p class="flex text-sm uppercase text-xl">Əsas Səhifə</p>
            <h2
              class="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug"
            >
              <span
                class="my-1 inline-block border-b-8 border-g4 bg-second px-4 font-bold text-g4 animate__animated animate__flash"
                >ESAZDER</span
              >
            </h2>
            <p class="text-base text-text-primary">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              it.
            </p>
            <div class="mt-10 flex flex-col items-center md:flex-row">
              <RouterLink
                to="/giris"
                class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-success px-6 font-medium tracking-wide text-second shadow-md transition hover:bg-success focus:outline-none md:mr-4 md:mb-0 md:w-auto"
              >
                Bizə qatılın</RouterLink
              >
              <a href="/" aria-label="" class="group inline-flex items-center font-semibold text-g1"
                >Paylaşımlarımızı Görün
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            ></path>
          </svg>
          <div
            class="abg-success mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none"
          >
            <img
              src="https://images.unsplash.com/photo-1603998919253-91b6eeb8b8e5?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="hidden text-9xl varien absolute top-6 left-1/4 text-g/10">About Us</div>
    <div class="absolute -bottom-24 left-10 z-0 opacity-10">
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        class="w-96 z-0 h-full object-fill fill-primary text-primary"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
        ></path>
      </svg>
    </div>

    <div class="absolute bottom-0 left-3/4 z-0 opacity-10">
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        class="w-48 z-0 h-full -rotate-90 object-fill fill-red-300 text-red-300"
      >
        <path
          d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
    <div class="absolute top-10 left-3/4 z-0 opacity-10">
      <svg
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        class="w-96 z-0 h-full object-fill fill-blue-300 text-blue-300"
      >
        <path
          d="M230.704 99.2a4.004 4.004 0 0 0-4.01-3.995h-50.981c-2.215 0-5.212-1.327-6.693-2.964L155.289 77.08c-17.795-19.65-41.628-16.256-53.234 7.58l-38.736 79.557C60.42 170.172 52.705 175 46.077 175H29.359a3.996 3.996 0 0 0-3.994 3.995v10.01A4 4 0 0 0 29.372 193h24.7c8.835 0 19.208-6.395 23.174-14.293l43.645-86.914c3.964-7.894 12.233-9.228 18.473-2.974l17.184 17.219c3.123 3.13 9.242 5.667 13.647 5.667H226.7a4.005 4.005 0 0 0 4.004-3.994v-8.512z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
  <!-- startup end  -->
  <!-- trend start  -->
  <!-- component -->
  <div tabindex="0" class="focus:outline-none">
    <div class="p-3 m-10 text-4xl font-bold underline text-success">
      <h1>Xəbərlər</h1>
    </div>
    <!-- Remove py-8 -->
    <div class="mx-auto container py-8">
      <div class="flex flex-wrap items-center lg:justify-between justify-center">
        <!-- Card 1 -->
        <div
          v-for="NewsItem in NewsItems"
          :key="NewsItem"
          tabindex="0"
          class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
        >
          <div>
            <img
              alt="image"
              :src="NewsItem.image"
              tabindex="0"
              class="focus:outline-none w-full h-44"
            />
          </div>
          <div class="bg-second">
            <div class="flex items-center justify-between px-4 pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  tabindex="0"
                  class="focus:outline-none"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                </svg>
              </div>
              <div class="bg-success py-1.5 px-6 rounded-full">
                <p tabindex="0" class="focus:outline-none text-xs text-second">Xəbərlər</p>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-center">
                <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">
                  {{ NewsItem.name }}
                </h2>
                <p tabindex="0" class="focus:outline-none text-xs text-text-primary pl-5">
                  {{ NewsItem.time }}
                </p>
              </div>
              <p tabindex="0" class="focus:outline-none text-xs text-text-primary mt-2">
                {{ NewsItem.content }}
              </p>
              <div class="flex mt-4"></div>
              <div class="flex items-center justify-between py-4">
                <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">
                  {{ NewsItem.location }}
                </h2>
                <h3 tabindex="0" class="focus:outline-none text-success text-xl font-semibold"></h3>
              </div>
            </div>
          </div>
        </div>
        <!-- Card 1 Ends -->
      </div>
      <div class="w-full text-right">
        <RouterLink
          class="text-success font-bold hover:text-text-primary hover:underline p-2 m-2"
          to="/xeberler"
          >Daha Çox -></RouterLink
        >
      </div>
    </div>
  </div>

  <!-- component -->
  <div tabindex="0" class="focus:outline-none">
    <div class="p-3 m-10 w-full text-4xl font-bold underline text-success">
      <h1>Fəaliyyətlər</h1>
    </div>
    <!-- Remove py-8 -->
    <div class="mx-auto container py-8">
      <div class="flex flex-wrap items-center lg:justify-between justify-center">
        <!-- Card 1 -->
        <div
          v-for="ActivityItem in ActivityItems"
          :key="ActivityItem"
          tabindex="0"
          class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
        >
          <div>
            <img
              alt="image"
              :src="ActivityItem.image"
              tabindex="0"
              class="focus:outline-none w-full h-44"
            />
          </div>
          <div class="bg-second">
            <div class="flex items-center justify-between px-4 pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  tabindex="0"
                  class="focus:outline-none"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                </svg>
              </div>
              <div class="bg-success py-1.5 px-6 rounded-full">
                <p tabindex="0" class="focus:outline-none text-xs text-second">Fəaliyyət</p>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-center">
                <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">
                  {{ ActivityItem.name }}
                </h2>
                <p tabindex="0" class="focus:outline-none text-xs text-text-primary pl-5">
                  {{ ActivityItem.time }}
                </p>
              </div>
              <p tabindex="0" class="focus:outline-none text-xs text-text-primary mt-2">
                {{ ActivityItem.content }}
              </p>
              <div class="flex mt-4"></div>
              <div class="flex items-center justify-between py-4">
                <h2 tabindex="0" class="focus:outline-none text-text-primary text-xs font-semibold">
                  {{ ActivityItem.location }}
                </h2>
                <h3 tabindex="0" class="focus:outline-none text-success text-xl font-semibold"></h3>
              </div>
            </div>
          </div>
        </div>
        <!-- Card 1 Ends -->
      </div>
      <div class="w-full text-right">
        <RouterLink
          class="text-success font-bold hover:text-text-primary hover:underline p-2 m-2"
          to="/fealiyyet"
          >Daha Çox -></RouterLink
        >
      </div>
    </div>
  </div>

  <!-- trend end  -->
  <div class="flex flex-col mx-3 bg-white rounded-lg">
    <div class="w-full draggable">
      <div class="container flex flex-col items-center gap-8 mx-auto my-32">
        <h1 class="underline font-bold text-3xl leading-7 text-center text-success">Tərəfdaşlar</h1>
        <div
          class="flex flex-wrap items-center justify-center w-full gap-6 lg:gap-0 lg:flex-nowrap lg:justify-between"
        >
          <span>
            <img
              class="w-48"
              src="https://imgs.search.brave.com/u3wsb-i9vaG-AlXWujpQjMtuI55j6DQ6fFmqlksV390/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lZHUu/Z292LmF6L3VwbG9h/ZHMvZWxtLXRlaHNp/bC1uYXppcml5aS1s/b2dvLnBuZw"
              alt=""
            />
          </span>
          <span>
            <img
              class="w-48"
              src="https://imgs.search.brave.com/StV4cP3hgHxBtuyEkm8MK3WuTNwpWgTCs8tcH-YaYy4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9rYXRh/bG9xLmdvbWFwLmF6/L2ltYWdlcy9wYXJ0/bmVycy9kaW1fbG9n/by5wbmc_dj1oUzQ4/WFptckpHQWRnVUVr/a2FGSlVYUzN1aHZ0/bTN6WDJlNzA4cDAt/S0xz"
              alt=""
            />
          </span>
          <span>
            <img
              class="w-48"
              src="https://imgs.search.brave.com/wev7Pw1CCuC3obX3C4itURo8FS3zTIRayCeZ84v9mu4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9r/dWx0dXItYmFrYW5s/aWdpLWxvZ28ucG5n"
              alt=""
            />
          </span>
          <span>
            <img
              class="w-48"
              src="https://imgs.search.brave.com/6rp6J_T-gFBl9HHgl9cGzl1rP3aoW_bH_AZrt37Xu1s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci90/dXJraXllLWN1bWh1/cml5ZXRpLWdlbmNs/aWstdmUtc3Bvci1i/YWthbmxpZ2ktbG9n/by5wbmc"
              alt=""
            />
          </span>
          <span>
            <img
              class="w-48"
              src="https://imgs.search.brave.com/yj23Exureuzl-LF-7bs2rQ62FdOKW_0uaY0GeOh1AbE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0EvYXplcmJh/eWNhbi1nZW5jbGVy/LXZlLWlkbWFuLW5h/emlybGl5aS1sb2dv/LTU4RDFBOTExMkMt/c2Vla2xvZ28uY29t/LnBuZw"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- About start  -->
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p
          class="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider text-success uppercase rounded-full bg-second"
        >
          ESAZDER
        </p>
      </div>
      <h2
        class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
      >
        <span class="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)" width="52" height="24"></rect>
          </svg>
          <span class="relative text-success underline">Haqqımızda</span>
        </span>
        quick, brown fox jumps over a lazy dog
      </h2>
      <p class="text-base text-text-primary md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem
        aperiam, eaque ipsa quae.
      </p>
    </div>
    <div class="mx-auto lg:max-w-2xl">
      <div class="relative w-full transition-shadow duration-300 hover:shadow-xl">
        <img
          class="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt=""
        />
        <a
          href="/"
          aria-label="Play Video"
          class="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-text-primary bg-opacity-50 group hover:bg-opacity-25"
        >
          <div
            class="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-success rounded-full shadow-2xl group-hover:scale-110"
          >
            <svg class="w-10 text-second" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </div>
  <!-- About end  -->
</template>
