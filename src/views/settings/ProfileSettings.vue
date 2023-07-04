<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mb-8">
    <!-- Left side -->
    <div class="w-full mx-4">

      <div class="flex justify-center">
        <div class="profile-photo">
          <div class="profile-photo__overlay bg-gray-800 bg-opacity-80">
            <div class="flex flex-col items-center pt-2 text-lg text-gray-100">
              <i class="fas fa-camera"></i>
              <p>Upload Profile Picture</p>
            </div>
          </div>
          <img src="@/assets/images/user-1.jpg" alt="" />
        </div>
      </div>

      <div class="mt-4">
        <h5 class="input-category">Personal Information</h5>
        <div class="mt-4 sm:flex">
          <div class="input-left">
            <label for="first__name" class="text-lg w-full">First Name</label>
            <input
              type="text"
              id="first__name"
              class="input w-full"
              placeholder="Joe"
            />
          </div>
          <div class="input-right">
            <label for="last__name" class="text-lg">Last Name</label>
            <input
              type="text"
              id="last__name"
              class="input w-full"
              placeholder="Johnson"
            />
          </div>
        </div>

        <div class="mt-4 sm:flex">
          <div class="input-left">
            <label for="gender" class="text-lg">Gender</label>
            <select
              name="gender"
              id="gender"
              class="input select w-full"
              placeholder="Male"
            >
              <option value="male">Male</option>
              <option value="male">Female</option>
            </select>
          </div>
          <div class="input-right">
            <label for="last__name" class="text-lg">Date of Birth</label>
            <input
              type="text"
              id="last__name"
              class="input w-full"
              placeholder="Jauary 1, 2021"
            />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <h5 class="input-category">Contact Information</h5>
        <div class="mt-4 sm:flex">
          <div class="input-left">
            <label for="cell__number" class="text-lg w-full">Cell Number</label>
            <input
              type="text"
              id="cell__number"
              class="input w-full"
              placeholder="303-555-1234"
            />
          </div>
          <div class="input-right">
            <label for="email" class="text-lg">Email Address</label>
            <input
              type="email"
              id="email"
              class="input w-full"
              placeholder="joejohnson@gmail.com"
            />
          </div>
        </div>
      </div>

      <div class="w-full mt-8">
        <label for="address" class="text-lg">Primary residence</label>
        <textarea
          id="address"
          class="input textarea w-full rounded-lg"
          placeholder="123 main street, Springfield U.S.A 12345-6789"
        >
        </textarea>
      </div>
      
      <div class="btn-center mt-8">
        <button class="btn">Update Information</button>
      </div>
    </div>

    <!-- Right Side -->
    <div class="w-full mx-4 mb-8">
      <div class="mt-4">
        <p class="text-xl lg:text-base font-bold">Personality Tests</p>
        <p class="mt-3">Myers-Briggs</p>
        <p class="mt-3">DISC</p>
        <p class="mt-3">Enneagram</p>
        <p class="mt-3">True Colours</p>
        <p class="mt-3">HEXACO</p>
        <p class="mt-3">Eysenck</p>
        <p class="mt-3">Caliper</p>
        <p class="mt-3">Minnesota Multiphasic Personality Invertory (MMPI)</p>
      </div>
      <div class="mt-8">
        <p class="text-xl lg:text-base font-bold">Risk Rater</p>
        <p class="mt-2">Latest Score: 46</p>
      </div>
      <div class="mt-4 btn-center">
        <button class="btn">Risk Rater Search History</button>
        <button class="btn">Latest Risk Rater Report</button>
        <button class="btn">Retake Risk Rater</button>
      </div>
      <div class="mt-8 btn-center">
        <button class="btn">Communication Preferences</button>
        <button class="btn">Alerts Preferences</button>
        <button class="btn">Create Report</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.profile-photo {
  cursor: pointer;
  height: 220px;
  width: 220px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  @apply m-4;

  &__overlay {
    position: absolute;
    width: 100%;
    height: 50%;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover {
    .profile-photo__overlay {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.input:not([type="submit"]):not(textarea) {
  @apply py-3 px-4 rounded-full mt-2 border-8 bg-gray-500 block border border-gray-dark cursor-pointer;
}

textarea {
  border-radius: 1rem;
  @apply py-3 px-4 mt-2 border-8 bg-gray-500 block border border-gray-dark;
}

.input[type="submit"] {
  @apply py-3 px-4 rounded-full mt-2 border-8 bg-gray-dark block border cursor-pointer;
}

.input-category {
  @apply text-2xl font-bold mt-8;
}

.input-left {
  @apply w-full sm:w-1/2;
}

.input-right {
  @apply w-full sm:w-1/2 mt-4 sm:ml-4 sm:mt-0;
}

.btn {
  @apply py-3 px-4 rounded-full mt-2 border-8 bg-gray-dark block border cursor-pointer text-white ring-0 w-full sm:w-4/5 font-sans text-sm;
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