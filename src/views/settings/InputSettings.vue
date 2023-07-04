<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mb-8 font-sans">
    <!-- Left side -->
    <div class="w-full mx-4">
      <!-- 1st -->
      <div class="mt-4">
        <div class="flex items-center">
          <h5 class="category-name">Personal Assumptions</h5>

          <svg
            class="w-6 ml-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            />
          </svg>
        </div>
        <div class="mt-4">
          <div>
            <p class="inline">Semi-Retirement Age:</p>
            <span class="ml-2">63</span>
          </div>

          <div>
            <p class="inline">Retirement Age:</p>
            <span class="ml-2">67</span>
          </div>

          <div>
            <p class="inline">Life Expectancy:</p>
            <span class="ml-2">00</span>
          </div>

          <div>
            <p class="inline">Final expenses:</p>
            <span class="ml-2">$20,000</span>
          </div>

          <div>
            <p class="inline">Tax Mode:</p>
            <span class="ml-2">From 1040</span>
          </div>
        </div>
      </div>

      <!-- 2nd -->
      <div class="mt-8">
        <div class="flex items-center">
          <h5 class="category-name">Family and Entities</h5>

          <svg
            class="w-6 ml-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            />
          </svg>
        </div>
        <div class="mt-4">
          <table class="table-fixed">
            <thead>
              <tr>
                <th class="w-1/4 ..."></th>
                <th class="w-1/4 ..."></th>
                <th class="w-1/4 ..."></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Johnson</td>
                <td>Wife</td>
                <td>February 1,1950</td>
              </tr>
              <tr>
                <td>Joe Johnson, Jr.</td>
                <td>Son</td>
                <td>March 15,1980</td>
              </tr>
              <tr>
                <td>Suzy Johnson</td>
                <td>Daughter</td>
                <td>April 15,1981</td>
              </tr>
              <tr>
                <td>James Johnson</td>
                <td>Nephew</td>
                <td>May 15,1981</td>
              </tr>
              <tr>
                <td>Xyz Foundation</td>
                <td>Charity</td>
                <td>December 10,1990</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 3rd -->
      <div class="mt-8">
        <h5 class="category-name">Market Assumption</h5>
        <p class="mt-4">Default Growth Rates</p>
      </div>

      <!-- 4th -->
      <div class="btn-center mt-4">
        <button class="btn">Growth Assumption</button>
      </div>
    </div>

    <!-- Right side -->
    <div class="w-full mx-4 mb-8">

      <div class="mt-4">
        <h5 class="category-name">Accounts, Income, and Expenses</h5>
        <div class="mt-4 btn-center">
            <button class="btn">Assests and Liabilities</button>
            <button class="btn">Income</button>
            <button class="btn">Insurance</button>
            <button class="btn">Expenses and Budget</button>
        </div>
      </div>

      <div class="mt-8">
        <h5 class="category-name">Goal inputs</h5>
        <div class="mt-4 btn-center">
            <button class="btn">Savings and Transfers</button>
            <button class="btn">Objectives</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.category-name {
  @apply text-2xl font-bold;
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
