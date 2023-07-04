<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mb-8">
      <!-- Left side -->
      <div class="w-full mx-4">
        <h5 class="input-category">Change Password</h5>
        <div class="mt-4">
          <label for="first__name" class="text-base font-sans"
            >Old Password</label
          >
          <input type="text" id="first__name" class="input w-full" />
        </div>
        <div class="mt-4">
          <label for="first__name" class="text-base font-sans"
            >New Password</label
          >
          <input type="text" id="first__name" class="input w-full" />
        </div>
        <div class="mt-4">
          <label for="first__name" class="text-base font-sans"
            >Confirm New Password</label
          >
          <input type="text" id="first__name" class="input w-full" />
        </div>

        <div class="mt-4 btn-center">
          <button class="btn">Update Password</button>
        </div>
      </div>

      <!-- Right side -->
      <div class="w-full mx-4">
        <h5 class="input-category">Security Questions</h5>
        <div class="mt-4">
          <label for="first__name" class="text-base font-sans"
            >1. What was your first pet's name?</label
          >
          <input type="text" id="first__name" class="input w-full" />
        </div>
        <div class="mt-4">
          <label for="first__name" class="text-base font-sans"
            >2. What is your mother's maiden name?</label
          >
          <input type="text" id="first__name" class="input w-full" />
        </div>
        <div class="mt-4">
          <label for="first__name" class="text-base font-sans"
            >3. What is your favorite sport's team?</label
          >
          <input type="text" id="first__name" class="input w-full" />
        </div>
        <div class="mt-4">
          <label for="first__name" class="text-base font-sans"
            >4. What is your childhood best friend name?</label
          >
          <input type="text" id="first__name" class="input w-full" />
        </div>

        <div class="mt-4 btn-center">
          <button class="btn">Update</button>
        </div>
      </div>
    </div>

    <!-- 2 factor -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mb-8">
      <div class="w-full mx-4">
        <h5 class="input-category">Two-Factor Authentication</h5>
        <p class="text-lg font-sans mt-4">
          A second step after entering your password verifies it's you signing
          in.
        </p>
        <div class="mt-4">
          <label for="two-factor-number" class="text-base font-sans"
            >Enter your mobile number</label
          >
          <input
            type="text"
            id="two-factor-number"
            class="input w-full"
            placeholder="303-555-1234"
          />
        </div>

        <div class="mt-4 btn-center">
          <button class="btn">Confirm</button>
        </div>
      </div>
    </div>
    <!-- 2 factor -->

      <div class="w-full mx-4 flex justify-center mt-8">
        <button class="btn-middle ">Delegate</button>
      </div>

    <!-- last section -->
    <div class="grid mb-16">
      <div class="w-full mx-4">
        <h5 class="input-category">Right to be Forgotten</h5>
        <p class="text-lg font-sans mt-4">
          At GreenStar, we believe that have a right to be forgotten. By using this tool, we recognize that we are in a position of trust. In response to this, we believe that it is our responsibility to keep your information secure so long as you trust us with it. This also means that we never sell it and allow you to delete it from our system if you wish to part ways with us. This is our right to be forgotten. If you are not a client, you can do this at any time. Please know that we take this literally. If you elect to be forgotten, all your data with us is erased from our system. If you are a client, it's complicated we cannot "forget" you so long as your account is open and for a period of time afterwards.
        </p>

        <div class="sm:flex justify-center sm:mx-20 mt-8">
            <button class="btn-middle">Delete Account</button>
            <button class="btn-middle sm:ml-8">Selective Erase</button>
        </div>

      </div>
    </div>
    <!-- last section -->

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input:not([type="submit"]):not(textarea) {
  @apply py-3 px-4 rounded-full mt-2 border-8 bg-white block border cursor-pointer;
}

textarea {
  border-radius: 1rem;
  @apply py-3 px-4 mt-2 border-8 bg-white block border;
}

.input[type="submit"] {
  @apply py-3 px-4 rounded-full mt-2 border-8 bg-gray-dark block border cursor-pointer;
}

.input-category {
  @apply text-2xl font-bold mt-8 font-sans;
}

.btn {
  @apply py-3 px-4 rounded-full mt-4 bg-gray-dark block cursor-pointer text-white ring-0 w-full sm:w-3/5 font-sans text-sm;
}

.btn-middle {
  @apply py-3 px-4 rounded-full mt-4 bg-gray-dark block cursor-pointer text-white ring-0 w-full sm:w-3/5 md:w-2/5 font-sans text-sm;
}

.btn-center {
  @apply flex flex-col items-center lg:items-start;
}

select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}
</style>
