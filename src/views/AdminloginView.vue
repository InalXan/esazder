<template>
  <div class="bg-second">
    <div class="flex justify-center h-screen">
      <div
        class="hidden bg-cover lg:block lg:w-2/3"
        style="
          background-image: url('https://images.unsplash.com/photo-1638787417399-1e2b2c3688af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        "
      >
        <div class="flex items-center h-full px-20 bg-primary bg-opacity-40">
          <div>
            <h2 class="text-4xl font-extrabold text-second">ESAZDER Admin Girişi</h2>
          </div>
        </div>
      </div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-text-primary">ESAZDER</h2>

            <p class="mt-3 text-text-primary dark:text-text-primary">ESAZDER panelinə Giriş Edin</p>
          </div>

          <div class="mt-8">
            <form>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm text-text-primary dark:text-text-primary"
                  >Admin</label
                >
                <input
                  type="text"
                  name="username"
                  id="email"
                  placeholder="Admin Name"
                  class="block w-full px-4 py-2 mt-2 text-text-primary placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600 dark:text-gray-200"
                    >Şifrə</label
                  >
                  <a
                    href="#"
                    class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >Şifrəni Unutduz?</a
                  >
                </div>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="************"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <button
                  class="w-full px-4 py-2 tracking-wide text-second transition-colors duration-200 transform bg-success rounded-md hover:bg-second hover:text-success focus:outline-none focus:bg-success focus:ring focus:ring-success focus:ring-opacity-50"
                >
                  Giriş
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
