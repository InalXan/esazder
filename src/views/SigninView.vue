<template>
  <div class="bg-second flex justify-center items-center h-screen">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img
        src="https://images.unsplash.com/photo-1560616771-e73e5532aa5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Placeholder Image"
        class="object-cover w-full h-full"
      />
    </div>
    <!-- Right: Login Form -->
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-3xl font-semibold text-success mb-4">Giriş</h1>
      <form action="#" method="POST">
        <!-- Username Input -->
        <div class="mb-4">
          <label for="username" class="block text-text-primary">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            class="w-full border border-success rounded-md py-2 px-3 focus:outline-none focus:border-success"
            autocomplete="off"
          />
        </div>
        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-text-primary">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full border border-success rounded-md py-2 px-3 focus:outline-none focus:border-text-primary"
            autocomplete="off"
          />
        </div>
        <!-- Remember Me Checkbox -->
        <div class="mb-4 flex items-center">
          <input type="checkbox" id="remember" name="remember" class="text-blue-500" />
          <label for="remember" class="text-gray-600 ml-2">Yadda Saxla</label>
        </div>
        <!-- Forgot Password Link -->
        <div class="mb-6 text-blue-500">
          <a href="#" class="hover:underline">Şifrəni Unutdun?</a>
        </div>
        <!-- Login Button -->
        <button
          type="submit"
          class="bg-success text-second transition duration-100 hover:bg-second hover:text-success font-semibold rounded-md py-2 px-4 w-full"
        >
          Giriş
        </button>
      </form>
      <!-- Sign up  Link -->
      <div class="mt-6 text-center">
        <a
          href="/qeydiyyat"
          class="text-success bg-second border-2 border-success p-2 rounded-md transition duration-100 hover:bg-success hover:text-second"
          >Sign up Here</a
        >
      </div>
    </div>
  </div>
</template>
