<template>
  <div class="flex flex-col h-full overflow-auto">
    <table class="w-full text-white">
      <thead class="text-left border-b-2 border-gray-300 text-xl">
        <td class="py-3 w-2/5">Assets</td>
        <td class="py-3 w-1/5">Rate</td>
        <td class="py-3 w-1/5">Anual Amount</td>
        <td class="py-3 w-1/5">Balance</td>
      </thead>
      <tbody class="font-sans">
        <!-- each row -->
        <tr class="">
          <td class="py-2">Cash</td>
          <td class="py-2">-0.61%</td>
          <td class="py-2">$1,323</td>
          <td class="py-2">$216,819</td>
        </tr>
        <!-- each row -->
        <tr class="">
          <td class="py-2">Investments</td>
          <td class="py-2">11.62%</td>
          <td class="py-2">$74,533</td>
          <td class="py-2">$641,423</td>
        </tr>
        <!-- each row -->
        <tr class="">
          <td class="py-2">Misc.Assets</td>
          <td class="py-2"><span class="text-red-500">-14.22%</span></td>
          <td class="py-2"><span class="text-red-500">($9,962)</span></td>
          <td class="py-2"><span class="text-red-500">$70,055</span></td>
        </tr>
        <!-- each row -->
        <tr class="">
          <td class="py-2">Real Estate</td>
          <td class="py-2">3.94%</td>
          <td class="py-2">$22,435</td>
          <td class="py-2">$566,566</td>
        </tr>
      </tbody>
    </table>

    <div class="mt-auto">
      <table class="w-full text-white">
        <tr class="text-xl">
          <td class="py-3 w-2/5">Total</td>
          <td class="py-3 w-1/5">5.91%</td>
          <td class="py-3 w-1/5">$88,330</td>
          <td class="py-3 w-1/5">$1,494,863</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>